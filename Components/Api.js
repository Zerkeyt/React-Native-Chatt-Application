import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

function Api() {
  useEffect(() => {
    Api.fetchMessages();
  }, []);

const refreshToken = async () => {
  try {
    const token = await AsyncStorage.getItem('refreshToken');
    const response = await axios.post('https://chat-api-with-auth.up.railway.app/auth/token', {
      refreshToken: token,
    });
    const newToken = response.data.token;
    await AsyncStorage.setItem('jwt', newToken);
    return newToken;
  } catch (error) {
    console.error('Error refreshing token:', error);
  }
};

const instance = axios.create();

instance.interceptors.response.use(response => response, async error => {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    const newToken = await refreshToken();
    originalRequest.headers.Authorization = `Bearer ${newToken}`;
    return instance(originalRequest);
  }
  return Promise.reject(error);
});

useEffect(() => {
    fetchMessages();
  }, []);
  
const fetchMessages = async () => {
  const token = await AsyncStorage.getItem('jwt');
  const response = await instance.get('https://chat-api-with-auth.up.railway.app/messages', {
    headers: { Authorization: `Bearer ${token}` }
  });
  console.log(response.data);
 };
}
export default Api