import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import Routes from "./routes/routes.js";
import "dotenv/config";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors'


//Create Express App
const app = express();

//Set Port


//Set Middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

//Set Routes
Routes(app);

//connect to DataBase
//const url = process.env.MONGO_URL || "mongodb://localhost:27017";
await mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to Database.")
    })
    .catch(err => {
        console.log("DB Connection Error: ", err.message);
        process.exit(1);
    });


const port = process.env.PORT || '3001';
//Start Server
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
