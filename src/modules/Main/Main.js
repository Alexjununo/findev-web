import React from 'react';

import './Main.css';

const Main = props => (
  <main>
    <ul>
      {props.devs.length > 0
        ? props.devs.map(dev => (
            <li className="dev-item" key={dev._id}>
              <header>
                <img src={dev.avatar_url} alt={dev.name} />
                <div className="user-info">
                  <strong>{dev.name}</strong>
                  <span>{dev.techs.join(', ')}</span>
                </div>
              </header>
              <p>{dev.bio}</p>
              <a href={`https://github.com/${dev.github_username}`}>
                Acessar Perfil GitHub
              </a>
            </li>
          ))
        : ''}
    </ul>
  </main>
);

export default Main;
