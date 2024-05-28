const API_URL = 'http://localhost:8080/api'; 

export const getAllAttributes = async () => {
  const token = localStorage.getItem('token');

  const response = await fetch(`${API_URL}/attributes`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};

export const getAttributesByJogoId = async (jogoId) => {
  const token = localStorage.getItem('token');

  const response = await fetch(`${API_URL}/jogos/${jogoId}/attributes`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
};

export const createAttribute = async (attribute) => {
  const token = localStorage.getItem('token');

  const response = await fetch(`${API_URL}/jogos/create/attribute`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(attribute),
  });
  return response.json();
};

export const updateAttribute = async (id, attribute) => {
  const token = localStorage.getItem('token');

  const response = await fetch(`${API_URL}/attributes/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(attribute),
  });
  return response.json();
};

export const deleteAttribute = async (id) => {
  const token = localStorage.getItem('token');

  await fetch(`${API_URL}/attributes/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
