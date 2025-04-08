import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRouter from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRouter)
// const CONNECTION_URL = 'mongodb+srv://ProfileProject1:Delta@2024@cluster0.wr16y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const CONNECTION_URL = 'mongodb://localhost:27017/test';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL)
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on the port:${PORT}`))
        // console.log(mongoose.connection.db)
        mongoose.connection.db.collection('memories').findOne().then(
            doc => console.log(doc)
        )
    })
    .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);