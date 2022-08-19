module.exports=mongoose=>{
    const User=mongoose.model(
        "users",
        mongoose.Schema({
            Email:String,
            Password:String
        })
    );
    return User;
};