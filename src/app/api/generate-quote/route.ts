import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { topic, category } = body;

    if (!topic) {
      return NextResponse.json({ error: 'Topic is required' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Gemini API key not configured' }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const prompt = `Generate 5 unique, inspiring, and meaningful quotes about "${topic}"${category ? ` in the ${category} category` : ''}. 
    
    Requirements:
    - Each quote should be original and thought-provoking
    - Keep quotes between 10-25 words
    - Make them motivational and uplifting
    - Avoid clichés and overused phrases
    - Return only the quotes, one per line
    - No numbering, bullets, or extra formatting
    
    Topic: ${topic}
    ${category ? `Category: ${category}` : ''}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Split the response into individual quotes and clean them up
    const quotes = text
      .split('\n')
      .map(quote => quote.trim())
      .filter(quote => quote.length > 0 && !quote.match(/^\d+[.)]/)) // Remove numbered items
      .filter(quote => quote.length > 10) // Filter out very short responses
      .slice(0, 5); // Ensure we only return 5 quotes

    if (quotes.length === 0) {
      return NextResponse.json({ error: 'Failed to generate quotes' }, { status: 500 });
    }

    return NextResponse.json({ quotes });
  } catch (error) {
    console.error('Error generating quotes:', error);
    return NextResponse.json({ error: 'Failed to generate quotes' }, { status: 500 });
  }
}