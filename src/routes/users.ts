import { Router, Request, Response, NextFunction } from 'express';

const usersRoute = Router();

//get /users
usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
  const users = [{ name: 'Philipe' }];
  res.status(200).json(users);
});

export default usersRoute;

