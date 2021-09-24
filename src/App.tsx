import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { ReactQueryDevtools } from 'react-query/devtools'
import People from './components/People/People';
import Planets from './components/Planets/Planets';

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
