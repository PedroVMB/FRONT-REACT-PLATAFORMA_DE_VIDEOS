import React, { useState } from "react";
import estilos from "./Login.module.scss";
import NavBar from "../../componentes/NavBar";
import Rodape from '../../componentes/Rodape';

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação
    if (email === "seu_email@example.com" && password === "sua_senha") {
      setLoggedIn(true);
      alert("Login bem-sucedido!");
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
