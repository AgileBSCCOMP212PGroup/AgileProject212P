
let BlazerAdmin = require('../model/adminmodel');

// create and save new user

exports.create = (req, res) => {
    // Validate the request
    if(!req.body){
        return res.status(400).send({
            message: "Content can not be empty!"
        })
    }

    // Validate the required fields
    if(!req.body.name || !req.body.password || !req.body.email){
        return res.status(400).send({
            message: "Name, password, and email are required fields."
        })
    }

    // Validate the email format
    const emailRegex = /^\S+@\S+\.\S+$/;
    if(!emailRegex.test(req.body.email)){
        return res.status(400).send({
            message: "Invalid email address."
        })
    }

    // Validate the password strength
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!passwordRegex.test(req.body.password)){
        return res.status(400).send({
            message: "Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character."
        })
    }

    // Validate the gender value
    if(req.body.gender && req.body.gender !== "male" && req.body.gender !== "female"){
        return res.status(400).send({
            message: "Invalid gender value."
        })
    }

    // Validate the image URL format
    if(req.body.imageurl){
        const urlRegex = /^https?:\/\/\S+\.\S+$/;
        if(!urlRegex.test(req.body.imageurl)){
            return res.status(400).send({
                message: "Invalid image URL."
            })
        }
    }

    // Create a new user
    const user = new BlazerAdmin({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status,
        imageurl: req.body.imageurl,
    })

    // Save the user in the database
    user.save()
      .then(data => {
            res.send(data + "Added successfully")
        })
      .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the user."
            })
        })
}


// retreive and return all users
exports.find = (req, res) => {
        if(req.query.id){
            const id = req.query.id
            BlazerAdmin.findById(id)
            .then(user => {
                res.send(user)
              })
            .catch(err => {
                  res.status(500).send({
                      message: err.message || "Some error occurred while retrieving the required user."
                  })
              })
        }else{
            BlazerAdmin.find()
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
    BlazerAdmin.findByIdAndUpdate(id, req.body,{useFindAndModify: false})
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
    BlazerAdmin.findByIdAndDelete(id)
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