import { NextResponse } from 'next/server'

// Create a new contact
export async function POST(request: Request, context: { params: Promise<{ [key: string]: string }> }) {
  return NextResponse.json({ message: 'Not implemented: POST /api/contacts' }, { status: 501 })
}

// Retrieve a list of all contacts
export async function GET(request: Request, context: { params: Promise<{ [key: string]: string }> }) {
  return NextResponse.json({ message: 'Not implemented: GET /api/contacts' }, { status: 501 })
}

