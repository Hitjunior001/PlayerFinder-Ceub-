import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext({});


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const api = "https://playerfinder-86i3j3zt.b4a.run";

  useEffect(() => {
    checkLoggedIn();
  }, []);

  const signin = async (email, senha) => {
    try {
      const response = await fetch(`${api}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          password: senha,
        }),
      });

      if (!response.ok) {
        console.log(response)

        throw new Error("Credenciais inválidas");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", email);
      setToken(data.token);
      setUser(email);
      return true;
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      return false;
    }
  };

  const checkLoggedIn = () => {
    const username = localStorage.getItem("username");
    if (token && username) {
      setUser(username);
    }
  };

  const signup = async (usuario, nome, email, senha, estado, genero) => {
    try {
      const response = await fetch(`${api}/usuarios/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usuario,
          nome,
          email,
          senha,
          estado,
          genero,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao cadastrar usuário");
      }

      const data = await response.json();
      // Se necessário, faça algo com a resposta da API
      return true;
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      return false;
    }
  };

  const signout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signout, signup }}
    >
      {children}
    </AuthContext.Provider>
  );
};
