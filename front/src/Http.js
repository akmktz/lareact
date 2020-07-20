import axios from 'axios';
import store from './store';
import * as actions from './store/actions';

const token = localStorage.getItem('access_token');
axios.defaults.headers.common.Authorization = `Bearer ${token}`;
axios.defaults.baseURL = (process.env.APP_API_URL || 'http://laravel.local')   + '/api/'; //TODO:env

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      store.dispatch(actions.authLogout());
    }
    return Promise.reject(error);
  },
);

export default axios;
