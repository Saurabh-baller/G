const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://msaurabh0007:WWQ8oSX1kvqzWow5@cluster0.pfplnat.mongodb.net/?retryWrites=true&w=majority")
.then(()=> {
    console.log("mongodb connected")
})
.catch(()=> {
    console.log('failed')
})

const newSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection", newSchema)


module.exports = collection
