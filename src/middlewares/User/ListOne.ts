/**
 * 
 * Middleware User List One
 * Middle to list one user
 * 
 */
export default async (req, res, next) => {
    const { id } = req.params;

    if(!id)
    return res.status(400).send({status:"error", message:"id is required", data:{}});

    next();
}