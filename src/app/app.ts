import express, { NextFunction, Request, Response } from "express"
// const express = require('express')
const app = express()
const port = 3000

//parser
app.use(express.json())

//i create router 
const userRouter = express.Router()


//now i create logger means middleware
const logger = (req:Request, res:Response, next:NextFunction)=>{
  console.log(req.url, req.method, req.hostname);
  next()
  
}
app.get('/',logger,  (req: Request, res:Response) => {
  // we use param for id 
  // console.log(req.params);
  
  // we use query for name , email 
  console.log(req.query);
  res.send('Hello gghgghhhddg!')
})

app.post("/hello", (req: Request, res: Response)=>{
    console.log(req.body);
    res.send("got data")
})

//global error handler 
app.use((error:any, req:Request, res:Response, next:NextFunction)=>{
  
})

export default app;