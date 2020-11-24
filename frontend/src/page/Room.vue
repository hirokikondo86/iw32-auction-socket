<template>
  <div class="room">
    <div class="container">
      <form class="form" @submit.prevent="handleBid">
        <label for="bid">Price：</label>
        <input id="bid" type="number" step="1000" min="0" v-model="price" />
        <p class="bidButton"><button type="submit">Bid</button></p>
      </form>
    </div>
    <div class="bidList">
      <ul>
        <li v-for="(bidUser, index) in bidUsers" :key="index">
          {{ bidUser.username }} ¥{{ bidUser.price }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import io from 'socket.io-client';
import config from '../config';

export default {
  name: 'Room',
  components: {},
  data() {
    return {
      socket: '',
      price: '',
      bidUsers: [] // {username, price}
    };
  },
  methods: {
    handleBid: function() {
      this.socket.emit(
        'BID_PRICE',
        this.$route.params.id,
        this.$store.state.authModule.user.name,
        this.price
      );
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
    // TODO: 環境変数から読み込む
    this.socket = io('http://localhost:1991');
    this.socket.emit('join', this.$route.params.id);
    this.socket.on('BID', bidUser => {
      this.bidUsers = [...this.bidUsers, bidUser];
    });
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
.bidList {
  display: flex;
  justify-content: center;
}
</style>
