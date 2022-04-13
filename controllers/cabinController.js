
import Cabin from "../models/cabin.js";
import {printMessage} from "./CRUD.js";




async function findAll (req, res, next) {
    req.myModel.find({}).populate('rating').exec(
        await function (err, doc) {
            if (err) {
                return res.status(400).json(printMessage(`Find Items Failed.`, 400, req))
            }
            res.status(200).json({
                Message: printMessage(`Found Items`, 200, req),
                item: doc
            });
        })
}

async function findOne (req, res, next) {
    req.myModel.findById(req.params.id).populate('rating').exec(await function(err, doc) {
        if (err) {
            return res.status(400).json(printMessage(`Find Item Failed: ${req.params.id}`, 400, req))
        }
        res.status(200).json({
            Message: printMessage(`Found Item: ${req.params.id}`, 200, req),
            item: doc
        });
    });
}


export default {findAll, findOne}


