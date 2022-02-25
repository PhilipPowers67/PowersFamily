const mongoose = require("mongoose")

mongoose.connect(
    process.env.MOGODB_URI || "mongodb://localhost/?",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

module.exports = mongoose.connection;
