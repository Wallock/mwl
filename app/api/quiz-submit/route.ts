import { NextRequest, NextResponse } from "next/server";

const API_URL = "https://js.wb.in.th/api/leads";
const API_TOKEN = "leads_33de793fdb678d81d72db773597003bf";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Leads-Token": API_TOKEN,
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json({ success: false, message: "เกิดข้อผิดพลาดภายใน" }, { status: 500 });
  }
}
