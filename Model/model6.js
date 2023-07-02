const { default: mongoose } = require("mongoose");
const { isInt16Array } = require("util/types");

let schema1 = mongoose.Schema({
    blogid: { type: String, required: true, unique: true },
    Thumbnail: { type: String, required: true },
    Title: { type: String, required: true },
    Description: { type: String, required: true },
    Date: { type: Array, default: [], required: true },
    Author: { type: Array, default: [], required: true },
    Type: { type: Array, default: [], required: true }
})

const blogpage = new mongoose.model("blogpage", schema1)

// saveDoc1 = () => {
//     let P1 = new blogpage({
//         blogid: "b1",
//         Thumbnail: "Images/article 1.jpg",
//         Title: "The 25 Best N64 Games of All Time",
//         Description: "From The Legend of Zelda: Ocarina of Time to Super Mario 64, here are our picks for the best N64 games of all time",
//         Date: [
//             "/Images/Icons/cal.png",
//             "Sep 6, 2022"
//         ],
//         Author: [
//             "/Images/Icons/auth.png",
//             "Aryaman Sital"
//         ],
//         Type: [
//             "/Images/Icons/game.png",
//             "Games"
//         ]
//     })

//     P1.save()
// }

// module.exports = saveDoc1
module.exports = blogpage