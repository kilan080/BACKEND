import express from 'express';
//routes import
import userRouter from './routes/user.routes.js';

const app = express();  //create an Express application

app.use(express.json());

app.get('/', (req, res) => {
    res.send("API is running....");
}
);

//route declaration
app.use('/api/v1/users', userRouter);

//example route: http://localhost:4000/api/v1/users/register


export default app;