<template>
  <nav class="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/auction">Auction</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Nav'
};
</script>

<style scoped>
.nav {
  padding: 30px;
  text-align: center;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
}

.nav a.router-link-exact-active {
  color: #42b983;
}
</style>
