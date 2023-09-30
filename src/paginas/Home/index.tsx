import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../componentes/Banner';
import NavBar from '../../componentes/NavBar';
import Rodape from '../../componentes/Rodape';
import estilos from './Home.module.scss';

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <div className={estilos.MiniBanners}>
        <img src="https://www.wrcursosonline.com.br/blog/wp-content/uploads/2023/05/tendencias-de-tecnologia.jpg" alt="Um curso conceitual" />
        <div className={estilos.CardCentral}>
          <h2>A melhor rede de cursos online de tecnologia!</h2>
          <div>
            <p>seja um parceiro agora:</p>
            <p>ligue para <a href="callto:99999999999">(99) 99999-999</a></p>
          </div>
        </div>
        <img src="https://br.fi-group.com/wp-content/uploads/sites/9/2019/10/setor-tecnologia-da-informacao-scaled.jpg" alt="Um curso desconstruído" />
      </div>
      <div className={estilos.Categorias}>
        <div className={estilos.TipoDeCurso}>
          
          <h4>Frontend</h4>
        </div>
        <div className={estilos.TipoDeCurso}>
          
          <h4>Backend</h4>
        </div>
        <div className={estilos.TipoDeCurso}>
         
          <h4>Devops</h4>
        </div>
        <div className={estilos.TipoDeCurso}>
         
          <h4>Gestão</h4>
        </div>
      </div>
      <div className={estilos.Links}>
        <h3>Se você já é nosso aluno</h3>
        <p>Clique <Link to='/login'>aqui</Link></p>
      </div>
      <Rodape />
    </>
  );
}

export default App;
