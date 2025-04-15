import nodemailer from 'nodemailer';

// Create a transporter using Gmail SMTP
const createTransporter = () => {
  if (!process.env.GMAIL_USER) {
    throw new Error('Gmail user not found in environment variables');
  }
  
  // Check for either APP_PASSWORD or regular PASSWORD
  const password = process.env.GMAIL_APP_PASSWORD || process.env.GMAIL_PASSWORD;
  if (!password) {
    throw new Error('Gmail password not found in environment variables');
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // Your Gmail address
      pass: password, // Use either App Password or regular password
    },
  });
};

export const sendResumeEmail = async (
  fullName: string,
  email: string,
  phone: string,
  resumeFile: File
) => {
  try {
    const transporter = createTransporter();

    // Convert the file to a base64 string
    const buffer = await resumeFile.arrayBuffer();
    const base64Content = Buffer.from(buffer).toString('base64');

    const mailOptions = {
      from: {
        name: 'Fatoora X Careers',
        address: process.env.GMAIL_USER as string, // Your Gmail address
      },
      to: 'info@fatoorax.com', // Where to send the submissions
      subject: `New Resume Submission: ${fullName}`,
      text: `
        New resume submission from the careers page:
        
        Full Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
      `,
      html: `
        <h3>New resume submission from the careers page</h3>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p>Resume attached as PDF.</p>
      `,
      attachments: [
        {
          filename: resumeFile.name || 'resume.pdf',
          content: base64Content,
          encoding: 'base64',
          contentType: 'application/pdf',
        },
      ],
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending email via Gmail:', error);
    throw error;
  }
};
