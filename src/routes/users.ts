import { Router, Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

const usersRoute = Router();

//get /users
usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
  const users = [{ name: 'Philipe' }];
  res.status(200).json(users);
});

//get /users/:uuid
usersRoute.get('/users/:uuid', (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
  const uuid = req.params.uuid;
  res.status(StatusCodes.OK).send({ uuid });
});

//post /users
usersRoute.post('/users', (req: Request, res: Response, next: NextFunction) => {
  const newUser = req.body
  res.status(StatusCodes.CREATED).send(newUser)
});


//put /users/:uuid

//delete /users/:uuid



export default usersRoute;

