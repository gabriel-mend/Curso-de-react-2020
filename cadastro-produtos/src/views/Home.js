import React from 'react';

import { Link } from 'react-router-dom'

export default function Home() {
  return (
  <div className="jumbotron">
    <h1 className="display-3">Bem Vindo!</h1>
    <p className="lead">Este é seu sistema, utilize a barra de navegação para acessar as páginas</p>
    <hr className="my-4"></hr>
    <p className="lead">
      <Link className="btn btn-primary btn-lg" to="/register" role="button">Cadastrar Produto</Link>
    </p>
  </div>
  );
}
