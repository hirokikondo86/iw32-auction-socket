<template>
  <div class="auction">
    <h1 class="title">This is an auction page</h1>
    <form class="form" @submit.prevent="handleBid">
      <label for="bid">Price：</label>
      <input id="bid" type="number" step="1000" min="0" v-model="price" />
      <p class="bidButton"><button type="submit">Bid</button></p>
    </form>
  </div>
</template>

<script>
import io from 'socket.io-client';
import config from '../config';

export default {
  name: 'Auction',
  components: {},
  data() {
    return {
      socket: '',
      price: ''
    };
  },
  methods: {
    handleBid: function() {
      console.log(this.socket);
      this.socket.emit('SEND_MESSAGE', this.price);
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.authModule.status.loggedIn;
    }
  },
  mounted() {
    if (!this.loggedIn) {
      this.$router.push('/');
    }

    this.socket = io(config.VUE_APP_API_URL);

    this.socket.on('MESSAGE', data => {
      this.messages = [...this.messages, data];
    });
  }
};
</script>

<style scoped>
.auction {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
