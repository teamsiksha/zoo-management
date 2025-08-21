import type { Request, Response } from "express"

export function createAdmin(req:Request, res:Response){

    res.json({
        message: "CreateAdminRoute"
    })

}

export function getAdmins(req:Request, res:Response){

    res.json({
        message: "GetAdminsRoute"
    })

}

export function getAdminById(req:Request, res:Response){

    res.json({
        message: "GetAdminByIdRoute"
    })

}

export function updateAdmin(req:Request, res:Response){

    res.json({
        message: "UpdateAdminRoute"
    })

}

export function deleteAdmin(req:Request, res:Response){

    res.json({
        message: "DeleteAdminRoute"
    })

}