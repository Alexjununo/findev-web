import React, { useState, useEffect } from 'react';
import Sidebar from '../modules/Sidebar/Sidebar';
import Main from '../modules/Main/Main';
import api from '../services/api';
import './App.css';

function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');
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

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      error => {
        if (error.message.startsWith('Only secure origins are allowed')) {
          console.log(error);
        }
      },
      {
        timeout: 30000
      }
    );
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    api
      .post('devs', { github_username, techs, latitude, longitude })
      .then(response => {
        setGithubUsername('');
        setTechs('');
        setDevs([...devs, response.data]);
      })
      .catch(error => console.log(error));
  };

  const handleGithubUsername = e => setGithubUsername(e.target.value);

  const handleTechs = e => setTechs(e.target.value);

  const handleLatitude = e => setLatitude(e.target.value);

  const handleLongitude = e => setLongitude(e.target.value);

  return (
    <div id="app">
      <Sidebar
        handleSubmit={handleSubmit}
        latitude={latitude}
        longitude={longitude}
        github_username={github_username}
        techs={techs}
        handleGithubUsername={handleGithubUsername}
        handleTechs={handleTechs}
        handleLatitude={handleLatitude}
        handleLongitude={handleLongitude}
      />
      <Main devs={devs} />
    </div>
  );
}

export default App;
