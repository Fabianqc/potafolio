import { NextRequest, NextResponse } from 'next/server';
import { AnalyticsTracker } from '@/lib/analytics';

export const dynamic = 'force-dynamic';

export async function GET() {
    const stats = AnalyticsTracker.getStats();
    return NextResponse.json(stats);
}

export async function POST(req: NextRequest) {
    try {
        const { sessionId } = await req.json();

        if (!sessionId) {
            return NextResponse.json({ error: 'Session ID is required' }, { status: 400 });
        }

        AnalyticsTracker.trackPing(sessionId);
        const stats = AnalyticsTracker.getStats();

        return NextResponse.json(stats);
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
