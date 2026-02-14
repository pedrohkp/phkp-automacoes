import { NextResponse } from 'next/server'
import { createEvent } from '@/lib/google-calendar'

export async function POST(request: Request) {
    const body = await request.json()
    const event = await createEvent(body)
    return NextResponse.json(event)
}
