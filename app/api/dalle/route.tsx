import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import fetch from "node-fetch";

export async function POST(request: NextRequest) {
  const { prompt } = await request.json();
  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  try {
    const response = await openai.images.generate({
      model: "dall-e-2", 
      prompt,
      size: "256x256"
    });

    const imageUrl = response.data[0]?.url;
    if (!imageUrl) {
      throw new Error("Image URL is undefined");
    }
    const imageResponse = await fetch(imageUrl);
    const imageBuffer = await imageResponse.buffer();
    const imageBase64 = "data:image/png;base64," + imageBuffer.toString('base64');

    return NextResponse.json({ imageUrl, imageBase64 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}