import type { NextApiRequest, NextApiResponse } from 'next';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env['GMAIL_ACCOUNT'],
    pass: process.env['GMAIL_PASSWORD'],
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body.from, req.body.subject, req.body.body, req.body.name);
  if (!req.body.from || !req.body.subject || !req.body.body || !req.body.name) res.status(400).json({ error: 'Missing fields' });

  if (req.method === 'POST') {
    let mailOptions = {
      from: req.body.from,
      to: 'cooperrunyan@gmail.com',
      subject: req.body.subject,
      text: `From: ${req.body.name} ${req.body.from ? `(${req.body.from})` : ''}

  Message:
    ${req.body.body}

  Date: ${new Date().toLocaleString('en-us', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })}`,
    };

    transporter.sendMail(mailOptions, (error: unknown, success: unknown) => {
      if (error) res.json(error);
      else {
        res.json({ status: 'sent', body: req.body, data: success });
      }
    });
  }
}
