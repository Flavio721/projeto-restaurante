import { createReserve, deleteReserve, searchReservas } from "../service/reserva.service.js";

export async function create(req, res){
    const { name, surname, email, date, time } = req.body;
    try {
        const reserve = await createReserve(name, surname, email, date, time);
        res.status(201).json({
            message: "Reserva cadastrada com sucesso",
            reserva: {
                id: reserve.id,
                name: reserve.id,
                surname: reserve.id,
                email: reserve.email,
                date: reserve.date,
                time: reserve.time
            }
        });
    }
    catch (error){
        console.error(error);
        res.status(400).json({error: error.message || "Erro ao cadastrar a reserva"})
    }
}
export async function remove(req, res){
    const { email, date, time } = req.body;
    try{
        await deleteReserve(email, date, time);
        res.status(200).json({
            message: "Reserva cancelada com sucesso"
        })
    }
    catch (error){
        console.error(error);
        res.status(404).json({error: error.message || "Erro ao cancelar a reserva"})
    }
}
export async function search(req, res){
    try{
        const reservas = await searchReservas();
        res.status(200).json(reservas);
    }
    catch(error){
        console.error(error);
        res.status(500).json({error: "Erro ao buscar as reservas"});
    }
}