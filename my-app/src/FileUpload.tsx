import React, { useState } from 'react';
import axios from 'axios';

function FileUpload() {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Verificar se há arquivos selecionados
        if (e.target.files && e.target.files.length > 0) {
            const selectedFile = e.target.files[0];
            const fileName = selectedFile.name.toLowerCase();

            // Verificar se o arquivo selecionado é .csv
            if (fileName.endsWith('.csv')) {
                setFile(selectedFile);
            } else {
                // Arquivo selecionado não é um CSV, você pode exibir uma mensagem de erro ou realizar outra ação aqui
                console.error('Por favor, selecione um arquivo CSV.');
            }
        }
    };

    const handleSubmit = async () => {
        if (file) {
            const formData = new FormData();
            formData.append('arquivo', file);

            try {
                const response = await axios.post('http://localhost:3000/api/files', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                setFile(response.data);
                console.log('Resposta da API:', response.data);

            } catch (error) {
                console.error('Erro ao enviar o arquivo:', error);
            }
        }
    };

    return (
        <div>
            <h1>Upload de Arquivo CSV</h1>
            <input type="file" accept=".csv" onChange={handleFileChange} />
            <button onClick={handleSubmit}>Enviar Arquivo</button>
        </div>
    );
}

export default FileUpload;
