import User from "../../model/User";
const { Op } = require("sequelize");

export default async (req, res, next) => {

    /****************************/
    //
    //      USER SEARCH
    //
    /****************************/
    
    // SETTINGS OF PAGINATION
    const { page, pageSize, gte, lte, gt, lt, labelDate } = req.fields;
    const DEFAULT_PAGE_SIZE = 10;
    const DEFAULT_PAGE = 0;

    // config pagination
    // first page is page 0
    const _page             = parseInt(page)     || DEFAULT_PAGE;
    const _pageSize         = parseInt(pageSize) || DEFAULT_PAGE_SIZE;

    const fieldsOnReq = Object.keys(req.fields)

    // if defined date filter
    const created_at = (gte || lte || gt || lt ) ? {} : null;

    // if defined GTE 
    if(created_at !== null && gte)
    created_at[Op.gte] = gte;

    // if defined LTE
    if(created_at !== null && lte)
    created_at[Op.lte] = lte;

    // if defined GT
    if(created_at !== null && gt)
    created_at[Op.gt] = gt;

    // if defined LT
    if(created_at !== null && lt)
    created_at[Op.lt] = lt;

    // object search
    const searchParamFn = {
        where: {},
        limit: _pageSize,
        offset: (_page -1) * _pageSize
    };

    // LOOP all fields values on query
    fieldsOnReq.forEach(field => {
        if(User.rawAttributes[field]){
            searchParamFn[field] = { [Op.like]: req.fields[field] }
        }
    });

    // if defined filters
    if(created_at)
    searchParamFn[labelDate || "createdAt"] = created_at;

    // export values for filter
    req.fields.objFilters = {
        find: searchParamFn
    }
        
    next();
}