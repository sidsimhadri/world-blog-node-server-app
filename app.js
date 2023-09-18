import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import HelloController
    from "./controllers/posts/post-controller.js";
import mongoose from "mongoose";

dotenv.config()



const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
 || 'mongodb://127.0.0.1:27017/logs'
mongoose.connect(CONNECTION_STRING);
const app = express()
app.use(cors())
app.use(express.json());
HelloController(app)

app.listen(process.env.PORT || 4000);