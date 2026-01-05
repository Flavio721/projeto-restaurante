import { Router } from "express";
import path from "path";
import { fileURLToPath } from "url";

const router = Router();

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);

router.get("/sobre", (req, res) => {
    res.sendFile(path.join(_dirname, '../../pages/sobre.html'));
});
router.get("/cardapio", (req, res) => {
    res.sendFile(path.join(_dirname, "../../pages/cardapio.html"));
});
router.get("/contato", (req, res) => {
    res.sendFile(path.join(_dirname, "../../pages/contato.html"));
});
router.get("/reserva", (req, res) => {
    res.sendFile(path.join(_dirname, "../../pages/reserva.html"));
});

export default router;