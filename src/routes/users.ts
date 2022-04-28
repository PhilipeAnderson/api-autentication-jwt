import { Router, Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

const usersRoute = Router();

//get /users
usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
  const users = [{ name: 'Philipe' }];
  res.status(StatusCodes.OK).json(users);
});

//get /users/:uuid
usersRoute.get('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;
  res.status(200).send({ uuid });
});

//post /users



//put /users/:uuid

//delete /users/:uuid



export default usersRoute;

