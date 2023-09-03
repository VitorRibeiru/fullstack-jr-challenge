import React, {ChangeEvent, useMemo, useState} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

// import userRouter from "../../api/routers/users.router";
// import { csvdata } from '../../api/routers/users.router';
import './App.css';
import TableList from "./Table";
import SelectView from "./SelectView";
import Button from "./Button";



function App() {
    const [search, setSearch] = useState('');
    return (
    <div className="App">
      <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />
          <div className="inputs">
          <input
          className="search-bar"
          type="text"
          value={search}
          onChange={(ev) => setSearch(ev.target.value)}
          />


              <Button />

          </div>
          <SelectView onSearchChange={setSearch} />
      </header>
    </div>
  );
}

export default App;
