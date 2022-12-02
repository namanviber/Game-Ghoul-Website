let mongoose = require('mongoose')


let URI = "mongodb+srv://namanviber:Naman%402003@game-ghoul.gcrezd9.mongodb.net/?retryWrites=true&w=majority"

// var client = new MongoClient(URI);
// var db = client.GetDatabase("test");

let connectdb = async()=>{
    try{
        let con = await mongoose.connect(URI,
            {useUnifiedTopology:true,
            useNewUrlParser: true}
            )
            console.log("Database is Connected")
    }catch(err){
        console.log(err)
    }
}

module.exports = connectdb
// module.exports = db


