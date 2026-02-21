import os from "os";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function GET() {
    // En un entorno de producción real en tu servidor Linux, 
    // esto te dará datos reales de la máquina donde corre el proceso Node.js.

    const uptimeDays = Math.floor(os.uptime() / (3600 * 24));
    const totalMem = Math.round(os.totalmem() / 1024 / 1024 / 1024); // GB
    const freeMem = Math.round(os.freemem() / 1024 / 1024 / 1024); // GB
    const usedMem = totalMem - freeMem;

    // CPU Load average (solo funciona bien en Linux/macOS)
    const loadAvg = os.loadavg();
    const cpuLoad = (loadAvg[0] * 10).toFixed(1); // Estimación rápida

    return NextResponse.json({
        status: "online",
        uptime: `${uptimeDays}d`,
        memory: {
            used: usedMem,
            total: totalMem,
            percentage: Math.round((usedMem / totalMem) * 100)
        },
        cpu: {
            cores: os.cpus().length,
            model: os.cpus()[0].model,
            load: `${cpuLoad}%`
        },
        os: os.type() === "Windows_NT" ? "Windows Server" : os.type(),
        timestamp: new Date().toISOString()
    });
}
