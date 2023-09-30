import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importe useNavigate
import estilos from "./Login.module.scss";
import NavBar from "../../componentes/NavBar";
import Rodape from '../../componentes/Rodape';

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate(); // Use useNavigate para obter uma função de navegação

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aqui você pode adicionar a lógica de autenticação
    if ((email === "professor@teste.com" && password === "professor") || (email === "coordenador@teste.com" && password === "coordenador")) { // Use as credenciais corretas
      setLoggedIn(true);
      alert("Login bem-sucedido!");
      
      // Redirecione o usuário para a rota '/admin' após o login bem-sucedido
      navigate("/admin/cursos");
    } else if (email === "aluno@teste.com" && password === "aluno")  {
      setLoggedIn(true);
      alert("Login bem-sucedido!");

      navigate("/cursos")
    } else {
      alert("Email ou senha incorretos. Tente novamente.");
    }
  };

  return (
    <>
      <NavBar />
      <div className={estilos["login-container"]}>
        <div className={estilos["login-box"]}>
          {loggedIn ? (
            <div className={estilos["welcome-message"]}>
              <h2>Bem-vindo, {email}!</h2>
              <p>Você está logado com sucesso.</p>
            </div>
          ) : (
            <form onSubmit={handleLogin} className={estilos["login-form"]}>
              <h2>Login</h2>
              <div className={estilos["form-group"]}>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className={estilos["form-group"]}>
                <label htmlFor="password">Senha:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Entrar</button>
            </form>
          )}
        </div>
      </div>
      <Rodape />
    </>
  );
};

export default Login;
