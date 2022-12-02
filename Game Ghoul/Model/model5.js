const { default: mongoose } = require("mongoose");
const { isInt16Array } = require("util/types");

let schema1 = mongoose.Schema({
    image: { type: String, required: true },
    name: { type: String, required: true },
    title: { type: String, required: true },
    review: { type: String, required: true },
    ProductID: { type: String, required: true, unique: true },
})

const ReviewBoxPage = new mongoose.model("ReviewBoxPage", schema1)

// saveDoc1 = () => {
//     let P1 = new ReviewBoxPage({

//         image:
//             "/Images/iconimg.png",
//         name:
//             "Figer Thaw",
//         title:
//             "High quality streaming aid",
//         review:
//             "Comfy switch, has all the features required for a good aim. Light weig…",
//         ProductID:
//             "P5"
//     })

//     P1.save()
// }

// module.exports = saveDoc1
module.exports = ReviewBoxPage