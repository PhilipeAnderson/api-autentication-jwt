import express from 'express';
import morgan from 'morgan';
import statusRoute from './routes/status';
import userRoute from './routes/users';

//Application
const app = express();

//Settings
app.use(express.json());  //Parse data in Json
app.use(morgan('dev'));   //Return status code for Debug
app.use(express.urlencoded({ extended: true }));

//Routes
app.use(userRoute);
app.use(statusRoute)

//Server
app.listen(3333, () => {
  console.log('Server Working | Port:3333')
})


