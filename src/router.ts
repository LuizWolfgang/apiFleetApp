import { Router } from 'express'
import { listCar } from './UseCases/listCar';
import { createCar } from './UseCases/createCar';

export const router = Router();

router.get('/car', listCar)

router.post('/car', createCar)