<template>
  <div class="dashboard-consumer">
    <h1>{{ $t('dashboardConsumer.title') }}</h1>

    <div class="section">
      <h2>{{ $t('dashboardConsumer.nearbyMeals') }}</h2>
      <!-- Componente para mostrar comidas cercanas -->
      <NearbyMeals />
    </div>

    <div class="section">
      <h2>{{ $t('dashboardConsumer.orderHistory') }}</h2>
      <!-- Componente para mostrar el historial de pedidos -->
      <OrderHistory />
    </div>

    <div class="section">
      <h2>{{ $t('dashboardConsumer.preferences') }}</h2>
      <!-- Componente para configurar preferencias alimentarias -->
      <Preferences />
    </div>

    <div class="action-buttons">
      <button @click="searchFood">{{ $t('dashboardConsumer.searchFoodButton') }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardConsumer',
  components: {
    //NearbyMeals: () => import('./NearbyMeals.vue'), // Componente para mostrar comidas cercanas
    //OrderHistory: () => import('./OrderHistory.vue'), // Componente para historial de pedidos
    //Preferences: () => import('./Preferences.vue')   // Componente para configurar preferencias

  },
  methods: {
    searchFood() {
      this.$router.push('/search-food');
    }
  }
};
</script>

<style scoped>
.dashboard-consumer {
  padding: 20px;
}
.section {
  margin-bottom: 30px;
}
.action-buttons {
  margin-top: 20px;
}
</style>
