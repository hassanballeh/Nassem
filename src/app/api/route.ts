import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import validator from "validator";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    // Enhanced validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation
    if (!validator.isEmail(email)) {
      return NextResponse.json(
        { message: "Invalid email format" },
        { status: 400 }
      );
    }

    // Input sanitization and length restrictions
    const sanitizedName = validator.escape(name.trim());
    const sanitizedMessage = validator.escape(message.trim());
    const sanitizedPhone = phone ? validator.escape(phone.trim()) : "";

    if (sanitizedName.length > 50 || sanitizedMessage.length > 500) {
      return NextResponse.json(
        { message: "Input exceeds maximum length" },
        { status: 400 }
      );
    }

    // Environment variable check
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json(
        { message: "Server configuration error" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "hassanballeh2003@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${sanitizedName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${sanitizedPhone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedMessage}</p>
      `,
    });

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error processing request" },
      { status: 500 }
    );
  }
}
