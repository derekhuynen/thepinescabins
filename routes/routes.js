import path from "path";
import {fileURLToPath} from "url";
import express from "express";
import {cabinRouter} from "./cabinRouter.js";
import {eventRouter} from "./eventRouter.js";
import {ratingRouter} from "./ratingRouter.js";

export default function Routes(app){

    //Set __dirname Path
    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    //Initialize Static Files
    app.use(express.static(path.join(__dirname, '../client/build')));

    app.use('/api/cabin', cabinRouter);

    app.use('/api/event', eventRouter);

    app.use('/api/rating', ratingRouter);


    //Allow React to Control Other URLs
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '../client/build/index.html'))
    })
}