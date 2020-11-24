import AuthService from '../service/authService';

// ここでリロード対策も兼ねる
const token = JSON.parse(localStorage.getItem('token'));
const initialState = token
  ? { status: { loggedIn: true }, user: { name: '', email: '' } }
  : { status: { loggedIn: false }, user: { name: '', email: '' } };

export const authModule = {
  namespaced: true,
  state: initialState,
  actions: {
    signin({ commit }, user) {
      return AuthService.signin(user).then(
        user => {
          console.log(user)
          commit('signinSuccess', user);
          return Promise.resolve(user);
        },
        error => {
          commit('signinFailure');
          return Promise.reject(error);
        }
      );
    },
    logout({ commit }) {
      AuthService.logout();
      commit('logout');
    },
    signup({ commit }, user) {
      return AuthService.signup(user).then(
        user => {
          commit('signinSuccess', user);
          return Promise.resolve(user);
        },
        error => {
          commit('signinFailure');
          return Promise.reject(error);
        }
      );
    }
  },
  mutations: {
    signinSuccess(state, user) {
      state.status.loggedIn = true;
      state.user.name = user.username;
      state.user.email = user.email;
    },
    signinFailure(state) {
      state.status.loggedIn = false;
      state.user.name = null;
      state.user.email = null;
    },
    logout(state) {
      state.status.loggedIn = false;
      state.user.name = null;
      state.user.email = null;
    }
  }
};
