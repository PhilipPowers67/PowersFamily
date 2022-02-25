const db = require("./connection");
const {}

//Category seed
db.once("open", async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([

    ])
});
console.log("categories in the seed!")


//Sauce seed
await Sauce.deleteMany();

const sauce = await Sauce.in([

])
console.log("LOST IN THE SAUCE is seeded!")