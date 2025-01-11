import express, { NextFunction, Request, Response } from 'express';
const app = express()
//parser
app.use(express.json());

//middleware

const appMiddleware = (req:Request, res:Response, next:NextFunction) =>
{
    console.log(req.url,req.method,req.hostname);
    next();
}

//router

const userRouter = express.Router();
const bookingRouter = express.Router();
app.use('/api/v1/users', userRouter);
app.use('/api/v1/bookings', bookingRouter);

userRouter.post('/create-user',appMiddleware,(req:Request,res:Response)=>
{
    const user =req.body;
    console.log(user);
    res.json({message:'User created successfully',
        user
    })
})

bookingRouter.post('/create-booking',appMiddleware,(req:Request,res:Response)=>
{
    const booking =req.body;
    console.log(booking);
    res.json({message:'Booking created successfully',
        booking
    })
})

app.get('/', appMiddleware, (req:Request, res:Response,next:NextFunction) => {
  try {
    res.send(something)
    
  } catch (error) {
    next(error);
    
  }
})

app.post('/',(req:Request,res:Response)=>
{
    console.log(req.body);
    res.json({message:'Hello World from POST request!'})
})

app.all('*',(req:Request,res:Response)=>
{
    res.status(404).json({success:false,
        message:'api not found!'})
})

app.use((error:any,req:Request, res:Response,next:NextFunction) => {
    if(error){
    console.log(error);
    res.status(400).json({success:false,
        message:'Something broke!'});}
})

export default app;
