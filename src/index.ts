import express, { Request, Response, NextFunction} from 'express';
import userRoute from './routes/users';

const app = express();
app.use(userRoute)


app.listen(3333, () => {
  console.log('Server Working | Port:3333')
})


