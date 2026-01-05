import { Router } from "express";
import { login, register } from "../controllers/admin.controller.js";
import { create, remove, search } from "../controllers/reserva.controller.js";
import { prato } from "../controllers/prato.controller.js";

const routes = Router();

routes.post("/register", register);
routes.post("/login", login);
routes.post("/create", create);
routes.post("/delete", remove);
routes.post("/createPrato", prato);
routes.get("/search", search)

export default routes;