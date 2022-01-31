const express = require('express');
const userRoutes = express.Router();

let User = require('./user.model');

//add new user
userRoutes.route('./addUser').post(function (res,req)  {
    let user = new User(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'user': 'User is added in susccessfully'});
        })
        .catch(err => {
            res.status(400).send("Unable to add new user");
        });
});

//get users informations
userRoutes.route('/').get(function (res,req) {
    User.find(function (err, user) {
        if(err){
            console.log(err);
        }else{
            res.json(user)
        };
    });
});

//Edit
userRoutes.route('/editUser/:id').get(function (res,req) {
    let id =req.params.id;
    User.findById(id, function (err,user) {
        res.json(user);
    });
});

//Update
userRoutes.route('/updateUser/:id').post (function (res,req) {
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
userRoutes.route('/deleteUser/:id').get(function (err, user) {
    User.findByIdAndRemove({_id:req.params.id}, function (err, user) {
        if(err){
            res.json(err);
        }else{
            res.json("Successfully Deleted")
        }
    });
});

module.exports = userRoutes;