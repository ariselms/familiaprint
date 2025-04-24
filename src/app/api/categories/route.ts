export const dynamic = "force-dynamic";
import { NextResponse } from "next/server";
import {sql} from "@vercel/postgres";

export async function GET() {

  try {
    const { rows: categories } = await sql`SELECT * FROM categories`;

    console.log(categories)

    return NextResponse.json({
      success: true,
      categories: categories
    });

  } catch (error) {
    console.error(error)
  }
}