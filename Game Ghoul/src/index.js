let express = require("express")
let path = require("path")
let hbs = require("hbs")
let app = express()
let ConnectDB = require("../connection/ConnectDB")
let Products = require("../Model/model2")
let ShopPage = require("../Model/model3")
let ReviewBoxPage = require("../Model/model5")
let ReviewsPage = require("../Model/model4")
// let saveDoc1 = require("../Model/model4")
let blogpage = require("../Model/model6")
app.set("view engine", "hbs")
// saveDoc1()

hbs.registerHelper('limit', function (arr, limit) {
    if (!Array.isArray(arr)) { return []; }
    return arr.slice(0, limit);
});
hbs.registerHelper('from', function (arr, start, limit) {
    if (!Array.isArray(arr)) { return []; }
    return arr.slice(start, limit);
});

let cart=[]

app.use(express.static(path.join(__dirname, "../Public")));
let regex = /\w/
app.get("/", (req, res) => {
    res.render("Home")
})
app.get("/Home", (req, res) => {
    res.render("Home")
})
app.get("/shop", (req, res) => {
    ShopPage.find({}, function (err, page) {
        if (err) {
            console.log("ERRORRRRR")
            return
        }
        res.render("Shop", { page })
    })

})
app.get("/blog", (req, res) => {
    blogpage.find({}, function (err, page) {
        if (err) {
            console.log("ERRORRRRR")
            return
        }
        res.render("blog", { page })
    })
})

app.get("/buyingpane/:ref", (req, res) => {
    let ref = req.params.ref
    Products.find({ ProductID: ref }, function (err, products) {
        if (err) {
            console.log("ERRORRRRR")
            return
        }
        res.render("BuyingPane", { products })
    })
})
// app.get("/buyingpane/:ref", (req, res) => {
//     let ref = req.params.ref
//     ReviewBoxPage.find({ ProductID: ref }, function (err, reviewbox) {
//         if (err) {
//             console.log("ERRORRRRR")
//             return
//         }
//         res.render("BuyingPane", {reviewbox})
//       })
// })
app.get("/login", (req, res) => {
    res.render("Login")
})
app.get("/post", (req, res) => {
    res.render("Post")
})
app.get("/product", (req, res) => { 
    ShopPage.find({}, function (err, page) {
        if (err) {
            console.log("ERRORRRRR")
            return
        }
        res.render("Product", { page })
    })
})
app.get("/reviews", (req, res) => {
    ReviewsPage.find({}, function (err, page) {
        if (err) {
            console.log("ERRORRRRR")
            return
        }
        res.render("Reviews", { page })
    })
})
app.get("/cart", (req, res) => {
    Products.find({ProductID:{$in:cart}}, function (err, products) {
        if (err) {
            console.log("ERRORRRRR")
            return
        }
        res.render("Cart", {products})
    })
})
app.post("/addtocart/:ref", (req, res) => {
    let ref = req.params.ref
    cart.push(ref)
    Products.find({ProductID:ref}, function (err, products) {
        if (err) {
            console.log("ERRORRRRR")
            return
        }
        res.render("BuyingPane", { products })
    })
})
app.get(regex, (req, res) => {
    res.render("error")
})
app.set("views", path.join(__dirname, "../Templates/views"))
hbs.registerPartials(path.join(__dirname, "../Templates/partials"))

ConnectDB()

// console.log(Products.find({}))

app.listen("3000", () => {
    console.log("Server is Connected")
})