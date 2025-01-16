import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async (page = 1, limit = 10) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/posts`, {
      params: {
        _page: page,
        _limit: limit,
      },
    });
    return response.data;
  } catch {
    throw new Error('Failed to fetch posts. Please try again later.');
  }
};

export const fetchPost = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/posts/${id}`);
    return response.data;
  } catch {
    throw new Error(`Failed to fetch post with id ${id}. Please try again later.`);
  }
};

export const fetchUser = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
    return response.data;
  } catch {
    throw new Error(
      `Failed to fetch user with id ${userId}. Please try again later.`
    );
  }
};
