import React from 'react';
import {Link} from 'react-router-dom';
import landingImg from '../../assets/images/background.jpg';

import './styles.css';

const Landing: React.FC = () =>{
  return(
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <h2>Funcionários</h2>
        </div>

        <img src={landingImg} alt="Funcionarios" className="hero-image"/>

        <div className="buttons-container">
          <Link to="/listar" className="listar">   
            Listar
          </Link>

          <Link to="/cadastrar" className="cadastrar">
            Cadastrar
          </Link>

          <Link to="/deletar" className="deletar">
            Deletar
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Landing;