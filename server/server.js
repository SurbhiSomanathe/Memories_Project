
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());
dotenv.config();

app.use('/posts', postRoutes);

// const CONNECTION_URL = 'mongodb+srv://backmemo:backmemo@cluster0.dnexgzi.mongodb.net/?retryWrites=true&w=majority';
// const CONNECTION_URL = 'mongodb+srv://memo123:memo123@cluster0.hzvrdjm.mongodb.net/?retryWrites=true&w=majority';
mongoose
.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true, useUnifiedTopology: true,
})
.then(() => console.log("DB Connected 🥳..!"))
.catch(err => console.log(err))
const PORT = process.env.PORT|| 9900;
app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))
app.get('/', (req, res) => res.send("Hello world"))
// new MongoClient(connectionUri, { useUnifiedTopology: true }).connect()
// mongoose.connect(CONNECTION_URL)
//   .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  // .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);