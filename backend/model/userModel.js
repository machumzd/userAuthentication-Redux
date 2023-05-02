const mongoose=require('mongoose')


const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'please add a name']
    },
    email:{
        type:String,
        required:[true,'please add a email'], 
        unique:true
    },
    phone:{
        type:String,
        required:[true,'please add phone num']
    },
    password:{
        type:String,
        required:[true,'please add password']
    }
},{
    timestamps:true
})

module.exports=mongoose.model('User',userSchema)