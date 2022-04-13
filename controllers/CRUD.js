


export async function findAll (req, res, next) {
    req.myModel.find({}, await function(err, doc){
        if (err) {
            return res.status(400).json(printMessage(`Find Items Failed.`, 400, req))
        }
        res.status(200).json({
            Message: printMessage(`Found Items`, 200, req),
            item: doc
        });
    });
}

export async function findOne (req, res, next) {
    req.myModel.findById(req.params.id, await function(err, doc){
        if (err) {
            return res.status(400).json(printMessage(`Find Item Failed: ${req.params.id}`, 400, req))
        }
        res.status(200).json({
            Message: printMessage(`Found Item: ${req.params.id}`, 200, req),
            item: doc
        });
    });
}


async function createOne(req, res, next) {
    const errors = await req.myModel.checkData(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({Message: printMessage(`Invalid Variables`, 400, req), Errors: errors.array()})
    }


    const userExists = await req.myModel.exists({ cabinCode: req.body.cabinCode });
    if (userExists){
        return res.status(400).json(printMessage(`Item Already In DataBase: ${req.params.id}`, 400, req))
    }

    const item = await req.myModel.createItem(req);

    await item.save(function (err, doc) {
        if (err) {
            return res.status(400).json(printMessage(`Failed to Create Item`, 400, req))
        }

        res.status(201).json({
            Message: printMessage(`Item Created`, 200, req),
            item: item
        });
        });
}

// Handle cabin delete on POST.
async function deleteOne(req, res, next) {
    await req.myModel.findByIdAndRemove(req.params.id, function(err,doc) {
        if (err) {
            return res.status(400).json(printMessage(`Failed to Delete: ${req.params.id}`, 400, req))
        }
        res.status(200).json({
            Message: printMessage(`Item Deleted: ${req.params.id}`, 200, req),
            item: doc
        });
    });
}



async function updateOne(req, res, next){
    await req.myModel.updateOne({ _id: req.params.id }, req.body, function(err,doc) {
        if (err) {
            return res.status(400).json(printMessage(`Failed to Update: ${req.params.id}`, 400, req))
        }
        res.status(200).json({
            Message: printMessage(`Item Update: ${req.params.id}`, 200, req),
            item: doc
        });
    }).clone();
}

async function findOneAndUpdate(req, res, next){
    await req.myModel.findOneAndUpdate({ _id: req.params.id }, req.body,{new: true}, function(err,doc) {
        if (err) {
            return res.status(400).json(printMessage(`Failed to Update: ${req.params.id}`, 400, req))
        }
        res.status(200).json({
            Message: printMessage(`Item Update: ${req.params.id}`, 200, req),
            item: doc
        });
    }).clone();
}


export function printMessage(message, status, req){
    return {
        Message: message,
        Status: status,
        url: req.originalUrl,
        Method: req.method,
        Body: req.body}
}


export default {findAll, findOne, createOne, deleteOne, updateOne, findOneAndUpdate}