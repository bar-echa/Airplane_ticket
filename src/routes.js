import path from 'path';
import { sendMail } from './mailer.js';

export default function registerRoutes(app, projectRoot) {
  app.post('/send-email', async (req, res) => {
    const { recipient, subject, message } = req.body;
    if (!recipient || !subject || !message) {
      return res.status(400).json({ error: 'recipient, subject and message are required' });
    }
    try {
      const info = await sendMail(recipient, subject, message);
      res.json({ message: 'Email sent successfully', info });
    } catch (err) {
      console.error('Error sending email:', err);
      res.status(500).json({ error: 'Failed to send email' });
    }
  });

  app.get(['/', '/home', '/Home'], (req, res) => {
    res.sendFile(path.join(projectRoot, 'public', 'index.html'));
  });
}
