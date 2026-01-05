import express from "express";
import pagesRoutes from "./src/routes/pages.routes.js";
import apiRoutes from "./src/routes/api.routes.js";
import path from "path";
import { adminMiddleware } from "./src/middlewares/admin.middleware.js";

const app = express();

app.use(express.json())

app.use((req, res, next) => {
    const protectedFiles = ['/admin.html'];
    if (protectedFiles.some(file => req.path.endsWith(file))) {
        return res.status(403).json({error: "Acesso negado"});
        
    }
    next();
});
app.use(express.static(path.resolve("pages")));
app.use(express.static(path.resolve("public")));

app.use("/", pagesRoutes);

app.use("/api", apiRoutes);

app.get("/admin", adminMiddleware, (req, res) => {
    res.json({message: "Acesso liberado"});
});



export default app;