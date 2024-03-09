import { NextResponse } from "next/server";

export async function GET(req, res) {
  return res.json({ message: "Hello World" });
} 