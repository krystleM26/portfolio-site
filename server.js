const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use('/', router);
app.listen(3000, () => console.log('Server Running'));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'krystlemm89@gmail.com',
    pass: 'bkkgtgyobeklaaao',
  },
});

transporter.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Ready to Send');
  }
});

const mailOptions = {
  from: 'krystlemm89@gmail.com',
  to: 'mitchell.krystle2@gmail.com',
  subject: 'Contact Form Submission',
  text: 'This is a test',
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email Sent' + info.response);
  }
});
