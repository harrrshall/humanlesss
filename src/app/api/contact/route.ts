import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    const { name, email, businessName } = await request.json();

    // Basic validation
    if (!name || !email || !businessName) {
        return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Ensure environment variables are set
    const user = process.env.EMAIL_SERVER_USER;
    const pass = process.env.EMAIL_SERVER_PASSWORD;
    const toEmail = process.env.EMAIL_TO;

    if (!user || !pass || !toEmail) {
        console.error('Missing email configuration environment variables');
        return NextResponse.json({ message: 'Server configuration error' }, { status: 500 });
    }

    // Configure Nodemailer transporter
    // IMPORTANT: Use App Passwords for Gmail if 2FA is enabled.
    // See: https://support.google.com/accounts/answer/185833
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // Example for Gmail
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: user, // Your Gmail address from .env.local
            pass: pass, // Your App Password from .env.local
        },
    });

    const mailOptions = {
        from: `"Contact Form" <${user}>`, // sender address
        to: toEmail, // list of receivers (your company email from .env.local)
        replyTo: email, // Set reply-to to the user's email
        subject: `New Contact Form Submission from ${businessName}`, // Subject line
        text: `Name: ${name}\nEmail: ${email}\nBusiness Name: ${businessName}`, // plain text body
        html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
           <p><strong>Business Name:</strong> ${businessName}</p>`, // html body
    };

    try {
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Failed to send email:', error);
        return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
    }
} 