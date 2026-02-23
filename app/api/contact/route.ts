import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { firstName, phone, email, make, model, message } = body;

        // Create transporter using Gmail SMTP
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SMTP_EMAIL,       // your Gmail address (set in .env.local)
                pass: process.env.SMTP_APP_PASSWORD, // Gmail App Password (set in .env.local)
            },
        });

        const mailOptions = {
            from: `"Red Dune Contact Form" <${process.env.SMTP_EMAIL}>`,
            to: "ebadprince49@gmail.com  ",
            replyTo: email,
            subject: `New Contact Form Submission from ${firstName}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
                    <h2 style="color: #c0392b; border-bottom: 2px solid #c0392b; padding-bottom: 10px;">New Contact Form Message</h2>
                    
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr style="background-color: #f9f9f9;">
                            <td style="padding: 10px; font-weight: bold; width: 140px;">Name:</td>
                            <td style="padding: 10px;">${firstName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; font-weight: bold;">Phone:</td>
                            <td style="padding: 10px;">${phone}</td>
                        </tr>
                        <tr style="background-color: #f9f9f9;">
                            <td style="padding: 10px; font-weight: bold;">Email:</td>
                            <td style="padding: 10px;"><a href="mailto:${email}">${email}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; font-weight: bold;">Car Make:</td>
                            <td style="padding: 10px;">${make}</td>
                        </tr>
                        <tr style="background-color: #f9f9f9;">
                            <td style="padding: 10px; font-weight: bold;">Car Model:</td>
                            <td style="padding: 10px;">${model}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; font-weight: bold; vertical-align: top;">Message:</td>
                            <td style="padding: 10px;">${message}</td>
                        </tr>
                    </table>

                    <p style="color: #888; font-size: 12px; margin-top: 20px;">This message was sent from your website contact form.</p>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        console.error("Email sending error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to send email. Please try again." },
            { status: 500 }
        );
    }
}