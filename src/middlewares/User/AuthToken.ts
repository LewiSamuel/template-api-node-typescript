const jwt = require('jsonwebtoken');
require('dotenv/config');

export default (req, res, next) => { 
    // get header authorization
    const authHeader = req.headers.authorization;

    // Erro caso nao tenha sido passado um token
    if(!authHeader)
        return res.status(401).send({ status: 'error', message: 'No Token Provided', data: {} });
    
    // Splitar Token
    const parts = authHeader.split(' ');
    
    // Erro Se não houver duas partes distintas apos o split
    if(parts.length !== 2)
        return res.status(401).send({ status: 'error', message: 'Token Error', data: {} }); 
    
    // pega as duas partes do Token
    const [ scheme, token ] = parts; 

    // Erro ao nao existir 'Bearer'no token
    if(!/^Bearer$/i.test(scheme))
        return res.status(401).send({ status: 'error', message: 'Token malfomatted', data: {} });
    
    jwt.verify( token, process.env.AUTH_CONFIG_SECRET, (err, decoded) => {
        if(err)
            return res.status(401).send({ status: 'error', message: 'Token invalid', data: {} }); 
        
        req.userId = decoded.id;
        return next();

    });

}