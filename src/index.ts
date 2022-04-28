import express, { Request, Response, NextFunction} from 'express';
import morgan from 'morgan';
import userRoute from './routes/users';

//Application
const app = express();

//Settings
app.use(express.json());  //Parse data in Json
app.use(morgan('dev'));   //Return status code for Debug

//Routes
app.use(userRoute);

//Server
app.listen(3333, () => {
  console.log('Server Working | Port:3333')
})


