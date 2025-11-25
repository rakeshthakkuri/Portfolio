import nodemailer from 'nodemailer';

// Configure SMTP credentials via .env. In production use a real provider (SendGrid, Mailgun, AWS SES, etc.)

const createTransporter = () => {
  // If SMTP is configured, use it; otherwise, use a test account
  if (
    process.env.SMTP_HOST &&
    process.env.SMTP_PORT &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS
  ) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  // For development/testing, use a test account (you'll need to set this up)
  // Or use a service like Ethereal Email for testing: https://ethereal.email
  console.warn(
    '⚠️  SMTP not configured. Using placeholder email service. Configure SMTP in .env for production.'
  );

  // Placeholder - in production, you should configure real SMTP
  return nodemailer.createTransporter({
    host: 'smtp.example.com',
    port: 587,
    secure: false,
    auth: {
      user: 'placeholder@example.com',
      pass: 'placeholder',
    },
  });
};

export const sendContactEmail = async ({ name, email, message }) => {
  const transporter = createTransporter();

  // Default fallback if CONTACT_EMAIL isn't provided
  const recipientEmail = process.env.CONTACT_EMAIL || 'your-email@example.com';

  const mailOptions = {
    from: process.env.SMTP_FROM || `"Portfolio Contact" <${process.env.SMTP_USER || 'noreply@example.com'}>`,
    to: recipientEmail,
    replyTo: email,
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">New Contact Form Submission</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        <p style="color: #666; font-size: 12px;">
          This email was sent from your portfolio contact form.
        </p>
      </div>
    `,
    text: `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}
    `,
  };

  try {
    // In development without SMTP, this will fail gracefully
    // In production, ensure SMTP is properly configured
    if (
      process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS
    ) {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.messageId);
      return info;
    } else {
      // Log the contact form submission instead of sending email
      console.log('📧 Contact form submission (SMTP not configured):', {
        name,
        email,
        message,
      });
      console.log('⚠️  Configure SMTP in .env to enable email sending');
      // Return a mock success for development
      return { messageId: 'mock-message-id' };
    }
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};

