import { Request, Response } from "express";
import { Car } from "../models/Car";

export async function listCar(req: Request, res: Response){
    const car = await Car.find();
    res.json(car)
}