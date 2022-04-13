import express from "express";
import bodyParser from "body-parser";
import CRUD from "../controllers/CRUD.js";
import Rating from "../models/rating.js";
const router = express.Router();
const jsonParser = bodyParser.json()

router.use(function addObject(req,res,next){
    req.myModel = Rating;
    next();
})

//Basic CRUD
router.get('/', CRUD.findAll);
router.get('/:id', CRUD.findOne);
router.post('/', jsonParser, CRUD.createOne);
router.delete('/:id', CRUD.deleteOne);
router.put('/:id', CRUD.updateOne);
router.put('/:id/true', CRUD.findOneAndUpdate);


export { router as ratingRouter }