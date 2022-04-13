import mongoose from "mongoose";
import {body, validationResult} from "express-validator";

const Schema = mongoose.Schema;

const CabinSchema = new Schema({
        cabinName: {type: String, required: true},
        cabinCode: {type: Number, required: true},
        guests: {type: Number, required: true},
        adults: {type: Number, required: true},
        bedrooms: {type: Number, required: true},
        bathrooms: {type: Number, required: true},
        beds: {type: Number, required: true},
        pet: {type: Boolean, required: true},
        license: {type: String, required: true},
        url: {type: String, required: true},
        rating: {
                type: Schema.ObjectId, ref: 'Rating'
        },
        photos: {type: []},
        amenities: {type: []},
        coordinates: {
                latitude: {type: Number},
                longitude: {type: Number}},
        description: {type: String}
    });

CabinSchema.statics.checkData = function (req) {
        body('cabinName', 'Cabin Name is not Valid.').trim().isLength({min: 1}).escape();
        body('cabinCode', 'Cabin Code is not Valid.').isNumeric()
        body('guests', 'Guests is not Valid.').isNumeric();
        body('adults', 'Adults is not Valid.').isNumeric();
        body('bedrooms', 'Bedrooms is not Valid..').isNumeric();
        body('bathrooms', 'Bathrooms is not Valid..').isNumeric();
        body('beds', 'Beds is not Valid.').isNumeric();
        body('pet', 'Pet is not Valid').isBoolean();
        body('license', 'License is not Valid.').trim().isLength({min: 1}).escape();
        body('url', 'Url is not Valid.').isLength({min: 1});
        body('description', 'Description.').trim().escape();


        return validationResult(req);
};

CabinSchema.statics.createItem = function (req) {
        return new req.myModel({
                cabinName: req.body.cabinName,
                cabinCode: req.body.cabinCode,
                guests: req.body.guests,
                adults: req.body.adults,
                bedrooms: req.body.bedrooms,
                bathrooms: req.body.bathrooms,
                beds: req.body.beds,
                pet: req.body.pet,
                license: req.body.license,
                url: req.body.url,
                rating: req.body.rating,
                photos: req.body.photos,
                amenities: req.body.amenities,
                coordinates: req.body.coordinates,
                description: req.description
        })
};



// // Virtual for book's URL
// CabinSchema
//     .virtual('url')
//     .get(function () {
//         return '/api/cabin/' + this.id;
//     });

//Export model
export default mongoose.model('Cabin', CabinSchema);