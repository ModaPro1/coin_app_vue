<template>
  <div class="card" v-if="!isLoading && !notFound">
    <router-link to="/" class="back-button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"/> </g> </svg>
    </router-link>
    <img :src="coinData.image.small" alt="">
    <h3>{{coinData.name}}</h3>
    <div class="details">
      <div class="detail">
        <span class="label">Current Price:</span> $ {{ coinData.market_data.current_price.usd.toLocaleString() }}
      </div>
      <div class="detail">
        <span class="label">Market Cap:</span> $ {{ coinData.market_data.market_cap.usd.toLocaleString() }}
      </div>
      <div class="detail">
        <span class="label">24hr High:</span> <span class="green">$ {{ coinData.market_data.high_24h.usd.toLocaleString()}}</span>
      </div>
      <div class="detail">
        <span class="label">24hr Low:</span> <span class="red">$ {{ coinData.market_data.low_24h.usd.toLocaleString()}}</span>
      </div>
      <div class="detail">
        <span class="label">Website:</span> <a :href="coinData.links.homepage[0]" target="_blank">{{ coinData.links.homepage[0] }}</a>
      </div>
    </div>
  </div>
  <div class="card" v-if="isLoading">
    <h3>Loading...</h3>
  </div>
  <div class="card" v-if="!isLoading && notFound">
    <router-link to="/" class="back-button">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"/> </g> </svg>
    </router-link>
    <h3>Coin Not Found.</h3>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        coinData: null,
        isLoading: true,
        notFound: false
      }
    },
    mounted() {
      let coinId = this.$route.params.coinId
      fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`)
      .then(res => res.json())
      .then(data => {
        if(data.error == "coin not found") {
          this.isLoading = false
          this.notFound = true
        }else {
          this.coinData = data
          this.isLoading = false
        }
      })
    }
  }
</script>

<style>
  @import '@/assets/style.css';
</style>