import React, {ChangeEvent, useMemo, useState} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SelectView from "./SelectView";
import axios from "axios";




function App() {

    const [selectedFile, setSelectedFile] = useState<File | string | null>(null);
    const [search, setSearch] = useState('');
    const [dataFile, setDataFile] = useState<any[]>([]);
    const [serverResponse, setServerResponse] = useState([]); // Adicione o estado serverResponse
    const [invalidFile, setInvalidFile] = useState(false);
    const [buttonText, setButtonText] = useState("Selecionar Arquivo");

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };



   const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            const selected = files[0];

            const validExtensions = ['csv'];
            const fileExtension = selected.name.split('.').pop()?.toLowerCase();

            if (fileExtension && validExtensions.includes(fileExtension)) {
                try {
                    const formData = new FormData();
                    formData.append('arquivo', selected);

                    const response = await axios.post('http://localhost:3000/api/files', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    });

                    setSelectedFile(selected);
                    setButtonText(selected.name);
                    setInvalidFile(false);
                    setDataFile(response.data); // Atualize o estado com o response.data

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        <div className="inputs">
            <input
                className="search-bar"
                type="text"
                value={search}
                onChange={handleSearchChange}
            />
            <div className="inputs">
                <input className="input" type="file" accept=".csv" onChange={handleFileChange} id="fileInput" style={{ display: 'none' }} />
                <button className={`button ${invalidFile ? 'button-invalid' : ''}`} onClick={handleButtonClick}>{buttonText}</button>
            </div>
        </div>
        <SelectView searchValue={search} datafile={dataFile} />
    </div>
  );
}

export default App;
