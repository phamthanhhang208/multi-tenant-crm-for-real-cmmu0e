import { NextResponse } from 'next/server'

// Create a new lead
export async function POST(request: Request, context: { params: Promise<{ [key: string]: string }> }) {
  return NextResponse.json({ message: 'Not implemented: POST /api/leads' }, { status: 501 })
}

// Retrieve a list of all leads
export async function GET(request: Request, context: { params: Promise<{ [key: string]: string }> }) {
  return NextResponse.json({ message: 'Not implemented: GET /api/leads' }, { status: 501 })
}

