<template>
  <form @submit.prevent="handleSignin">
    <div>
      <label for="email">Email：</label>
      <input id="email" type="text" v-model="user.email" />
    </div>
    <div>
      <label for="password">Password：</label>
      <input id="passowrd" type="password" v-model="user.password" />
    </div>
    <p class="signinButton"><button type="submit">Signin</button></p>
  </form>
</template>

<script>
import axios from 'axios';
import User from '../model/User';

export default {
  name: 'SigninForm',
  data() {
    return {
      user: new User('', '', '')
    };
  },
  methods: {
    handleSignin: function() {
      if (this.user.email && this.user.password) {
        this.$store.dispatch('authModule/signin', this.user).then(
          () => {
            this.$router.push('/');
          },
          error => {
            console.log(error.message);
          }
        );
      }
    }
  }
};
</script>

<style scoped></style>
