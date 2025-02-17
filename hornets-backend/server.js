// (1) Import packages
const express = require('express'); // Framework used with js in node.js env to create API's/servers
const mysql = require('mysql2'); // Client (set of code) used to talk to the db with
const cors = require('cors'); // What enables React to communicate with backend

// (2) Set up middleware (Sits in the 'middle' between receiving requests & handling the route)
const app = express();
app.use(cors()); // Allow cross-origin requests (from React to Node)
app.use(express.json()); // Parses incoming JSON requests from frontend

// (3) Set up db connection
const db = mysql.createConnection({
    // 'process' is a built-in object providing control over ur node app.
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// (4) Test db connection
db.connect((err) => {
    if (err) {
        console.error("Error connecting to db", err);
        return;
    }
    console.log("Connected to MySQL db");
});

// (5) Define API routes

// GET route - Fetch all player info
app.get('/api/players', (req, res) => {
    db.query('SELECT * FROM players', (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Error fetching players'});
            return;
        }
        res.json(results); // send back 'players' data to client
    })
})

// POST route - Add a new player
app.post('/api/players', (req, res) => {
    // object destructuring (not doing it this time tho its convenient):
    // const { name, position, number, height, weight} = req.body;

    db.query(
        'INSERT INTO players (name, position, number, height, weight) VALUES (?, ?, ?, ?, ?)',
        [req.body.name, req.body.position, req.body.number, req.body.height, req.body.weight],
        (err, result) => {
            if (err) {
                res.status(500).json({error: 'Error adding player'});
                return;
            }
            // 'insertId' is unrelated to the table 'id' col you defined in workbench
            res.json({ id: result.insertId, ...req.body }) // send back created player
        }
    );
});

// (6) Start the server. Now that routes & middleware are defined, we can get start the server.
const PORT = 3001; // '3001' is common for node/express development.
app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}`)
});

// next: finish hornets component Hornets.jsx. 