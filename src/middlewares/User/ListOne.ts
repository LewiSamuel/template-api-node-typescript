// const bcrypt = require("bcrypt");
// import User from "../../models/UserModel";

/****************************/
//
//      USER LIST ONE
//
/****************************/
export default async (req, res, next) => {
    const { id } = req.params;

    if(!id)
    return res.status(400).send({status:"error", message:"id is required", data:{}});

    next();
}