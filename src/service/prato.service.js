import prisma from "../database/database.js";

export async function createPrato(name, value, desc){
    const pratoExists = await prisma.prato.findFirst({
        where: { 
            nome: name 
        }
    });

    if(pratoExists) throw new Error("Prato já cadastrado");

    const prato = await prisma.prato.create({
        data: {
            nome: name,
            valor: value,
            descricao: desc
        }
    })
    return prato;
}