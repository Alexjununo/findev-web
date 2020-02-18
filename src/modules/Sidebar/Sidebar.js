import React from 'react';

import './Sidebar.css';

const Sidebar = props => (
  <aside>
    <strong>Cadastrar</strong>
    <form onSubmit={props.handleSubmit}>
      <div className="input-block">
        <label htmlFor="github_username">Usuário do GitHub</label>
        <input
          name="github_username"
          id="github_username"
          type="text"
          required
          value={props.github_username}
          onChange={e => props.handleGithubUsername(e.target.value)}
        />
      </div>
      <div className="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input
          name="techs"
          id="techs"
          type="text"
          required
          value={props.techs}
          onChange={e => props.handleTechs(e.target.value)}
        />
      </div>
      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input
            value={props.latitude}
            name="latitude"
            id="latitude"
            type="number"
            onChange={e => props.handleLatitude(e.target.value)}
            required
          />
        </div>
        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input
            value={props.longitude}
            name="longitude"
            id="longitude"
            type="number"
            onChange={e => props.handleLongitude(e.target.value)}
            required
          />
        </div>
      </div>
      <button type="submit">Salvar</button>
    </form>
  </aside>
);

export default Sidebar;
