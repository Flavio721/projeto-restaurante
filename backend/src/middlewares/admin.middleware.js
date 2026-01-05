export function adminMiddleware(req, res, next){
    const adminHeader = req.headers.authorization;

    if(!adminHeader){
        return res.status(401).json({error: "Não autorizado"});
    }

    const token = adminHeader.split(" ")[1];

    if(token !== "admin-token"){
        return res.status(403).json({error: "Token inválido"})
    }
    next();
}