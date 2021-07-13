/**
 * Import modules
 */
 import User from "../../model/User";
 
 export default async (req, res) => {

    let objExcluir = await User.findOne({where: {id: req.fields.id}}).catch(function(erro){
        return res.status(400).send({status:"error", message:"USER DELETE", data: erro });
    });
    if(objExcluir.destroy())
    return res.send({status:"success", message:"USER DELETE", data: objExcluir});
    else
    return res.status(400).send({status:"error", message:"USER DELETE", data: objExcluir });
}

