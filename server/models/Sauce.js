const mongoose = require("mongoose");
const { Schema, model, Types } = mongoose

const sauceSchema = new Schema ({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    price: {
        type: Number,
        required: true,
        min: 5
    },
    quantity: {
        type: Number,
        min: 0,
        default: 0
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true
    }
})

const Sauce = mongoose.model("Sauce", sauceSchema);

module.exports = Sauce;