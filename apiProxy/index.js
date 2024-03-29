// Add the necessary imports
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

// Create Express Server
const app = express();

// Config
const PORT = 3000;
const HOST = "localhost";
const API_SERVICE_URL = "https://api.notion.com/v1";

// Log incoming requests
app.use(morgan('dev'));

// Use cors lib to hopefull solve CORS issues
app.use(cors());
// Config cors to allow all origins
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

//Info GET endpoint
app.get('/info', (req, res, next) => {
    res.send("This is a proxy service");
});

app.get('/purge', (req, res, next) => {
        fetch("http://localhost:3000/json_placeholder/databases/11af47c3d89c4afd9000518e7ff90d03/query", {
            headers: {
                Authorization: "Bearer secret_xOLs7UclNIojYcjgJVPfco5zMciCRny5a30FNofTGxK",
                "Content-Type": "application/json"
            },
            method: "POST"
        })
        .then(response => console.log(response.json()))
        .catch((error) => {
            console.error('Error:', error);
        });
})

//Auth
    // Returns a 403 (Forbidden) if the Authorization Header is missing
app.use('', (req,res,next) => {
    if (req.headers.authorization) {
        next();
    } else {
        res.sendStatus(403);
    }
});

// Proxy enpoints
app.use('/json_placeholder', createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
        [`^/json_placeholder`]: '',
    }
}));

// Start the Proxy
app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`);
});

//Test command for querying the Chores database 
//curl -X POST -H "Authorization: Bearer secret_xOLs7UclNIojYcjgJVPfco5zMciCRny5a30FNofTGxK" -H "Content-Type: application/json" localhost:3000/json_placeholder/databases/11af47c3d89c4afd9000518e7ff90d03/query