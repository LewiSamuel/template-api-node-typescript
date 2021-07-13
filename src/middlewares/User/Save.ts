const bcrypt = require("bcrypt");
import User from "../../model/User";

/****************************/
//
//      USER SAVE
//
/****************************/
export default async (req, res, next) => {
    const { Name, Email, Password, } = req.fields;

    
    const resultUser = await User.count({ where: { Email: Email }});                
    if(resultUser !== 0)
    return res.status(400).send({status:"error", message:"User already exists (Email)", data:{}});
    
    
    if(!Name)
    return res.status(400).send({status:"error", message:"Name is required", data:{}});
    
    if(!Email)
    return res.status(400).send({status:"error", message:"Email is required", data:{}});
    
    if(!Password)
    return res.status(400).send({status:"error", message:"Password is required", data:{}});
    
    // criptography password
    req.fields.Password = await bcrypt.hash(Password, 3);
    
    next();
}