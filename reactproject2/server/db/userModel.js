const mongoose = require("mongoose");

// user schema
const UserSchema = new mongoose.Schema({
    //firstName
    firstName: {
        type: String,
        required: [true],
        unique:false,
    },
    //lastName
    lastName: {
        type: String,
        required: [true],
        unique:false,
    },
    // email field
    email: {
        type: String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email Exist"],
    },

    //   password field
    password: {
        type: String,
        required: [true, "Please provide a password!"],
        unique: false,
    },
});

// export UserSchema
module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
