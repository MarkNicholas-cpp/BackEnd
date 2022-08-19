const db=require('../models');
const User=db.users;
exports.create=(req,res)=>{
    const users=new User({
        Email:req.body.Email,
        Password:req.body.Password
    });
    users.save(users)
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({message: err.message});
    });
};
exports.findone=(req,res)=>{
    const id=req.params.email;
    User.findOne({Email:id})
    .then(data=>{
        if(!data)
        res.status(404).send({message:"User not found."});
        else res.send(data);
    })
    .catch(err=>{
        res.status(500).send({message: err.message});
    });
};