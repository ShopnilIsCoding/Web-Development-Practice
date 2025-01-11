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

app.get('/', appMiddleware, (req:Request, res:Response) => {
  res.send('Hello World!')
})

app.post('/',(req:Request,res:Response)=>
{
    console.log(req.body);
    res.json({message:'Hello World from POST request!'})
})

export default app;
