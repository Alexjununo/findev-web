import React from 'react';

import './Sidebar.css';

const Sidebar = () => (
  <aside>
    <strong>Cadastrar</strong>
    <form>
      <div class="input-block">
        <label htmlFor="github_username">Usuário do GitHub</label>
        <input
          name="github_username"
          id="github_username"
          type="text"
          required
        />
      </div>
      <div class="input-block">
        <label htmlFor="techs">Tecnologias</label>
        <input name="techs" id="techs" type="text" required />
      </div>
      <div className="input-group">
        <div class="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input name="latitude" id="latitude" type="text" required />
        </div>
        <div class="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input name="longitude" id="longitude" type="text" required />
        </div>
      </div>
      <button type="submit">Salvar</button>
    </form>
  </aside>
);

export default Sidebar;
