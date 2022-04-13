import mongoose from "mongoose";
import {body, validationResult} from "express-validator";




const Schema = mongoose.Schema;


const PrivateDataSchema = new Schema({
    cabin: {type: Schema.ObjectId, ref: 'Cabin'},
    cabinCode: {type: Number, required: true},
    website: {type: String, required: true},
    url: {type: String, required: true},
    address: {type: String, required: true}
    }
)

PrivateDataSchema.statics.checkData = function (req) {
    body('cabinCode', 'Cabin Code is Not Valid').isNumeric();
    body('website', 'Website is Not Valid.').trim().isLength({min: 1});
    body('url', 'URL is Not Valid.').trim().isLength({min: 1})
    body('address', 'Address is Not Valid.').trim().isLength({min: 1});


    return validationResult(req);
};

PrivateDataSchema.statics.createItem = function (req) {
    return new req.myModel({
        cabin: req.body.cabin,
        cabinCode: req.body.cabinCode,
        website: req.body.website,
        url: req.body.url,
        address: req.body.address
    })
};


//Export model
export default mongoose.model('PrivateData', PrivateDataSchema);