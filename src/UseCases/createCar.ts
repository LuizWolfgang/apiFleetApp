import { Request, Response } from "express";
import { Car } from "../models/Car";

export async function createCar(req: Request, res: Response){
    const {  
        id,
        user_id,
        licensePlate,
        description,
        created, 
        isSync, 
       } = req.body;


    const car = await Car.create({
        id,
        user_id,
        licensePlate,
        description,
        created, 
        isSync, 
     });
    res.status(200).send(car)
}