import express, {Request , Response} from 'express';
import multer from 'multer';

const userRouter = express.Router();
const upload = multer();
const csvdata : any[] = [];


userRouter.post('/files',
    upload.single('arquivo'),
    (request:Request, response:Response) => {
    if(request.file != null){

        const csvContent = request.file.buffer.toString('utf-8');

        csvContent
            .trim()
            .split('\r\n')
            .forEach((row) => {
                const columns = row.split(',');
                const data = {
                    column1: columns[0],
                    column2: columns[1],
                    column3: columns[2],
                    column4: columns[3],
                };
                csvdata.push(data);
            });

        // Agora, csvdata contém os dados do CSV
    }    return response.send(csvdata)

})
export function getCsvData() {
    return csvdata;
}
userRouter.get('/users', (req, res) => {
    res.send('Lê todos os itens');
    res.json(csvdata);
});

export default userRouter;
export { csvdata };