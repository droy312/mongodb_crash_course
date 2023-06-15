const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
    street: String,
    city: String
});

const userSchema = mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 0,
        max: 150,
        validate: {
            validator: v => v % 2 === 0,
            message: props => `${props.value} is not an even number.`   
        }
    },
    email: {
        type: String,
        minLength: 5,
        required: true,
        lowercase: true
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    bestFriend: mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    address: addressSchema,
});

module.exports = mongoose.model("User", userSchema);
