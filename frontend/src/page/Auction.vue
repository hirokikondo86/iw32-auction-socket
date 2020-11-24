<template>
  <div class="auction">
    <h1 class="title">This is an auction page</h1>
    <ul>
      <li><router-link to="/auction/room/1">Room1</router-link></li>
      <li><router-link to="/auction/room/2">Room2</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Auction'
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
