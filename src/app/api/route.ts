// import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import sendFeedbackEmail from "../../../sendEmailFunction";

export async function POST(request: NextRequest, response: NextResponse) {
  const { name, email, subject, message } = await request.json();

  try {
    await sendFeedbackEmail(name, email, subject, message);
    return NextResponse.json({ msg: "sent successfully" });
  } catch (err: any) {
    return NextResponse.json({ error: "Error sending message" });
  }
}
