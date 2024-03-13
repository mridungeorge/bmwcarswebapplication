import { Request, Response } from 'express';
import Car from '../models/Car';

export const getCars = async (req: Request, res: Response) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (err: any) { // Specify the type of err as any
    res.status(500).json({ message: err.message });
  }
};
