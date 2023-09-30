import axios from 'axios';
import { useState, useEffect } from 'react';
import { ICurso } from '../../../interfaces/ICurso';

interface CursoProps {
  curso: ICurso
}

const Curso = ({ curso }: CursoProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cursos, setCursos] = useState<ICurso[]>()
  useEffect(() => {
    axios.get<ICurso[]>(`http://localhost:3333/video`)
      .then(resposta => {
        setCursos(resposta.data)
      })
  }, [curso.id])

  return (
    <section>
      <div>
        <h2>{curso.titulo}</h2>
        <iframe
          width="560"
          height="315"
          frameBorder="0" 
          src={curso.url} 
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; 
                 encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen 
        ></iframe>
      </div>
    </section>
  )
}

export default Curso
