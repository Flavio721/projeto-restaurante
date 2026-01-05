import { createPrato } from "../service/prato.service.js";

export async function prato(req, res){
    const { name, value, desc } = req.body;
    try{
        const prato = await createPrato(name, value, desc);
        res.status(201).json({
            message: "Prato cadastrado com sucesso",
            prato: {
                id: prato.id,
                name: prato.name,
                value: prato.value,
                desc: prato.desc
            }
        })
    }
    catch(error){
        console.error(error);
        res.status(400).json({error: error.message || "Erro ao cadastrar o prato"})
    }
}