
let Blazer = require('../model/blazermodel');

// create and save new user

// GJ212P-36
exports.create = (req, res) => {
    // Validate the request
    if (!req.body) {
        return res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Validate required fields
    if (!req.body.blazerid || !req.body.description || !req.body.priceperday || !req.body.availability) {
        return res.status(400).send({
            message: "Missing required fields!"
        });
    }

    // Validate priceperday is a positive number
    if (isNaN(req.body.priceperday) || req.body.priceperday <= 0) {
        return res.status(400).send({
            message: "Price per day must be a positive number!"
        });
    }

    // Create a new blazer
    const user = new Blazer({
        blazerid: req.body.blazerid,
        description: req.body.description,
        priceperday: req.body.priceperday,
        availability: req.body.availability,
    });

    // Save the user in the database
    user.save()
        .then(data => {
            res.send(data + " Added successfully");
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the user."
            });
        });
};


// retreive and return all users
exports.find = (req, res) => {
        if(req.query.id){
            const id = req.query.id
            Blazer.findById(id)
            .then(user => {
                res.send(user)
              })
            .catch(err => {
                  res.status(500).send({
                      message: err.message || "Some error occurred while retrieving the required user."
                  })
              })
        }else{
            Blazer.find()
        .then(user => {
            res.send(user)
          })
        .catch(err => {
              res.status(500).send({
                  message: err.message || "Some error occurred while retrieving users."
              })
          })
        }

}
// Modify above code to suit a login form

// update a new identifed user by user id
exports.update = (req, res) => {
    if(!req.body){
        return res.status(404).send({message: "Data to update can not be empty."});
    }

    const id = req.params.id
    Blazer.findByIdAndUpdate(id, req.body,{useFindAndModify: false})
    .then(data => {
        if(!data){
            res.status(404).send({message: "can not find user"})
        }else{
            res.send(data)
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while updating the user."
        })
    })
}

// delete a user by user id
exports.delete = (req, res) => {
    
    if(!req.body){
        return res.status(404).send({message: "Data to update can not be empty."});
    }

    const id = req.params.id
    Blazer.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).send({message: "can not find user"})
        }else{
            res.send(data)
            // can use messge if required
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while deleting the user."
        })
    })
}