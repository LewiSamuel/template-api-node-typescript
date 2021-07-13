/**
 * IMPORT MODULES
 */
import { Router } from 'express';
const routes = Router();
import './lib/connect'

 /** 
  * import routes
  */
import User from './routes/User'

/**
 * Rota principal
 */
routes.get("/", (req, res) =>  res.send("Lewix Generator Testing - API"));

/**
 * User routes
 */
routes.use("/user", User)

export default routes;