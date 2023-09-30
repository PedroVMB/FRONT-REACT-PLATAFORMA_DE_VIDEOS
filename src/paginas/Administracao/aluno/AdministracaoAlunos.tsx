import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react"
import http from "../../../http"
import { Link as RouterLink } from 'react-router-dom'
import { IUser } from "../../../interfaces/IUser"

interface ApiResponse {
    content: IUser[];
    // outras propriedades, como totalElements, totalPages, etc., se aplicável
  }
  

const AdministracaoAlunos = () => {
    const [coordenadores, setCoordenadores] = useState<IUser[]>([]);

    useEffect(() => {
        http.get<ApiResponse>('aluno')
            .then(resposta => {
                console.log(resposta.data);
                if (Array.isArray(resposta.data.content)) {
                    setCoordenadores(resposta.data.content);
                }
            })
    }, []);
    

    const excluir = (coordenadorAhSerExcluido: IUser) => {
        http.delete(`aluno/${coordenadorAhSerExcluido.id}`)
            .then(() => {
                const listaCoordenadores = coordenadores.filter(userItem => userItem.id !== coordenadorAhSerExcluido.id)
                setCoordenadores([...listaCoordenadores])
            })
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Bairro</TableCell>
                            <TableCell>CEP</TableCell>
                            <TableCell>Cidade</TableCell>
                            <TableCell>Uf</TableCell>
                            <TableCell>Numero</TableCell>
                            <TableCell>Complemento</TableCell>
                            <TableCell>Editar</TableCell>
                            <TableCell>Excluir</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Array.isArray(coordenadores) && coordenadores.map(coordenador => (
                                <TableRow key={coordenador.id}>
                                    <TableCell>{coordenador.nome}</TableCell>
                                    <TableCell>{coordenador.email}</TableCell>
                                    <TableCell>{coordenador.endereco.bairro}</TableCell>
                                    <TableCell>{coordenador.endereco.cep}</TableCell>
                                    <TableCell>{coordenador.endereco.cidade}</TableCell>
                                    <TableCell>{coordenador.endereco.uf}</TableCell>
                                    <TableCell>{coordenador.endereco.numero}</TableCell>
                                    <TableCell>{coordenador.endereco.complemento}</TableCell>
                                    <TableCell>
                                        <RouterLink to={`/admin/aluno/${coordenador.id}`}>editar</RouterLink>
                                    </TableCell>
                                    <TableCell>
                                        <Button variant="outlined" color="error" onClick={() => excluir(coordenador)}>
                                            Excluir
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default AdministracaoAlunos;
