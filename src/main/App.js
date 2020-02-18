import React, { useState, useEffect } from 'react';
import Sidebar from '../modules/Sidebar/Sidebar';
import Main from '../modules/Main/Main';
import api from '../services/api';
import './App.css';

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    const loadDevs = async () => {
      api
        .get('/devs')
        .then(response => setDevs(response.data))
        .catch(error => console.log(error));
    };
    loadDevs();
  }, []);

  const handleSubmit = payload => {
    api
      .post('devs', payload)
      .then(response => setDevs([...devs, response.data]))
      .catch(error => console.log(error));
  };

  return (
    <div id="app">
      <Sidebar onSubmit={handleSubmit} />
      <Main devs={devs} />
    </div>
  );
}

export default App;
