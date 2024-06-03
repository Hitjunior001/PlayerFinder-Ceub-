import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);

  const api = "http://localhost:8080";


  useEffect(() => {
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
            setUser(null);
          }
        } catch (error) {
          console.error("Erro ao verificar login:", error);
          setUser(null);
        }
      }
      setLoading(false);
    };

    checkLoggedIn();
  }, []);

  const signin = async (email, senha, keepLogin) => {
    try {
      const response = await fetch(`${api}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: email,
          password: senha,
          keepLogin: keepLogin,
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


  //TODOS OS FORMATOS DEVEM SEGUIR ESSE A SEGUIR!!!!
  const signup = async (usuario, nome, email, senha, dataNascimento, estado) => {
    try {
      const response = await fetch(`${api}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: usuario,
          dataNascimento: dataNascimento,
          nacionalidade: "Brasileiro(a)",
          imagemPerfil: "ANT DEGEMON",
          estado: estado,
          nomeCompleto: nome,
          email: email,
          password: senha,
        }),
      });
  
      return response;
    } catch (err) {
      console.error("Erro ao fazer requisição de cadastro:", err);
      throw new Error("Erro ao fazer requisição de cadastro");
    }
  };
    //TODOS OS FORMATOS DEVEM SEGUIR ESSE ACIMA!!!!



  const signout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const updateUser = async (userData) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${api}/perfil`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(userData)
      });
  
      if (response.ok) {
        return true;
      } else {
        const errorMessage = await response.text();
        throw new Error(`Erro ao atualizar perfil: ${errorMessage}`);
      }
    } catch (error) {
      throw new Error(`Erro ao atualizar perfil: ${error.message}`);
    }
  };
  
  const deleteUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${api}/perfil`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
  
      if (response.ok) {
        signout()
        console.log("Perfil deletado com sucesso!");
        return true;
      } else {
        console.error("Erro ao deletar perfil:", response.statusText);
        return false;
      }
    } catch (error) {
      console.error("Erro ao deletar perfil:", error);
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, signed: !!user, signin, signout, signup, updateUser, deleteUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
