const bcrypt = require("bcrypt");
import User from "../../model/User";

/****************************/
//
//      USER UPDATE
//
/****************************/
export default async (req, res, next) => {
    const { id } = req.fields;
    
    if(!id)
    return res.status(400).send({status:"error", message:"id is required", data:{}});
    
    
    if(req.fields.Email){
        const resultUser = await User.count({ where: { Email: req.fields.Email }});
                
        if(resultUser !== 0)
        return res.status(400).send({status:"error", message:"User already exists (Email)", data:{}});
    }
    

    // criptography password
    if(req.fields.Password)
    req.fields.Password = await bcrypt.hash(req.fields.Password, 3);
    
    next();
}