import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL!;

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    if (!data.companyName || !data.username) {
      return NextResponse.json({ message: "Invalid data" }, { status: 400 });
    }

    await axios.post(SLACK_WEBHOOK_URL, {
      text: `📩 *새로운 문의* \n \`\`\`✅회사명: ${data.companyName}\n✅이름: ${data.username}\n✅연락처: ${data.contactNumber}\n✅이메일: ${data.email}\n✅문의 제목: ${data.inquiryTitle}\n✅문의 내용: ${data.inquiryContent}\`\`\` `,
    });
    return NextResponse.json({ message: "Message sent to Slack" }, { status: 200 });
  } catch (error) {
    console.error("slack error", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
