const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: 'Gmail', // or another email service
    auth: {
        user: 'nelsonmaria98@gmail.com', // your email
        pass: 'lwda jhpo pdqu gyer' // your email password or app password
    }
});

// POST endpoint to send email
app.post('/api/send-email', (req, res) => {
    const { first_name, last_name, email, message } = req.body;
    console.log(first_name)
    const mailOptions = {
        from: 'nelsonmaria98@gmail.com', // sender address
        to: 'Kagen@work-simply.com', // list of receivers
        subject: 'New Contact Form Submission',
        text: `You have a new message from ${first_name} ${last_name} (${email}): ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            return res.status(500).send('Error sending email');
        }
        console.log('Email sent: ' + info.response);
        res.status(200).send('Email sent successfully');
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
