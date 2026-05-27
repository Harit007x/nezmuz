import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, platforms, complexity, timeline, notes, estimateRange } = await req.json()

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required fields." },
        { status: 400 }
      )
    }

    const platformLabels = {
      web: "Web Application",
      mobile: "Mobile Application",
      cloud: "Cloud-Native Backend",
      ai: "AI & Automation",
    }

    const complexityLabels = {
      basic: "Basic / MVP (Standard elements, clean layout)",
      premium: "Premium Design (Glassmorphism, custom micro-animations)",
      enterprise: "Enterprise-Grade (High scale, audit-ready security)",
    }

    const timelineLabels = {
      flexible: "Flexible (3-6 Months)",
      standard: "Standard (1-3 Months)",
      rush: "Rush Delivery (< 1 Month)",
    }

    const selectedPlatforms = Object.entries(platforms)
      .filter(([_, selected]) => selected)
      .map(([key]) => platformLabels[key as keyof typeof platformLabels] || key)
      .join(", ")

    const complexityText = complexityLabels[complexity as keyof typeof complexityLabels] || complexity
    const timelineText = timelineLabels[timeline as keyof typeof timelineLabels] || timeline

    const { data, error } = await resend.emails.send({
      from: "Zynetz Estimator <contact@zynetz.com>",
      to: ["admin@zynetz.com"],
      subject: `New Project Estimate Request from ${name}`,
      text: `
New Project Estimate Request

Client Name: ${name}
Client Email: ${email}
Calculated Range: ${estimateRange}

Project Details:
- Selected Platforms: ${selectedPlatforms || "None selected"}
- Design & Complexity: ${complexityText}
- Timeline: ${timelineText}

Additional Notes:
${notes || "No notes provided."}
      `,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #eaeaea; border-radius: 8px; background-color: #ffffff; color: #1f2937;">
          <h2 style="color: #111827; border-bottom: 2px solid #3b82f6; padding-bottom: 8px; margin-top: 0; font-size: 20px;">New Project Estimate Request</h2>
          
          <div style="background-color: #eff6ff; border: 1px dashed #bfdbfe; border-radius: 6px; padding: 16px; margin: 20px 0; text-align: center;">
            <p style="margin: 0; font-size: 14px; color: #1e3a8a;">Estimated Ballpark Range</p>
            <h3 style="margin: 4px 0 0 0; font-size: 24px; color: #2563eb; font-weight: bold;">${estimateRange}</h3>
          </div>

          <div style="margin-top: 16px;">
            <p style="margin: 6px 0; font-size: 14px;"><strong>Client Name:</strong> ${name}</p>
            <p style="margin: 6px 0; font-size: 14px;"><strong>Client Email:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></p>
          </div>

          <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 20px 0;" />

          <h4 style="color: #374151; margin: 0 0 10px 0; font-size: 15px; font-weight: 600;">Selected Configuration:</h4>
          <ul style="margin: 0; padding-left: 20px; font-size: 14px; line-height: 1.6; color: #4b5563;">
            <li><strong>Platforms/Scope:</strong> ${selectedPlatforms || "None specified"}</li>
            <li><strong>Design Tier:</strong> ${complexityText}</li>
            <li><strong>Timeline:</strong> ${timelineText}</li>
          </ul>

          <div style="margin-top: 20px;">
            <h4 style="color: #374151; margin: 0 0 8px 0; font-size: 15px; font-weight: 600;">Client Notes / Scope details:</h4>
            <div style="background-color: #f3f4f6; padding: 16px; border-radius: 6px; border-left: 4px solid #3b82f6; white-space: pre-wrap; font-size: 14px; line-height: 1.5; color: #4b5563;">${notes || "No notes provided."}</div>
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
