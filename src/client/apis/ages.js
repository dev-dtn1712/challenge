import { baseURL } from '../config/api';

export const getItems = async () => {
  const response = await fetch(`${baseURL}/items`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json();
}

export const getListOfAges = async (item) => {
  const response = await fetch(`${baseURL}/users/age/${item}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json();
}