import React from 'react';
import Banner from '../../componentes/Banner';
import NavBar from '../../componentes/NavBar';
import Rodape from '../../componentes/Rodape';
import ListaCursos from '../../componentes/ListaRestaurantes';

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <ListaCursos />
      <Rodape />
    </>
  );
}

export default App;
