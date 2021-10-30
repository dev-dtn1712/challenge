import { baseURL } from '../config/api';

export const getUsers = async () => {
  const response = await fetch(`${baseURL}/users`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return await response.json();
}