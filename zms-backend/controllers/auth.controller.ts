import type { Request, Response } from "express"

export function register (req:Request, res:Response) {

    res.json({
        message: "RegisterRoute"
    })

}

export function login (req:Request, res:Response) {

    res.json({
        message: "LoginRoute"
    })

}
