import express from 'express'
import cors from 'cors'
import usersRouter from "./routers/users.router";
import bodyParser from "body-parser";
import {configDotenv} from "dotenv";


const env = configDotenv()

const BACKEND = process.env.BACKEND || 3000;

const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

const app = express();

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

// Endpoint
app.get('/', (req, res) => {
    res.send('BACKEND IS RUNNING!');
});

// Cors
app.use(cors({
    origin: 'http://localhost:4000'
}));

app.use('/api', usersRouter);

app.use((req, res) => {
    res.status(404);
});

//  server start
app.listen(BACKEND, () => {
    console.log(`Server running sucessful ${HOSTNAME}:${BACKEND}`);
});
