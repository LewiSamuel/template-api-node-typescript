/**
 * 
 * Middleware User Auth
 * Middle to authenticate user ( login )
 * 
 */
export default async (req, res, next) => {
    const { Email, Password } = req.fields;

    /**
     * Fields required
     */
    if(!Email)
    return res.status(400).send({status:"error", message:"Email is required", data:{}});

    if(!Password)
    return res.status(400).send({status:"error", message:"Password is required", data:{}});

    next();
}