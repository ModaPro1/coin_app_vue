<template>
    <h2 class="main-title">Welcome To <span>Coins App</span></h2>
    <div class="table-container">
      <coins-table/>
    </div>
</template>

<script>
  import CoinsTable from '@/components/CoinsTable.vue';

  export default {
    components: {
      CoinsTable
    }
  }
</script>

<style>
  @import '@/assets/style.css';
</style>