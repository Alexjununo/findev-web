import React, { useState, useEffect } from 'react';

import './Sidebar.css';

const Sidebar = props => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();

    await props.onSubmit({ github_username, techs, latitude, longitude });

    setGithubUsername('');
    setTechs('');
  };

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

  return (
    <aside>
      <strong>Cadastrar</strong>
      <form onSubmit={handleSubmit}>
        <div className="input-block">
          <label htmlFor="github_username">Usuário do GitHub</label>
          <input
            name="github_username"
            id="github_username"
            type="text"
            required
            value={github_username}
            onChange={e => setGithubUsername(e.target.value)}
          />
        </div>
        <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input
            name="techs"
            id="techs"
            type="text"
            required
            value={techs}
            onChange={e => setTechs(e.target.value)}
          />
        </div>
        <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input
              value={latitude}
              name="latitude"
              id="latitude"
              type="number"
              onChange={e => setLatitude(e.target.value)}
              required
            />
          </div>
          <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input
              value={longitude}
              name="longitude"
              id="longitude"
              type="number"
              onChange={e => setLongitude(e.target.value)}
              required
            />
          </div>
        </div>
        <button type="submit">Salvar</button>
      </form>
    </aside>
  );
};

export default Sidebar;
