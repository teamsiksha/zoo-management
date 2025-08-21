import type { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken";

export function authMiddleware(req:Request, res:Response, next:NextFunction){

    const token = req.headers.authorization?.split(" ")[1];
    if(!token){
        return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string, role: string };

    req.user = decoded;

    next();
}

export function adminMiddleware(req:Request, res:Response, next:NextFunction){

    const admin = req.user.role === "ADMIN";

    if(!admin){
        return res.status(401).json({ message: "You are not authorized to access or modify this resource" });
    }
    
    next();
}

export function userMiddleware(req:Request, res:Response, next:NextFunction){

    const user = req.user.role === "USER";

    if(!user){
        return res.status(401).json({ message: "You are not authorized to access or modify this resource" });
    }

    next();
}