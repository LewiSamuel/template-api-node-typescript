/**
 * IMPORT MODULES
 */
import { Router } from 'express';
const routes = Router();
import AuthToken from '../middlewares/User/AuthToken';

/**
* Controllers
*/
import UserAuthController from '../controllers/User/Auth';
import UserListController from '../controllers/User/List';
import UserListOneController from '../controllers/User/ListOne';
import UserSaveController from '../controllers/User/Save';
import UserSearchController from '../controllers/User/Search';
import UserUpdateController from '../controllers/User/Update';

/**
* Middlewares
*/
import UserAuthMid from '../middlewares/User/Auth';
import UserListMid from '../middlewares/User/List';
import UserListOneMid from '../middlewares/User/ListOne';
import UserSaveMid from '../middlewares/User/Save';
import UserSearchMid from '../middlewares/User/Search';
import UserUpdateMid from '../middlewares/User/Update';

/**
* Rota principal
*/
routes.get("/", (req, res) =>  res.send("Lewix Generator Testing - API - Users"));

/**
* 
*     SERVICES USER
* 
*/
routes.post("/auth",    [           UserAuthMid ],     UserAuthController);
routes.post("/save",    [            UserSaveMid ],    UserSaveController);
routes.put("/update",   [ AuthToken, UserUpdateMid ],  UserUpdateController);
routes.get("/list",     [ AuthToken, UserListMid ],    UserListController);
routes.get("/list/:id", [ AuthToken, UserListOneMid ], UserListOneController);
routes.get("/search",   [ AuthToken, UserSearchMid ],  UserSearchController);


export default routes;