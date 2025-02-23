import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request: NextRequest) {
  const { prompt } = await request.json();
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  try {
    const response = await openai.images.generate({
      model: "dall-e-2", 
      prompt,
      size: "256x256",
      response_format: "b64_json",
    });

    const imageBase64 = "data:image/png;base64," + response.data[0]?.b64_json;

    return NextResponse.json({ imageBase64 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}