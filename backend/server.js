import express from 'express'
import mongoose  from 'mongoose'

const app = express()

app.listen(3000, ()=> console.log("Running at 3000"))