let Rental = require('../model/rentalmodel');

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
    if (!req.body.startdate || !req.body.enddate || !req.body.totalcost || !req.body.rentalstatus) {
        return res.status(400).send({
            message: "Missing required fields!"
        });
    }

    // Validate startdate and enddate are valid dates
    if (isNaN(Date.parse(req.body.startdate)) || isNaN(Date.parse(req.body.enddate))) {
        return res.status(400).send({
            message: "Invalid startdate or enddate!"
        });
    }

    // Validate totalcost is a positive number
    if (isNaN(req.body.totalcost) || req.body.totalcost <= 0) {
        return res.status(400).send({
            message: "Total cost must be a positive number!"
        });
    }

    // Create a new rental
    const user = new Rental({
        startdate: req.body.startdate,
        enddate: req.body.enddate,
        totalcost: req.body.totalcost,
        rentalstatus: req.body.rentalstatus
    });

    // Save the rental in the database
    user.save()
        .then(data => {
            res.send(data + " Added successfully");
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the rental."
            });
        });
};



// retreive and return all users
exports.find = (req, res) => {
        if(req.query.id){
            const id = req.query.id
            Rental.findById(id)
            .then(user => {
                res.send(user)
              })
            .catch(err => {
                  res.status(500).send({
                      message: err.message || "Some error occurred while retrieving the required user."
                  })
              })
        }else{
            Rental.find()
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
    Rental.findByIdAndUpdate(id, req.body,{useFindAndModify: false})
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
    Rental.findByIdAndDelete(id)
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