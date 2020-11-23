import AuthService from '../service/authService';

// ここでリロード対策も兼ねる
const token = JSON.parse(localStorage.getItem('token'));
const initialState = token
  ? { status: { loggedIn: true } }
  : { status: { loggedIn: false } };

export const authModule = {
  namespaced: true,
  state: initialState,
  actions: {
    signin({ commit }, user) {
      return AuthService.signin(user).then(
        user => {
          commit('signinSuccess');
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
          commit('signinSuccess');
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
    },
    signinFailure(state) {
      state.status.loggedIn = false;
    },
    logout(state) {
      state.status.loggedIn = false;
    }
  }
};
