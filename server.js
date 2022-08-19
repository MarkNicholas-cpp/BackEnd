const express=require('express');
const cors=require('cors');
const app=express();
var corsOptions={
    origin:"http://localhost:4200"
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const db=require("./app/models");
db.mongoose.connect(db.url,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("Connected to database");
})
.catch(err=>{
    console.log("Error connecting to database: " + err.message);
    process.exit();
});
app.get('/', (req, res)=>{
    res.json({message:"Welcome to first application"})
});
require("./app/routes/user.routes")(app);
const PORT=process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log("server listening on port " +PORT);
});