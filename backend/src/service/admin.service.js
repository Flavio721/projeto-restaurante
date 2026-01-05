import bcrypt from 'bcryptjs';
import prisma from '../database/database.js';

export async function registerAdmin(name, surname, email, password){
    const adminExists = await prisma.admin.findUnique({
        where: { email }
    });

    if(adminExists) throw new Error("Admin já cadastrado!");

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.Admin.create({
        name,
        surname,
        email,
        password: hashedPassword
    });

    return user;
}
export async function loginAdmin(email, password){
    const user = await prisma.Admin.findUnique({
        where: { email }
    });

    if(!user) throw new Error("Email ou senha inválidos!");

    const isPassword = await bcrypt.compare(password, user.senha);

    if(!isPassword) throw new Error("Email ou senha inválidos");

    return "admin-token";
}