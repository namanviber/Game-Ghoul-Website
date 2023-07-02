let express =  require("express")
let path =  require("path")
let hbs =  require("hbs")
let app = express()
app.set("view engine","hbs")

app.set("views",path.join(__dirname,"../templates/views"))
hbs.registerPartials(path.join(__dirname,"../templates/partial"))

app.get("/",(req,res)=>{
    res.render("home",{"username":"amit"})

})
app.listen("3000",()=>{
    console.log("Connected .......")
    console.log(__dirname)
})
