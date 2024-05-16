import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  console.log("Hello, world!");
  return NextResponse.json("Hello, world!");
}
