<template>
  <tr>
    <td>
      <img :src="coinData.image" alt="">
    </td>
    <td>{{ coinData.symbol }}</td>
    <td>{{ coinData.name }}</td>
    <td>$ {{ coinData.current_price.toLocaleString() }}</td>
    <td>$ {{ coinData.market_cap.toLocaleString() }}</td>
    <td class="high-24">$ {{ coinData.high_24h.toFixed(2).toLocaleString() }}</td>
    <td class="low-24">$ {{ coinData.low_24h.toFixed(2).toLocaleString() }}</td>
    <td><router-link :to="coinData.id">More Detials</router-link></td>
  </tr>
</template>

<script>
  export default {
    props: ['coinData']
  }
</script>