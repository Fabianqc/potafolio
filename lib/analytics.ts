import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'analytics.json');

// Interface para el archivo JSON (histórico)
interface AnalyticsData {
    daily: Record<string, number>;  // 'YYYY-MM-DD': count
    weekly: Record<string, number>; // 'YYYY-WW': count
    total: number;
}

// Mapa en memoria para usuarios activos "En vivo"
// Key: sessionId (string) -> Value: lastSeen Timestamp (number)
const activeSessions = new Map<string, number>();

const SESSION_TIMEOUT_MS = 15000; // 15 segundos para considerar offline

export class AnalyticsTracker {
    private static initFile() {
        if (!fs.existsSync(path.dirname(DATA_FILE))) {
            fs.mkdirSync(path.dirname(DATA_FILE), { recursive: true });
        }
        if (!fs.existsSync(DATA_FILE)) {
            const initialStore: AnalyticsData = { daily: {}, weekly: {}, total: 0 };
            fs.writeFileSync(DATA_FILE, JSON.stringify(initialStore, null, 2));
        }
    }

    private static readData(): AnalyticsData {
        this.initFile();
        try {
            const data = fs.readFileSync(DATA_FILE, 'utf-8');
            return JSON.parse(data);
        } catch (error) {
            console.error('Error reading analytics data:', error);
            return { daily: {}, weekly: {}, total: 0 };
        }
    }

    private static writeData(data: AnalyticsData) {
        this.initFile();
        try {
            fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
        } catch (error) {
            console.error('Error writing analytics data:', error);
        }
    }

    // Helper para obtener YYYY-MM-DD
    private static getTodayKey(): string {
        const d = new Date();
        return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    }

    // Helper para obtener semana del año YYYY-WW
    private static getWeekKey(): string {
        const d = new Date();
        d.setHours(0, 0, 0, 0);
        d.setDate(d.getDate() + 3 - (d.getDay() + 6) % 7);
        const week1 = new Date(d.getFullYear(), 0, 4);
        const weekNumber = 1 + Math.round(((d.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
        return `${d.getFullYear()}-W${String(weekNumber).padStart(2, '0')}`;
    }

    // Retorna stats limpios de inactivos
    public static getActiveCount(): number {
        const now = Date.now();
        let count = 0;
        // Limpiar expirados
        for (const [sessionId, lastSeen] of Array.from(activeSessions.entries())) {
            if (now - lastSeen > SESSION_TIMEOUT_MS) {
                activeSessions.delete(sessionId);
            } else {
                count++;
            }
        }
        return count;
    }

    // Llama el cliente cada 10s
    public static trackPing(sessionId: string): void {
        const isNewSession = !activeSessions.has(sessionId);
        activeSessions.set(sessionId, Date.now());

        // Si es sesión nueva "hoy", incrementar contadores
        if (isNewSession) {
            const data = this.readData();
            const today = this.getTodayKey();
            const week = this.getWeekKey();

            data.daily[today] = (data.daily[today] || 0) + 1;
            data.weekly[week] = (data.weekly[week] || 0) + 1;
            data.total = (data.total || 0) + 1;

            this.writeData(data);
        }
    }

    public static getStats() {
        const data = this.readData();
        const today = this.getTodayKey();
        const week = this.getWeekKey();

        return {
            live: this.getActiveCount(),
            today: data.daily[today] || 0,
            thisWeek: data.weekly[week] || 0,
            total: data.total
        };
    }
}
