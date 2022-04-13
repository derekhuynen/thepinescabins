import express from "express";
import bodyParser from "body-parser";
import Cabin from "../models/cabin.js";
import CRUD from "../controllers/CRUD.js";
import cabinController from "../controllers/cabinController.js";
const router = express.Router();
const jsonParser = bodyParser.json()


router.use(function addObject(req,res,next){
    req.myModel = Cabin;
    next();
})


//Basic CRUD
router.post('/', jsonParser, CRUD.createOne);
router.delete('/:id', CRUD.deleteOne);
router.put('/:id', CRUD.updateOne);
router.put('/:id/true', CRUD.findOneAndUpdate);

//Special Function for Cabin
router.get('/', cabinController.findAll);
router.get('/:id', cabinController.findOne);

export { router as cabinRouter }