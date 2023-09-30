import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react"
import http from "../../../http"
import { Link as RouterLink } from 'react-router-dom'
import { ICurso } from "../../../interfaces/ICurso";

interface ApiResponse {
    content: ICurso[];
}
  

const AdministracaoCursos = () => {
    const [videos, setVideos] = useState<ICurso[]>([]);

    useEffect(() => {
        http.get<ApiResponse>('video')
            .then(resposta => {
                console.log(resposta.data);
                if (Array.isArray(resposta.data.content)) {
                    setVideos(resposta.data.content);
                }
            })
    }, []);
    

    const excluir = (videoAhSerExcluido: ICurso) => {
        http.delete(`video/${videoAhSerExcluido.id}`)
            .then(() => {
                const listaCoordenadores = videos.filter(userItem => userItem.id !== videoAhSerExcluido.id)
                setVideos([...listaCoordenadores])
            })
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Titulo</TableCell>
                            <TableCell>Url</TableCell>
                            <TableCell>Editar</TableCell>
                            <TableCell>Excluir</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Array.isArray(videos) && videos.map(video => (
                                <TableRow key={video.id}>
                                    <TableCell>{video.titulo}</TableCell>
                                    <TableCell>{video.url}</TableCell>
                                    <TableCell>
                                        <RouterLink to={`/admin/cursos/${video.id}`}>editar</RouterLink>
                                    </TableCell>
                                    <TableCell>
                                        <Button variant="outlined" color="error" onClick={() => excluir(video)}>
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

export default AdministracaoCursos;