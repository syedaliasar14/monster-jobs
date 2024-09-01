import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request: NextRequest) {
  const { prompt, response_format } = await request.json();
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  try {
    const response = await openai.chat.completions.create({
      messages: [{ role: "system", content: prompt }],
      model: "gpt-4o-mini",
      response_format: response_format || { type: "text" },
    });

    const message = response.choices[0].message.content;
    return NextResponse.json({ message });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}