import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import CustomTextField from "../../../componentes/text-fields/CustomTextFields";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import http from "../../../http";
import { ICurso } from "../../../interfaces/ICurso";

export const FormularioCursos = () => {
  const parametros = useParams();

  useEffect(() => {
    if (parametros.id) {
      http.get<ICurso>(`video/${parametros.id}`).then((resposta) => {
        setVideos(resposta.data);
      });
    }
  }, [parametros]);

  const [videos, setVideos] = useState<ICurso>({
    titulo: "",
    url: "",
  });

  const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    if (parametros.id) {
      http.put(`video`, videos).then(() => {
        alert("Curso atualizado com sucesso!");
      });
    } else {
      http.post("video", videos).then(() => {
        alert("Novo Curso cadastrado com sucesso!");
      });
    }
  };

  return (
    <>
      <Card>
        <CardHeader title="Formulário de Cadastro de Cursos" />
        <Divider sx={{ m: "0 !important" }} />
        <form onSubmit={aoSubmeterForm}>
          <CardContent>
            <Grid container spacing={5}>
              <Grid item xs={12}>
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  1. Informações de Login
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  label="Titulo do Curso"
                  placeholder="Coloque o titulo aqui"
                  onChange={(evento) =>
                    setVideos({ ...videos, titulo: evento.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomTextField
                  type="url"
                  label="URL"
                  placeholder="URL DO VÍDEO AQUI"
                  onChange={(evento) =>
                    setVideos({ ...videos, url: evento.target.value })
                  }
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider sx={{ m: "0 !important" }} />
            <CardActions>
              <Button type="submit" sx={{ mr: 2 }} variant="contained">
                Ok
              </Button>
              <Button type="reset" color="error" variant="contained">
                Resetar
            </Button>
          </CardActions>
        </form>
      </Card>
    </>
  );
};
