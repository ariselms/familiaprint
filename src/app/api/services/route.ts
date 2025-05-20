export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import {sql} from "@vercel/postgres";

export async function GET() {

  try {
    const { rows: materials } = await sql`SELECT * FROM services`;

    return NextResponse.json({
      success: true,
      message: "Services fetched successfully",
      data: materials
    }, { status: 200 });

  } catch (error) {
    console.error(error)
    NextResponse.json({
      success: false,
      message: "Error fetching services",
      data: null
    }, { status: 500 });
  }
}