import axios from 'axios';

export const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    'https://api.smart.arkaanalyzer.com/api',
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});