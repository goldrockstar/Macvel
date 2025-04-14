const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'goldthanges.r@gmail.com',
    pass: 'ienoejzictyggqbw',
  },
  secure: false,
  tls: {
    rejectUnauthorized: false,
  }
});

const sendEmail = async (to, subject, html) => {
  const mailOptions = {
    from: 'muthupandi49431@gmail.com',
    to,
    subject,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully to', to);
  } catch (error) {
    console.error('Failed to send email:', error);
  }
};

module.exports = sendEmail;

