import { NextResponse } from "next/server"
import { Resend } from "resend"

// Initialize Resend with the custom RESEND_KEY environment variable
const resend = new Resend(process.env.RESEND_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, interest, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      )
    }

    // Since the domain zynetz.com is verified, we can send from contact@zynetz.com
    const { data, error } = await resend.emails.send({
      from: "Zynetz Contact Form <contact@zynetz.com>",
      to: ["admin@zynetz.com"],
      subject: `New Contact Form Inquiry from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Primary Interest: ${interest || "Not specified"}

Message:
${message}
      `,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px; background-color: #ffffff; color: #1f2937;">
          <h2 style="color: #111827; border-bottom: 2px solid #10b981; padding-bottom: 8px; margin-top: 0;">New Contact Form Submission</h2>
          <div style="margin-top: 16px;">
            <p style="margin: 4px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 4px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #10b981; text-decoration: none;">${email}</a></p>
            <p style="margin: 4px 0;"><strong>Primary Interest:</strong> ${interest || "Not specified"}</p>
          </div>
          <div style="margin-top: 20px;">
            <h4 style="color: #4b5563; margin-bottom: 6px; font-weight: 600;">Message:</h4>
            <div style="background-color: #f3f4f6; padding: 16px; border-radius: 6px; border-left: 4px solid #10b981; white-space: pre-wrap; font-size: 14px; line-height: 1.5; color: #374151;">${message}</div>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: error.message || "Failed to send email" }, { status: 400 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error: any) {
    console.error("Internal Server Error:", error)
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred" },
      { status: 500 }
    )
  }
}
