import type { Request, Response } from "express"

export function createAnimal(req:Request, res:Response){

    res.json({
        message: "CreateAnimalRoute"
    })

}

export function getAnimals(req:Request, res:Response){  

    res.json({
        message: "GetAnimalsRoute"
    })

}

export function getAnimalById(req:Request, res:Response){   

    res.json({
        message: "GetAnimalByIdRoute"
    })

}

export function updateAnimal(req:Request, res:Response){

    res.json({
        message: "UpdateAnimalRoute"
    })

}

export function deleteAnimal(req:Request, res:Response){

    res.json({
        message: "DeleteAnimalRoute"
    })

}
