/**
 * Import modules
 */
 import User from "../../model/User";
 import jwt from 'jsonwebtoken';

// Função que gera um token que não expira nunca
function GenerateToken(idUser){
  return "Bearer " + jwt.sign({ id: idUser }, process.env.AUTH_CONFIG_SECRET, { });
}

export default async (req, res) => {   
  // save
  const result = await User.create<any>( req.fields );

  if(result)
      return res.send({status:"success", message:"USER SAVE", data: result , token: GenerateToken(result.id)});
  else
      return res.send({status:"error", message:"USER SAVE", data: result});
}