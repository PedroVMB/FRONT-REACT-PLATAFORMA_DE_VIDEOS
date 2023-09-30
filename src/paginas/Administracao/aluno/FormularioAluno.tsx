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
  import { IUser } from "../../../interfaces/IUser";
  import http from "../../../http";
  
  
  
  export const FormularioAluno = () => {


    const parametros = useParams();
  
    useEffect(() => {
      if (parametros.id) {
        http.get<IUser>(`aluno/${parametros.id}`).then((resposta) => {
          setUser(resposta.data);
        });
      }
    }, [parametros]);
  
    const [user, setUser] = useState<IUser>({
      nome: "",
      email: "",
      senha: "",
      endereco: {
        logradouro: "",
        bairro: "",
        cep: "",
        cidade: "",
        uf: "",
        numero: "",
        complemento: "",
      },
    });
  
    const aoSubmeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
      evento.preventDefault();
  
      if (parametros.id) {
        http.put(`aluno`, user).then(() => {
          alert("aluno atualizado com sucesso!");
        });
      } else {
        http.post("aluno", user).then(() => {
          alert("Novo Aluno cadastrado com sucesso!");
        });
      }
    };  
   
  
    return (
      <>
        <Card>
          <CardHeader title="Formulário de Cadastro Aluno" />
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
                    label="Nome completo"
                    placeholder="Rafael Nilo"
                    onChange={(evento) =>
                      setUser({ ...user, nome: evento.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    
                    type="email"
                    label="Email"
                    placeholder="rafaelnilo@teste.com"
                    onChange={(evento) =>
                      setUser({ ...user, email: evento.target.value })
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    
                    label="Senha"
                    placeholder="*************"
                    type="password"
                    onChange={(evento) =>
                      setUser({ ...user, senha: evento.target.value })
                    }
                  />
                </Grid>
  
                <Grid item xs={12}>
                  <Divider sx={{ mb: "0 !important" }} />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    2. Endereço
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label="Logradouro"
                    placeholder="Logradouro aqui"
                    onChange={(evento) =>
                      setUser({
                        ...user,
                        endereco: { ...user.endereco, logradouro: evento.target.value },
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label="Bairro"
                    placeholder="Nordeste de Amaralina"
                    onChange={(evento) =>
                      setUser({
                        ...user,
                        endereco: { ...user.endereco, bairro: evento.target.value },
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label="CEP"
                    defaultValue=""
                    placeholder="42722020"
                    onChange={(evento) =>
                      setUser({
                        ...user,
                        endereco: { ...user.endereco, cep: evento.target.value },
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    defaultValue=""
                    label="Cidade"
                    placeholder="Salvador"
                    onChange={(evento) =>
                      setUser({
                        ...user,
                        endereco: { ...user.endereco, cidade: evento.target.value },
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    defaultValue=""
                    label="Complemento"
                    placeholder="Tome cuidado ao vir para ca"
                    onChange={(evento) =>
                      setUser({
                        ...user,
                        endereco: { ...user.endereco, complemento: evento.target.value },
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    defaultValue=""
                    label="UF"
                    placeholder="BA"
                    onChange={(evento) =>
                      setUser({
                        ...user,
                        endereco: { ...user.endereco, uf: evento.target.value },
                      })
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    defaultValue=""
                    label="Número"
                    placeholder="656"
                    onChange={(evento) =>
                      setUser({
                        ...user,
                        endereco: { ...user.endereco, numero: evento.target.value },
                      })
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
