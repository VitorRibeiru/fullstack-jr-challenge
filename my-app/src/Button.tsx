import React, { ChangeEvent, useState } from 'react';
import axios from 'axios';

const FileInputComponent: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | string | null>(null);
    const [buttonText, setButtonText] = useState("Selecionar Arquivo");
    const [invalidFile, setInvalidFile] = useState(false);

    const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            const selected = files[0];

            // Verifique a extensão do arquivo
            const validExtensions = ['csv'];
            const fileExtension = selected.name.split('.').pop()?.toLowerCase();

            if (fileExtension && validExtensions.includes(fileExtension)) {
                try {
                    // Faça o upload do arquivo para o servidor
                    const formData = new FormData();
                    formData.append('arquivo', selected);

                    const response = await axios.post('http://localhost:3000/api/files', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    });

                    setSelectedFile(selected);
                    setButtonText(`Arquivo selecionado: ${selected.name}`);
                    setInvalidFile(false);
                    console.log('Resposta da API:', response.data);
                } catch (error) {
                    console.error('Erro ao enviar o arquivo:', error);
                }
            } else {
                setSelectedFile('Invalid');
                setButtonText("Arquivo Inválido. Selecione um arquivo '.CSV'.");
                setInvalidFile(true);
            }
        }
    };

    const handleButtonClick = () => {
        const fileInput = document.getElementById('fileInput') as HTMLInputElement;
        if (fileInput) {
            fileInput.click();
        }
    };

    return (
        <div className="inputs">
            <input className="input" type="file" accept=".csv" onChange={handleFileChange} id="fileInput" style={{ display: 'none' }} />
            <button className={`button ${invalidFile ? 'button-invalid' : ''}`} onClick={handleButtonClick}>{buttonText}</button>
        </div>
    );
};

export default FileInputComponent;
