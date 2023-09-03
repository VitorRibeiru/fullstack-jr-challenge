import express, { Request, Response } from 'express';
import multer from 'multer';

const userRouter = express.Router();
const upload = multer();
let previousCsvContent: string | null = null;

userRouter.post('/files', upload.single('arquivo'), (request: Request, response: Response) => {
    if (request.file != null) {
        const csvContent = request.file.buffer.toString('utf-8');

        // Verifique se o conteúdo é diferente do conteúdo anterior
        if (csvContent !== previousCsvContent) {
            previousCsvContent = csvContent;

            const csvdata: any[] = [];
            csvContent
                .trim()
                .split('\r\n')
                .forEach((row,index) => {
                    if (index === 0) return;
                    const columns = row.split(',');
                    const data = {
                        column1: columns[0],
                        column2: columns[1],
                        column3: columns[2],
                        column4: columns[3],
                        column5: columns[4],
                    };
                    csvdata.push(data);
                });

            response.send(csvdata)
        } else {
            
        }
    } else {
        response.status(400).send('Nenhum arquivo foi enviado na requisição.');
    }
});

export function getCsvData() {
    // Retorna os dados do CSV, se necessário
    return previousCsvContent;
}

userRouter.get('/users', (req, res) => {
    if (previousCsvContent) {
        res.json(previousCsvContent);
    } else {
        res.status(404).send('Nenhum arquivo CSV foi carregado ainda.');
    }
});

export default userRouter;
