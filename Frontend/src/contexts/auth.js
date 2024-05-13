import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");
  const api = "http://localhost:8080";

  useEffect(() => {
    checkLoggedIn();
  }, [token]);

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
        throw new Error("Credenciais inválidas");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      setToken(data.token); 
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
        const response = await fetch(`${api}/perfil`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
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
  const signup = async (usuario, nome, email, senha) => {
    try {
      const response = await fetch(`${api}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: usuario,
          nomeCompleto: nome,
          email: email,
          password: senha,
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao cadastrar usuário");
      }

      window.location.href = '/login';

      return true;
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      return false;
    }
  };
  const signout = () => {
    localStorage.removeItem("token");
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
