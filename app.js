const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())



app.get("/",cors(),(req,res) => {

})

app.post("/", async(req, res) => {
    const{email, password}= req.body

    try {
        const check = await collection.findOne({email:email})

        if(check){
            res.json("exits")        }
    
    else{
        res.json("notexist")
    }
}

catch(e){
    res.json("notexist")
}
}

)



app.post("/signup", async(req, res) => {
    const{email, password}= req.body
// creating a new user and saving the user detials in the database 
    const data = {
        email:email,
        passworsd:password
    }

    try {
        const check = await collection.findOne({email:email})

        if(check){
            res.json("exits")  
         //this line of coode will run if the user is new

         await  collection.insertMany([data])
        }
           
    
    else{
        res.json("not exist")
    }
}

catch(e){
    res.json("notexist")
}
}

)

app.listen(8000,()=> {
    console.log("port connected")
})