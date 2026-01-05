    import prisma from "../database/database.js";


    export async function createReserve(name, surname, email, date, time){
        const dataReserva = new Date(date);
        const horarioReserva = time;

        const reserveExists = await prisma.reserva.findUnique({
            where: { 
                data_horario: {  // é um objeto com os dois campos
                    data: dataReserva,
                    horario: time
                }
            }
        })

        if(reserveExists) throw new Error("Reserva já existente!");

        const reserve = await prisma.reserva.create({
            data: {
                nome: name,
                sobrenome: surname,
                email: email,
                data: dataReserva,
                horario: horarioReserva
            }
        });

        return reserve
    };
    export async function deleteReserve(email, date, time){
        const dataReserva = new Date(date);
        
        const deletes = await prisma.reserva.deleteMany({
            where: {
                email,
                data: dataReserva,
                horario: time
            }
        });

        if(deletes.count === 0) throw new Error("Reserva não cadastrada!");

        return true;
    }
    export async function searchReservas(){
    const reservas = await prisma.reserva.findMany({
        orderBy: {
            data: 'desc'
        }
    });

    return reservas;
}