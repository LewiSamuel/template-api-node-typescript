/**
 * Import modules
 */
import User from "../../model/User";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Função que gera um token que não expira nunca
function GenerateToken(idUser){
  return "Bearer " + jwt.sign({ id: idUser }, process.env.AUTH_CONFIG_SECRET, { });
}


export default async (req, res) => {

  // Get Variables
  const { Email, Password } = req.fields;

  // Operation
  const user = await User.findOne<any>({ where: { Email: Email } });
  // erro caso nao exista um usuario com este email
  if(!user)
      return res.status(400).send({status:"error", message:"User not found", data:{}});

  // erro caso as senhas nao batam 
  if(!await bcrypt.compare(Password, user.Password))
      return res.status(400).send({status:"error", message:"Invalid password", data:{}});
  
  // gera Token
  const token = GenerateToken(user.id);
  
  // retorna Usuario + token
  return res.send({status:"success", message:"User Authenticate", data: user, token: token});
}