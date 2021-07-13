/**
 * Import modules
 */
 import User from "../../model/User";
 
 export default async (req, res) => {
        
  await User.update( req.fields ,{
      where: { id: req.fields.id }
  }).then(result => {
      if(result)
      return res.send({status:"success", message:"USER UPDATE", data: result});
      else
      return res.send({status:"error", message:"USER UPDATE", data: result});
  }).catch(err => {
      return res.send({status:"error", message:"USER UPDATE", data: err});
  });

}