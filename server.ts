import express from "express";
import path from "path";
import nodemailer from "nodemailer";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // CORS Middleware for Render / external calls
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    if (req.method === "OPTIONS") {
      return res.sendStatus(200);
    }
    next();
  });

  // Callback / Request Enquiry endpoint - dispatches email via SMTP
  app.post("/api/enquiry", async (req, res) => {
    try {
      const { name, email, phone, course, message } = req.body;
      const targetEmail = process.env.NOTIFICATION_EMAIL || "patilmayurmohan@gmail.com";

      console.log("-----------------------------------------");
      console.log("NEW CALLBACK / ENQUIRY REQUEST:");
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Phone: ${phone}`);
      console.log(`Course: ${course || 'General Enquiry'}`);
      console.log(`Recipient: ${targetEmail}`);
      console.log("-----------------------------------------");

      // Configure SMTP Transporter
      const smtpUser = process.env.SMTP_USER || "patilmayur7602@gmail.com";
      const smtpPass = (process.env.SMTP_PASS || "tiquwvozqayyfjiq").replace(/\s+/g, "");

      if (smtpUser && smtpPass) {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
          tls: {
            rejectUnauthorized: false
          },
          connectionTimeout: 10000,
          greetingTimeout: 10000,
          socketTimeout: 10000,
        });

        const mailOptions = {
          from: `"Universe Academy Enquiry" <${smtpUser}>`,
          to: targetEmail,
          subject: `🎓 New Callback Request from ${name} - Universe Academy`,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f8fafc; border-radius: 10px; border: 1px solid #e2e8f0;">
              <h2 style="color: #0F3A5A; margin-top: 0;">New Student Callback Request</h2>
              <p>A new student has requested a callback on Universe Academy:</p>
              <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
                <tr style="border-bottom: 1px solid #edf2f7;"><td style="padding: 10px; font-weight: bold; width: 120px; color: #0F3A5A;">Name:</td><td style="padding: 10px;">${name}</td></tr>
                <tr style="border-bottom: 1px solid #edf2f7;"><td style="padding: 10px; font-weight: bold; color: #0F3A5A;">Email:</td><td style="padding: 10px;"><a href="mailto:${email}">${email}</a></td></tr>
                <tr style="border-bottom: 1px solid #edf2f7;"><td style="padding: 10px; font-weight: bold; color: #0F3A5A;">Phone:</td><td style="padding: 10px;"><a href="tel:${phone}">${phone}</a></td></tr>
                <tr style="border-bottom: 1px solid #edf2f7;"><td style="padding: 10px; font-weight: bold; color: #0F3A5A;">Course:</td><td style="padding: 10px;">${course || 'General Enquiry'}</td></tr>
                <tr style="border-bottom: 1px solid #edf2f7;"><td style="padding: 10px; font-weight: bold; color: #0F3A5A;">Message:</td><td style="padding: 10px;">${message || 'N/A'}</td></tr>
              </table>
              <br/>
              <p style="font-size: 12px; color: #5A6573; margin-bottom: 0;">Submitted on ${new Date().toLocaleString()}</p>
            </div>
          `,
        };

        // Try sending email with timeout guard
        try {
          await Promise.race([
            transporter.sendMail(mailOptions),
            new Promise((_, reject) => setTimeout(() => reject(new Error("SMTP timeout after 8 seconds")), 8000))
          ]);
          console.log(`Successfully sent email notification to ${targetEmail}`);
        } catch (mailErr) {
          console.error("Warning: SMTP email sending encountered an error/timeout:", mailErr);
        }
      } else {
        console.warn(`[SMTP Warning] SMTP_USER or SMTP_PASS environment variables are not set.`);
      }

      return res.status(200).json({ 
        success: true, 
        message: `Callback request processed for ${targetEmail}` 
      });
    } catch (error) {
      console.error("Error processing callback enquiry:", error);
      return res.status(500).json({ success: false, message: "Server error processing enquiry" });
    }
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
