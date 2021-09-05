import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/mainRoutes.js';

const app = express(); 
const PORT = 4000;

// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/marketplaceDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// CORS setup
app.use(cors());

routes(app);

app.get('/', (req, res) => 
    res.send(`Our application is running ${PORT}`)
);

app.listen(PORT,  ()=>
    console.log(`Your server is running ${PORT}`)
);