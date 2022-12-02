const { default: mongoose } = require("mongoose");
const { isInt16Array } = require("util/types");

let schema1 = mongoose.Schema({
    ProductID: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: String, required: true },
    desc: { type: String, required: true },
    link: { type: String, required: true }
})

const ShopPage = new mongoose.model("ShopPage", schema1)

module.exports = ShopPage