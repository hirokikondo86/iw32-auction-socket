<template>
  <Header />
  <Nav />
  <router-view />
</template>

<script>
import Header from './component/Header';
import Nav from './component/Nav';
export default {
  components: {
    Header,
    Nav
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
