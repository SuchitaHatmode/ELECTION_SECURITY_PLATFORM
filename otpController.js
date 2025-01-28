// controllers/otpController.js
module.exports.sendOtp = (req, res) => {
    const { phoneNumber } = req.body;

    if (!phoneNumber) {
        return res.status(400).json({ success: false, message: 'Phone number is required.' });
    }

    // OTP sending logic (using Firebase, Twilio, etc.)
    console.log(`OTP would be sent to: ${phoneNumber}`);

    res.json({ success: true, message: 'OTP sent successfully!' });
};

// server.js (main file)

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sendOtp } = require('./controllers/otpController');
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Define the /send-otp route using the controller
app.post('/send-otp', sendOtp);

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
