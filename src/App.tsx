import { Routes, Route } from 'react-router-dom';
import PaginaBaseAdmin from './paginas/Administracao/PaginaBaseAdmin';
import AdministracaoPratos from './paginas/Administracao/Pratos/AdministracaoPratos';
import FormularioPrato from './paginas/Administracao/Pratos/FormularioPrato';
import AdministracaoRestaurantes from './paginas/Administracao/Restaurantes/AdministracaoRestaurantes';
import FormularioRestaurante from './paginas/Administracao/Restaurantes/FormularioRestaurante';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';
import Login from './paginas/login';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cursos" element={<VitrineRestaurantes />} />
      <Route path="/login" element={<Login />}/>

      <Route path='/admin' element={<PaginaBaseAdmin />}>

        <Route path="cursos" element={<AdministracaoRestaurantes />} />
        <Route path="cursos/novo" element={<FormularioRestaurante />} />
        <Route path="cursos/:id" element={<FormularioRestaurante />} />

        <Route path="professores" element={<AdministracaoPratos />} />
        <Route path="professores/novo" element={<FormularioPrato />} />

        <Route path="alunos" element={<AdministracaoPratos />} />
        <Route path="alunos/novo" element={<FormularioPrato />} />

        <Route path="coordenadores" element={<AdministracaoPratos />} />
        <Route path="coordenadores/novo" element={<FormularioPrato />} />
      </Route>

    </Routes>
  );
}

export default App;


