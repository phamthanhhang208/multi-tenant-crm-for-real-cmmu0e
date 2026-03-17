import { NextResponse } from 'next/server'

// Retrieve a single lead by ID
export async function GET(request: Request, context: { params: Promise<{ [key: string]: string }> }) {
  return NextResponse.json({ message: 'Not implemented: GET /api/leads/[id]' }, { status: 501 })
}

// Update a single lead
export async function PUT(request: Request, context: { params: Promise<{ [key: string]: string }> }) {
  return NextResponse.json({ message: 'Not implemented: PUT /api/leads/[id]' }, { status: 501 })
}

// Delete a single lead
export async function DELETE(request: Request, context: { params: Promise<{ [key: string]: string }> }) {
  return NextResponse.json({ message: 'Not implemented: DELETE /api/leads/[id]' }, { status: 501 })
}

