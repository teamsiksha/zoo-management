import type { Request, Response } from "express"

export function createTicket(req:Request, res:Response){

    res.json({
        message: "CreateTicketRoute"
    })

}

export function getTickets(req:Request, res:Response){  
    res.json({
        message: "GetTicketsRoute"
    })

}

export function getTicketById(req:Request, res:Response){
    res.json({
        message: "GetTicketByIdRoute"
    })
}

export function updateTicket(req:Request, res:Response){
    res.json({
        message: "UpdateTicketRoute"
    })
}

export function deleteTicket(req:Request, res:Response){
    res.json({
        message: "DeleteTicketRoute"
    })
}