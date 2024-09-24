<template>
  <div class="dashboard-chef">
    <h1>{{ $t('dashboardChef.title') }}</h1>

    <div class="section">
      <h2>{{ $t('dashboardChef.profile') }}</h2>
      <!-- Componente para mostrar el perfil del cocinero -->
      <ChefProfile />
    </div>

    <div class="section">
      <h2>{{ $t('dashboardChef.menus') }}</h2>
      <!-- Componente para gestionar menús -->
      <ManageMenus />
    </div>

    <div class="section">
      <h2>{{ $t('dashboardChef.orders') }}</h2>
      <!-- Componente para gestionar pedidos -->
      <ManageOrders />
    </div>

    <div class="section">
      <h2>{{ $t('dashboardChef.recipes') }}</h2>
      <!-- Componente para compartir recetas -->
      <ShareRecipes />
    </div>

    <div class="action-buttons">
      <button @click="publishMenu">{{ $t('dashboardChef.publishMenuButton') }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardChef',
  components: {
    //ChefProfile: () => import('./ChefProfile.vue'),    // Componente para mostrar perfil
    //ManageMenus: () => import('./ManageMenus.vue'),    // Componente para gestionar menús
    //ManageOrders: () => import('./ManageOrders.vue'),  // Componente para gestionar pedidos
    //ShareRecipes: () => import('./ShareRecipes.vue')   // Componente para compartir recetas
  },
  methods: {
    publishMenu() {
      this.$router.push('/create-menu');
    }
  }
};
</script>

<style scoped>
.dashboard-chef {
  padding: 20px;
}
.section {
  margin-bottom: 30px;
}
.action-buttons {
  margin-top: 20px;
}
</style>
