import { NextResponse } from "next/server";

export async function POST(request: Request) {

  try {

    const { language } = await request.json();

    const serverResponse = NextResponse.json({
      success: true,
      message: "Language changed successfully",
      data: language
    }, { status: 200 });

    serverResponse.cookies.set("language", language);

    return serverResponse;

  } catch (error) {

    console.error(error);

    return NextResponse.json({
      success: false,
      message: "Error changing language",
      data: null
    }, { status: 500 });

  }
}