import React, {ChangeEvent, useMemo, useState} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SelectView from "./SelectView";
import axios from "axios";
import { Person } from './types';




function App() {

    const [selectedFile, setSelectedFile] = useState<File | string | null>(null);
    const [search, setSearch] = useState('');
    const [dataFile, setDataFile] = useState<Person[]>([]);
    const [serverResponse, setServerResponse] = useState([]);
    const [invalidFile, setInvalidFile] = useState(false);
    const [buttonText, setButtonText] = useState("Select File");

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
                    formData.append('archive', selected);

                    const response = await axios.post('http://localhost:3000/api/files', formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    });

                    setSelectedFile(selected);
                    setButtonText(selected.name);
                    setInvalidFile(false);
                    setDataFile(response.data);

                } catch (error) {
                    console.error('Error on send file:', error);
                }
            } else {
                setSelectedFile('Invalid');
                setButtonText("Invalid File. Select a '.CSV' file'.");
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
                    placeholder='Find a Person'
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
