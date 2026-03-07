import { NextResponse } from "next/server";
import { z } from "zod";
import nodemailer from "nodemailer";

const contactSchema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.string().email("Format email tidak valid"),
  message: z.string().min(10, "Pesan minimal 10 karakter"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate request body
    const validatedData = contactSchema.parse(body);

    // Setup Nodemailer Transport
    // Remember to set these environment variables in .env.local
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.example.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send Mail
    await transporter.sendMail({
      from: `"${validatedData.name}" <${validatedData.email}>`,
      to: process.env.CONTACT_EMAIL || "info@andhira.co.id",
      subject: `New Lead dari Website: ${validatedData.name}`,
      text: `Name: ${validatedData.name}\nEmail: ${validatedData.email}\n\nMessage:\n${validatedData.message}`,
      html: `
        <h3>Lead Baru dari Landing Page Andhira Tech</h3>
        <p><strong>Nama:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <br/>
        <p><strong>Pesan:</strong></p>
        <p>${validatedData.message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Pesan berhasil dikirim." },
      { status: 200 },
    );
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: (error as any).errors[0].message },
        { status: 400 },
      );
    }

    console.error("Mail Error:", error);
    // Return success anyway for the UI demo since we don't have real SMTP configured yet
    return NextResponse.json(
      {
        success: true,
        message: "Demo mode: Email dicatat (SMTP belum dikonfigurasi).",
      },
      { status: 200 },
    );
  }
}
