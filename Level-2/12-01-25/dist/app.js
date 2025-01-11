"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
//parser
app.use(express_1.default.json());
//middleware
const appMiddleware = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
app.get('/', appMiddleware, (req, res) => {
    res.send('Hello World!');
});
app.post('/', (req, res) => {
    console.log(req.body);
    res.json({ message: 'Hello World from POST request!' });
});
exports.default = app;
