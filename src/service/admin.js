import bcrypt from "bcryptjs";
import prisma from "../database/database.js";

async function createAdmin() {
  const senhaHash = await bcrypt.hash("admin123", 10);

  const admin = await prisma.admin.create({
    data: {
      nome: "Admin",
      sobrenome: "Teste",
      email: "admin@teste.com",
      senha: senhaHash,
    }
  });

  console.log("Admin criado:", admin.email);
}

createAdmin()
  .catch(console.error)
  .finally(() => process.exit());
