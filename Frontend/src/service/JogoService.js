const API_URL = 'http://localhost:8080/api/jogos';

export const getAllJogos = async () => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/list`,{                
    headers: {
    Authorization: `Bearer ${token}`,
},});
const data = await response.json();
return data
};

export const getJogoById = async (id) => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/${id}`,{                headers: {
    Authorization: `Bearer ${token}`,
},});
  return response.json();
};

export const createJogo = async (jogo) => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/create/jogo`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,

      'Content-Type': 'application/json',
    },
    body: JSON.stringify(jogo),
  });
  return response.json();
};

export const createAttribute = async (attribute) => {
  const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}/create/attribute`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(attribute),
    });
    return response.json();
  };

export const updateJogo = async (id, jogo) => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(jogo),
  });
  return response.json();
};

export const deleteJogo = async (id) => {
  const token = localStorage.getItem("token");

  await fetch(`${API_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
  },
    method: 'DELETE',
  });
};
