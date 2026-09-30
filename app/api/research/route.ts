// app/api/research/route.ts
import { NextResponse } from 'next/server';

let researchQueue = [
  {
    id: '1',
    title: 'HaitiAidShield: Practice-Based Anti-Corruption Framework',
    author: 'Vladimir Vilne',
    university: 'Franklin Cummings Tech',
    abstract: 'Technical whitepaper exploring trust-minimized tracking of institutional aid flows deployed as an MVP on the Polygon Amoy testnet.',
    status: 'Approved',
    date: '2026-06-12',
  },
  {
    id: '2',
    title: 'Verifiable Evidence Chains on IPFS & Streamlit',
    author: 'Student Researcher',
    university: 'Partner University',
    abstract: 'Architectural breakdown of cryptographic verification models for civil society documentation and secure legal logging.',
    status: 'Pending Review',
    date: '2026-08-20',
  },
];

export async function GET() {
  return NextResponse.json({ success: true, data: researchQueue });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, author, university, abstract, fileName } = body;

    if (!title || !author || !university || !abstract) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const newSubmission = {
      id: Date.now().toString(),
      title,
      author,
      university,
      abstract,
      status: 'Pending Review',
      date: new Date().toISOString().split('T')[0],
      fileName: fileName || 'No file attached',
    };

    researchQueue.unshift(newSubmission);

    return NextResponse.json({
      success: true,
      message: 'Research successfully transmitted to backend queue.',
      data: newSubmission,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Server error processing submission.' },
      { status: 500 }
    );
  }
}