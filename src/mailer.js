import nodemailer from 'nodemailer';

export async function sendMail(recipient, subject, message) {
  const user = process.env.EMAIL_USER || 'your_email_address';
  const pass = process.env.EMAIL_PASS || 'your_email_password';

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  try {
    await transporter.verify();
  } catch (verifyErr) {
    console.error('Transporter verify failed:', verifyErr);
    throw new Error('Mail transporter verification failed: ' + verifyErr.message);
  }

  const mailOptions = {
    from: process.env.EMAIL_FROM || user,
    to: recipient,
    subject,
    text: message,
  };

  const info = await transporter.sendMail(mailOptions);
  console.log("Email sent");

}
