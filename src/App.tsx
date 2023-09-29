import { Routes, Route } from 'react-router-dom';
import PaginaBaseAdmin from './paginas/Administracao/PaginaBaseAdmin';
import Home from './paginas/Home';
import VitrineRestaurantes from './paginas/VitrineRestaurantes';
import Login from './paginas/login';
import { AdministracaoCursos } from './paginas/Administracao/cursos/AdministracaoCursos';
import { FormularioCursos } from './paginas/Administracao/cursos/FormularioCursos';
import { AdministracaoProfessores } from './paginas/Administracao/professor/AdministracaoProfessores';
import { FormularioProfessor } from './paginas/Administracao/professor/FormularioProfessor';
import { AdministracaoAlunos } from './paginas/Administracao/aluno/AdministracaoAlunos';
import { FormularioAluno } from './paginas/Administracao/aluno/FormularioAluno';
import { FormularioCoordenador } from './paginas/Administracao/coordenador/FormularioCoordenador';
import AdministracaoCoordenadores2 from './paginas/Administracao/coordenador/AdministracaoCoordenadores2';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cursos" element={<VitrineRestaurantes />} />
      <Route path="/login" element={<Login />}/>

      <Route path='/admin' element={<PaginaBaseAdmin />}>

        <Route path="cursos" element={<AdministracaoCursos />} />
        <Route path="cursos/novo" element={<FormularioCursos />} />
        <Route path="cursos/:id" element={<FormularioCursos />} />

        <Route path="professores" element={<AdministracaoProfessores />} />
        <Route path="professores/novo" element={<FormularioProfessor />} />
        <Route path="professores/:id" element={<FormularioProfessor />} />

        <Route path="alunos" element={<AdministracaoAlunos />} />
        <Route path="alunos/novo" element={<FormularioAluno />} />
        <Route path="alunos/:id" element={<FormularioAluno />} />

        <Route path="coordenadores" element={<AdministracaoCoordenadores2 />} />
        <Route path="coordenadores/novo" element={<FormularioCoordenador />} />
        <Route path="coordenadores/:id" element={<FormularioCoordenador />} />
        
      </Route>

    </Routes>
  );
}

export default App;


