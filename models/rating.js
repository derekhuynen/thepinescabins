import mongoose from "mongoose";
import {body, validationResult} from "express-validator";

const Schema = mongoose.Schema;

const RatingSchema = new Schema({
        cabinCode: {type: Number, required: true},
        overallRating: {type: Number, required: true},
        overallCount: {type: Number, required: true},
        ratings: {}
})

RatingSchema.statics.checkData = function (req) {

    body('cabinCode', 'Cabin Code is Not Valid').isNumeric();


    return validationResult(req);
};

RatingSchema.statics.createItem = function (req) {
    return new req.myModel({
            cabinCode: req.body.cabinCode,
            overallRating: req.body.overallRating,
            overallCount: req.body.overallRating,
            ratings: req.body.ratings
        })
};


//Export model
export default mongoose.model('Rating', RatingSchema);