
import nodemailer from 'nodemailer';

export async function sendMail(recipient, subject, message) {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;

  if (!user || !pass) {
    throw new Error('EMAIL_USER or EMAIL_PASS is missing in Render.');
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user,
      pass,
    },
  });

  const info = await transporter.sendMail({
    from: process.env.EMAIL_FROM || user,
    to: recipient,
    subject,
    text: message,
  });

  console.log('Email sent:', info.messageId);

  return {
    messageId: info.messageId,
  };
}
