const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/encrypt', async (req, res) => {
  const { userId, voterId } = req.body;

  try {
    // Encrypting data using PHP API
    const response = await axios.post('http://localhost/encrypt.php', { userId, voterId });

    res.json({
      encryptedUserId: response.data.encryptedUserId,
      encryptedVoterId: response.data.encryptedVoterId
    });
  } catch (error) {
    res.status(500).send('Encryption failed');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});