const mongoose = require('mongoose');
const { Schema, model, Types } = mongoose;
const bcrypt = require('bcrypt');
const Order = require('./orders');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: "username required!",
            trim: true,
            unique: true,
        },
        email: {
            type: String,
            required: "email required",
            unique: true,
            match: /.+\@.+\..+/,
        },
        password: {
            type: String,
            required: 'Password Required',
        },
        orders: [Order.schema]
    });

    userSchema.pre('save', async function(next) {
        if (this.isNew || this.isModified('password')) {
            const saltRounds = 32;
            this.password = await bcrypt.hash(this.password, saltRounds);
        }
        next();
    });

    userSchema.methods.isCorrectPassword = async function(password) {
        return await bcrypt.compare(password, this.password);
    };

    const User = mongoose.model('User', userSchema);

    module.exports = User;