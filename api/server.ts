import express from 'express'
import cors from 'cors'
import usersRouter from "./routers/users.router";
import bodyParser from "body-parser";
import multer from "multer";

const upload = multer();

// Porta do servidor
const PORT = process.env.PORT || 3000

// Host do servidor
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

// App Express
const app = express();

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

// Endpoint raiz
app.get('/', (req, res) => {
    res.send('Bem-vindo!');
});

// Cors
app.use(cors({
    origin: ['http://localhost:3000']
}));

app.use('/api', usersRouter);

// Resposta padrão para quaisquer outras requisições:
app.use((req, res) => {
    res.status(404);
});

// Inicia o sevidor
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso ${HOSTNAME}:${PORT}`);
});
