<template>
  <header class="header">
    <router-link class="signin" to="/signin" v-if="!loggedIn">Signin</router-link>
    <p class="logout" v-else @click="handleLogout">Logout</p>
  </header>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    loggedIn() {
      return this.$store.state.authModule.status.loggedIn;
    }
  },
  methods: {
    handleLogout: function() {
      this.$store.dispatch('authModule/logout').then(
        () => {
          this.$router.push('/');
        },
        error => {
          console.log(error.message);
        }
      );
    }
  }
};
</script>

<style scoped>
.header {
  height: 48px;
  background-color: #42b983;
  padding: 0 16px;
}
.signin {
  display: block;
  text-align: right;
  color: azure;
  text-decoration: none;
}
.logout {
  margin: 0;
  text-align: right;
  color: azure;
  cursor: pointer;
}
</style>
