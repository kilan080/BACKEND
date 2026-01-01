import express from 'express';
//routes import
import userRouter from './routes/user.routes.js';
import postRouter from './routes/post.routes.js';

const app = express();  //create an Express application

app.use(express.json());

app.get('/', (req, res) => {
    res.send("API is running....");
}
);

//route declaration
app.use('/api/v1/users', userRouter);
app.use('/api/v1/posts', postRouter);

//example route: http://localhost:4000/api/v1/users/register


export default app;