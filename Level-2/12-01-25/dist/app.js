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
//router
const userRouter = express_1.default.Router();
const bookingRouter = express_1.default.Router();
app.use('/api/v1/users', userRouter);
app.use('/api/v1/bookings', bookingRouter);
userRouter.post('/create-user', appMiddleware, (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({ message: 'User created successfully',
        user
    });
});
bookingRouter.post('/create-booking', appMiddleware, (req, res) => {
    const booking = req.body;
    console.log(booking);
    res.json({ message: 'Booking created successfully',
        booking
    });
});
app.get('/', appMiddleware, (req, res) => {
    res.send('Hello World!');
});
app.post('/', (req, res) => {
    console.log(req.body);
    res.json({ message: 'Hello World from POST request!' });
});
exports.default = app;
