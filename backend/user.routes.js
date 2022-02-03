const express = require("express");
const userRoutes = express.Router();

let User = require('./user.model');

//add new user
userRoutes.post('/addUser', (req,res) => {
    var newUser = new User(req.body);
    newUser.save()
    .then(item => {
        res.send("item saved to database");
    })
    /*.catch(err => {
        res.status(400).send("unable to save to database");
    });*/
});

//get users informations
userRoutes.get('/',  (req, res) => {
    res.json(User);
});

//Edit
userRoutes.get('/editUser/:id', (req, res) => {
    let id =req.params.id;
    User.findById(id, function (err,user) {
        res.json(user);
    });
});

//Update
userRoutes.post('/updateUser/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, function (err, user) {
        if(!user){
            res.status(404).send("Data is not found");
        }else{
            user.user_id = req.body.user_id;
            user.first_name = req.body.first_name;
            user.last_name = req.body.last_name;
            user.contact_number = req.body.contact_number;
            user.email = req.body.email;
            user.position = req.body.position;

            user.save().then( user => {
                res.json('Update Completed')
            })
                .catch.status(400).send("Unable to update database")
        }
    });
});

//delete
userRoutes.get('/deleteUser/:id', (err, user) => {
    User.findByIdAndRemove({_id:req.params.id}, function (err, user) {
        if(err){
            res.json(err);
        }else{
            res.json("Successfully Deleted")
        }
    });
});

module.exports = userRoutes;