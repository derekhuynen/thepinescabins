import mongoose from "mongoose";
import {body, validationResult} from "express-validator";

const Schema = mongoose.Schema;

const EventSchema = new Schema({
        cabinID: {type: String},
        cabinCode: {type: Number, required: true},
        uid: {type: String, required: true},
        website: {type: String, required: true},
        summary: {type: String, required: true},
        startDate: {type: Date, required: true},
        endDate: {type: Date, required: true},
        url: {type: String, required: false},
        lastFour: {type: String, required: false}
    });

EventSchema.statics.checkData = function (req) {
    body('cabinID', 'Cabin ID is Not Valid.').trim().isLength({min: 1}).escape();
    body('cabinCode', 'Cabin Code is Not Valid').isNumeric();
    body('uid', 'UID is Not Valid').trim().isLength({min: 1}).escape();
    body('website', 'Website is not Valid').trim().isLength({min: 1}).escape();
    body('summary', 'Summary is Not Valid').trim().isLength({min: 1}).escape();
    body('startDate', 'Start Date is not a Valid Date').isDate();
    body('endDate', 'End Date is not a Valid Date').isDate();
    body('url').trim().escape();
    body('lastFour').trim().escape();

    return validationResult(req);
};

EventSchema.statics.createItem = function (req) {

    return new req.myModel({
        cabinID: req.body.cabinID,
        cabinCode: req.body.cabinCode,
        uid: req.body.uid,
        website: req.body.website,
        summary: req.body.summary,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        url: req.body.url,
        lastFour: req.body.url
    })
};


//Export model
export default mongoose.model('Event', EventSchema);