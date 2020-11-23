<template>
  <div class="signin">
    <h1 class="title">This is a signin page</h1>
    <div>
      <SigninForm class="form" />
    </div>
  </div>
</template>

<script>
import SigninForm from '@/component/SigninForm.vue';

export default {
  name: 'Signin',
  components: {
    SigninForm
  },
  computed: {
    loggedIn() {
      return this.$store.state.authModule.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.signin {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
