import express from 'express';
import { getCars } from '../controllers/carController';

const router = express.Router();

router.get('/', getCars);

export default router;
