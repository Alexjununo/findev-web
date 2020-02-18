import React from 'react';

import './Main.css';

const Main = () => (
  <main>
    <ul>
      <li className="dev-item">
        <header>
          <img
            src="https://avatars2.githubusercontent.com/u/28114515?s=460&v=4"
            alt="Alex Junior"
          />
          <div className="user-info">
            <strong>Alex Junior</strong>
            <span>ReactJs, Redux, NodeJs</span>
          </div>
        </header>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          reiciendis non voluptates temporibus aspernatur eveniet vel nulla sint
          deserunt saepe id error consequatur quas nostrum tenetur recusandae
          ipsam, libero cum.
        </p>
        <a href="https://github.com/Alexjununo">Acessar Perfil GitHub</a>
      </li>
    </ul>
  </main>
);

export default Main;
