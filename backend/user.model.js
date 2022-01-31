const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema ({
    user_id: {
        type: String
    },
      first_name: {
          type: String
      },
      last_name: {
          type: String
      },
      contact_number: {
          type: Number
      },
      email: {
          type: String
      },
      position: {
          type: String
      }
}, {
    collation: "userInformation" // collection name
}, {timestamps: true});

module.exports = mongoose.model('User Informations', User);