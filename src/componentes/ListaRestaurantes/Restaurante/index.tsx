import axios from 'axios';
import { useState, useEffect } from 'react';
import IPrato from '../../../interfaces/IPrato';
import IRestaurante from '../../../interfaces/IRestaurante';

interface RestauranteProps {
  restaurante: IRestaurante
}

const Restaurante = ({ restaurante }: RestauranteProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [pratos, setPratos] = useState<IPrato[]>()
  useEffect(() => {
    axios.get<IPrato[]>(`http://localhost:8000/api/v1/restaurantes/${restaurante.id}/pratos/`)
      .then(resposta => {
        setPratos(resposta.data)
      })
  }, [restaurante.id])

  return (<section >
    <div>
      <h2>{restaurante.nome}</h2>
    </div>
  </section>)
}

export default Restaurante
