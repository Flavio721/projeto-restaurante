import { registerAdmin, loginAdmin } from "../service/admin.service.js";

export async function register(req, res){
    const { name, surname, email, password } = req.body;

    try {
        const admin = await registerAdmin(name, surname, email, password);
        req.status(201).json({
            message: "Admin cadastrado com sucesso",
            admin: {
                id: admin.id,
                name: admin.id,
                surname: admin.id,
                email: admin.email
            }
        });
    }
    catch (error){
        console.error(error);
        res.status(400).json({error: error.message || "Erro ao cadastrar o admin"})
    }
}
export async function login(req, res){
    const { email, password } = req.body;

    try{
        const token = await loginAdmin(email, password);
        res.json({token});
    }
    catch (error){
        console.error(error);
        res.status(401).json({error: "Credenciais erradas"})
    }
}