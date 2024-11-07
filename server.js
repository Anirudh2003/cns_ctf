const express = require('express');
const app = express();
const port = 3000;

// Define the GET endpoint
app.get('/api/verify', (req, res) => {
    const { username, password } = req.query;

    // Check if username and password are provided
    if (!username || !password) {
        return res.status(400).send("Username and password are required.");
    }

    // Check if username is "admin"
    if (username === 'admin') {
        // Remove all occurrences of "admin" from the password
        const modifiedPassword = password.replace(/admin/g, '');

        // Check if the modified password is equal to "admin"
        if (modifiedPassword === 'admin') {
            return res.send("isfcrCNS{this is key}");
        } else {
            return res.send("better luck next time");
        }
    } else {
        return res.send("better luck next time");
    }
});

app.get('/', (req, res) => {
    res.send('isfcr{Flag_to_this_Challenge}');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});