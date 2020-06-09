import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);
