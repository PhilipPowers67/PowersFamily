const mongoose = require("mongoose")
const { Schema } = mongoose

const orderSchema = Schema ({
    purchaseDate: {
        type: Date,
        default: Date.now

    },
    sauces: [
        {
            type: Schema.Types.ObjectId,
            ref: "Sauce"
        }
    ]
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;