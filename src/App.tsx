import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Planets from './components/Planets';
import People from './components/People';
import { ReactQueryDevtools } from 'react-query/devtools'

function App() {
const [page, setPage] = useState('planets')

  return (
    <>
      <div className="App">
        <h1>Star Wars Info</h1>
        <NavBar setPage={setPage} />
        <div className="content">
          {page === "planets" ? <Planets /> : <People />}
        </div>
      </div><ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
