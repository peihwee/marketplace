import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/MainRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express(); 
const PORT = 5000;

// mongo connection
const uri = process.env.MONGODB_URI;
console.log("process.env.JWT_SECRET "+process.env.JWT_SECRET);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/marketplaceDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// CORS setup
app.use(cors());

routes(app);

app.get('/api', (req, res) => 
    res.send(`Our application is running ${PORT}`)
);

app.listen(PORT,  ()=>
    console.log(`Your server is running ${PORT}`)
);