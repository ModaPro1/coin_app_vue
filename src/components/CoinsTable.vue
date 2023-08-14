<template>
  <table>
    <thead>
      <tr>
        <th></th>
        <th>Symbol</th>
        <th>Name</th>
        <th>Current Price</th>
        <th>Market Cap</th>
        <th>24hr High</th>
        <th>24hr Low</th>
        <th><input type="search" placeholder="Search Coins ..." v-model="searchInput"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="isLoading"><td>Loading...</td></tr>
      <coin-row
        v-else
        v-for="coin in output_data"
        :key="coin.id"
        :coinData="coin"
      />
      <tr v-if="notFound"><td>Coin Not Found.</td></tr>

    </tbody>
  </table>
</template>

<script>
  import CoinRow from './CoinRow.vue'

  export default {
    components: {
      CoinRow
    },
    data() {
      return {
        isLoading: true,
        notFound: false,
        main_data: null,
        output_data: null,
        searchInput: ''
      }
    },
    mounted() {
      fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc")
      .then(res => res.json())
      .then(data => {
        if(!data.error) {
          this.isLoading = false
          this.main_data = data
          this.output_data = data
        }
      })
    },
    watch: {
      searchInput(value) {
        let result = this.main_data.filter(coin => coin.id.startsWith(value))
        if(result.length > 0) {
          this.notFound = false
          this.output_data = result
        }else {
          this.output_data = []
          this.notFound = true
        }
      },
    }
  }
</script>