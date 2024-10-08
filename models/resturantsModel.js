const mongoose = require('mongoose');

const resturantsSchema = new mongoose.Schema({

    restaurantName: {
        type: String,
        required: [true, "Resturant Name is required"],
    },
    fullAddress: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },


})