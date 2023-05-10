var express = require('express');
var app = express();
app.listen(3000);

const httpStatus = require("http=status-codes"),
htmlContentType = {
    "Content-Type": "text/html"
},
routes = {
    "GET": {
        "/info": (req, res) => {
            res.writeHead(httpStatus.OK, {
                "Content-Type": "text/plain"
            })
            res.end("Welcome, to Titan Community Bank")
        }
    },
    'POST': {}
};

exports.handle = (req, res) => {
    try {
        if (routes[req.method][req.url]) {
            routes[req.method][req.url](req, res);
        } else {
            res.writeHead(httpStatus.NOT_FOUND, htmlContextType);
            res.end("<h1>Sorry, the page you are looking for is not here</h1>");
        }
    } catch (ex) {
        console.log("error: " + ex);
    }
};

exports.get = (url, action) => {
    routes["GET"][url] = action;
};

exports.post = (url, action) => {
    routes["POST"][url] = action;
};

