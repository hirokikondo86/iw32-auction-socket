import axios from 'axios';
import config from '../config';

const API_URL = config.VUE_APP_API_URL + 'auth/';

class AuthService {
  signin(user) {
    return axios
      .post(API_URL + 'signin', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.data.accessToken) {
          localStorage.setItem(
            'token',
            JSON.stringify(response.data.data.accessToken)
          );
        }
        return response.data.data;
      });
  }

  logout() {
    localStorage.removeItem('token');
  }

  signup() {
    return axios
      .post(API_URL + 'signup', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.data.accessToken) {
          localStorage.setItem(
            'token',
            JSON.stringify(response.data.data.accessToken)
          );
        }
        return response.data.data;
      });
  }
}

export default new AuthService();
