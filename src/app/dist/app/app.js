"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const express = require('express')
const app = (0, express_1.default)();
const port = 3000;
//parser
app.use(express_1.default.json());
//i create router 
const userRouter = express_1.default.Router();
//now i create logger means middleware
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
app.get('/', logger, (req, res) => {
    // we use param for id 
    // console.log(req.params);
    // we use query for name , email 
    console.log(req.query);
    res.send('Hello gghgghhhddg!');
});
app.post("/hello", (req, res) => {
    console.log(req.body);
    res.send("got data");
});
exports.default = app;
