
import React, { useContext } from 'react';
import axios from 'axios';
import { Context as AuthContext } from '../context/AuthContext';

const instance = axios.create({
  //baseURL: 'http://f925f9d7ddf5.ngrok.io/'
  //baseURL: 'http://13.233.138.227:8080/mis-web-app'
  baseURL: 'http://3.109.78.174:8080/puc-certificate-services'
});

//const { state: { token } } = useContext(AuthContext)
instance.interceptors.request.use(
  async config => {
    const token = await localStorage.getItem('token');
    if (token!=null) {
      console.log('token is', token)
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
); 

export default instance;

/*
http://13.233.138.227:8080/mis-web-app
*/