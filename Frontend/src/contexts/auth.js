import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
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
          "Access-Control-Allow-Origin": "*", // Permite acesso de qualquer origem
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE", // Permite esses métodos HTTP
          "Access-Control-Allow-Headers": "Content-Type, Authorization" // Permite esses cabeçalhos
        },
        body: JSON.stringify({
          username: email,
          password: senha,
        }),
      });

      if (!response.ok) {
        throw new Error("Credenciais inválidas");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      setUser(data.user); // Define o usuário no estado local
      return true;
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      return false;
    }
  };

  const checkLoggedIn = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const response = await fetch(`${api}/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          localStorage.removeItem("token");
        }
      } catch (error) {
        console.error("Erro ao verificar login:", error);
      }
    }
  };

  const signup = async (usuario, nome, email, senha, estado, genero) => {
    try {
      const response = await fetch(`${api}/usuarios/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*", // Permite acesso de qualquer origem
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE", // Permite esses métodos HTTP
          "Access-Control-Allow-Headers": "Content-Type, Authorization" // Permite esses cabeçalhos
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
    setUser(null); // Limpa o estado do usuário ao fazer logout
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signout, signup }}
    >
      {children}
    </AuthContext.Provider>
  );
};
