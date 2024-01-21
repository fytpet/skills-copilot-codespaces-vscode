// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
// Create app
const app = express();
// Middlewares
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());
// Create route
app.post('/post', (req, res) => {
    res.send({
        message: `Post ${req.body.content} was added!`
    });
});
// Start server
app.listen(process.env.PORT || 8081);
