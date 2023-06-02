import express, {Request, Response} from 'express';

const router = express.Router();

// import {apiRouter} from './api/api_router';

router.get('/', (req: Request, res: Response) => {
  res.json({title: 'Service Express-GraphQl'});
});

// router.use('/api', mainMiddleware, apiRouter);

export {router as indexRouter};
