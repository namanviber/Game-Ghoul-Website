const { default: mongoose } = require("mongoose");
const { isInt16Array } = require("util/types");

let schema = mongoose.Schema({
    ProductID: { type: String, required: true, unique: true },
    mainimage: { type: String, required: true},
    Images: { type: Array, default: [], required: true },
    title: { type: String, required: true },
    price: { type: String, required: true },
    detail: { type: String, required: true },
    desc: { type: Array, default: [], required: true }
})

const Products = new mongoose.model("Products", schema)

module.exports = Products
