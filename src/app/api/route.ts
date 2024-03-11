// import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

// import sendFeedbackEmail from "../../../sendEmailFunction";

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  //   const { name, email, subject, message } = req.body;
  console.log(body);
  try {
    // await sendFeedbackEmail(body.name, body.email, body.subject, body.message);
    return Response.json({ message: "successfull" });
  } catch {}
}
