/**
 * Import modules
 */
 import User from "../../model/User";
 
 export default async (req, res) => {
  await User.findOne({
    where: {
        id: req.params.id
    }
    }).then(async result => {
    if(result)
    return res.send({status:"success", message:"USER LISTONE", data: result});
    else
    return res.send({status:"error", message:"USER NOT FOUND", data: result});
  }).catch(err => {
    return res.send({status:"error", message:"USER LISTONE", data: err});
  })
}