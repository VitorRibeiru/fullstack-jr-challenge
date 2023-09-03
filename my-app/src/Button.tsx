import React, { ChangeEvent, useState } from 'react';

const FileInputComponent: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | string | null>(null);

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            const selected = files[0];

            // Verifique a extensão do arquivo
            const validExtensions = ['csv'];
            const fileExtension = selected.name.split('.').pop()?.toLowerCase();

            if (fileExtension && validExtensions.includes(fileExtension)) {
                setSelectedFile(selected);
            } else {
                setSelectedFile('Invalid');
            }
        }
    };

    return (
        <div className="inputs">
            <input className="input" type="file" accept=".csv" onChange={handleFileChange} id="fileInput" />
            <label htmlFor="fileInput" className="button">
                Select Archive
            </label>
            {selectedFile !== null && selectedFile !== 'Invalid' ? (
                <div className="warning">
                    {selectedFile instanceof File && (
                        <p className="p">Arquivo selecionado: {selectedFile.name}</p>
                    )}
                    {/* Aqui você pode fazer algo com o arquivo selecionado, como enviá-lo para o servidor */}
                </div>
            ) : selectedFile === 'Invalid' ? (
                <div className="warning">
                    <p className="p">Selected file is invalid.<br />Select a ".csv" file.</p>
                </div>
            ) : null}
        </div>
    );
};

export default FileInputComponent;
