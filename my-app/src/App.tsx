import React, {ChangeEvent, useMemo, useState} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SelectView from "./SelectView";
import Button from "./Button";



function App() {
    const [search, setSearch] = useState('');
    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
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
            <Button />
        </div>
        <SelectView searchValue={search} />
    </div>
  );
}

export default App;
