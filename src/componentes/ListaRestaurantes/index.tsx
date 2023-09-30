import axios from 'axios';
import { useEffect, useState } from 'react';
import { IPaginacao } from '../../interfaces/IPaginacao';
import style from './ListaRestaurantes.module.scss';
import { ICurso } from '../../interfaces/ICurso';
import Curso from './Restaurante';
import http from '../../http';

interface ApiResponse {
  content: ICurso[];
  // outras propriedades, como totalElements, totalPages, etc., se aplicável
}

const ListaRestaurantes = () => {

  const [videos, setVideos] = useState<ICurso[]>([])
  const [proximaPagina, setProximaPagina] = useState('')

  useEffect(() => {
    http.get<ApiResponse>('video')
        .then(resposta => {
            console.log(resposta.data);
            if (Array.isArray(resposta.data.content)) {
              setVideos(resposta.data.content);
            }
        })
}, []);

  const verMais = () => {
    axios.get<IPaginacao<ICurso>>(proximaPagina)
      .then(resposta => {
        setVideos([...videos, ...resposta.data.results])
        setProximaPagina(resposta.data.next)
      })
      .catch(erro => {
        console.log(erro)
      })
  }

  return (<section className={style.ListaRestaurantes}>
    <h1>Os Cursos mais <em>bacanas</em>!</h1>
    {videos?.map(item => <Curso curso={item} key={item.id} />)}
    {proximaPagina && <button onClick={verMais}>
      ver mais
    </button>}
  </section>)
}

export default ListaRestaurantes