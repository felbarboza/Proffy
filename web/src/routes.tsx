import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/Landing';

import Listar from './pages/Listar';
import Cadastrar from './pages/Cadastrar';
import Deletar from './pages/Deletar';

const Routes: React.FC = () =>{
  return(
    <BrowserRouter>
      <Route path="/" exact component={Landing}/>
      <Route path="/listar" component={Listar}/>
      <Route path="/cadastrar" component={Cadastrar}/>
      <Route path="/deletar" component={Deletar}/>
    </BrowserRouter>
  );
};

export default Routes;