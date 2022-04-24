import express, { Request, Response, NextFunction} from 'express';
import { bands } from './database/bands';

const app = express();

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({foo: 'bar'})
})


app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send(bands)
})

app.listen(3333, () => {
  console.log('Server Working | Port:3333')
})