const db = require("./connection");
const { Sauce, Category} = require('../models');

//Category seed
db.once("open", async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Sauce' },
        { name: 'Pickles' }
    ]);

    console.log("categories in the seed!");


//Sauce seed
await Sauce.deleteMany();

const sauce = await Sauce.insertMany([
    {
        name: 'Original',
        description: 'Original Recipe',
        image: 'Original.jpg',
        category: categories[0]._id,
        price: 7,
        quantity: 12
    },
    {
        name: 'Honey',
        description: 'Honey BBQ Sauce',
        image: 'Honey.jpg',
        category: categories[0]._id,
        price: 7,
        quantity: 12
    },
    {
        name: 'Cheries Pineapple Grilling Sauce',
        description: 'Pineapple Grilling Sauce',
        image: 'Pineapple.jpg',
        category: categories[0]._id,
        price: 7,
        quantity: 12
    },
    {
        name: 'Chipotle',
        description: 'Spicy Chipotle BBQ Sauce',
        image: 'Chipotle.jpg',
        category: categories[0]._id,
        price: 7,
        quantity: 12
    },
    {
        name: 'Cheries Garlic Dill Pickles',
        description: 'Garlic Dill Pickles',
        image: 'Pickles.jpg',
        category: categories[1]._id,
        price: 5,
        quantity: 12
    }
])

console.log("LOST IN THE SAUCE is seeded!")

process.exit();
});