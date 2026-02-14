import { NextResponse } from 'next/server'
import { getFreeSlots } from '@/lib/google-calendar'

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const date = searchParams.get('date')

    if (!date) {
        return NextResponse.json({ error: 'Date is required' }, { status: 400 })
    }

    const slots = await getFreeSlots(date)
    return NextResponse.json({ slots })
}
