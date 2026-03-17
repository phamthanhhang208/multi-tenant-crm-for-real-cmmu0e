import { NextResponse } from 'next/server'

// Create a new activity
export async function POST(request: Request, context: { params: Promise<{ [key: string]: string }> }) {
  return NextResponse.json({ message: 'Not implemented: POST /api/activities' }, { status: 501 })
}

// Retrieve a list of all activities
export async function GET(request: Request, context: { params: Promise<{ [key: string]: string }> }) {
  return NextResponse.json({ message: 'Not implemented: GET /api/activities' }, { status: 501 })
}

