export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import {sql} from "@vercel/postgres";

export async function GET() {

  try {
    const { rows: categories } = await sql`SELECT * FROM categories`;

    return NextResponse.json({
      success: true,
      message: "Categories fetched successfully",
      data: categories
    }, { status: 200 });

  } catch (error) {
    console.error(error)
    NextResponse.json({
      success: false,
      message: "Error fetching categories",
      data: null
    }, { status: 500 });
  }
}