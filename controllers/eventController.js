import Event from "../models/event.js";


export async function findAllForCabin (req, res, next) {
    Event.find({cabinID: req.params.cabinID}, await function(err, doc){
        if (err) {
            return next("Failed to Find get All Events");
        } else {
            res.send(doc)
        }
    });
}


export default {findAllForCabin}