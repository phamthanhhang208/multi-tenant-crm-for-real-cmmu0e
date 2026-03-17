import { NextResponse } from 'next/server'

// Retrieve a single contact by ID
export async function GET(request: Request, context: { params: Promise<{ [key: string]: string }> }) {
  return NextResponse.json({ message: 'Not implemented: GET /api/contacts/[id]' }, { status: 501 })
}

// Update a single contact
export async function PUT(request: Request, context: { params: Promise<{ [key: string]: string }> }) {
  return NextResponse.json({ message: 'Not implemented: PUT /api/contacts/[id]' }, { status: 501 })
}

// Delete a single contact
export async function DELETE(request: Request, context: { params: Promise<{ [key: string]: string }> }) {
  return NextResponse.json({ message: 'Not implemented: DELETE /api/contacts/[id]' }, { status: 501 })
}

