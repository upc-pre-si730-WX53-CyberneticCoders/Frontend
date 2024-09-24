<!--<template>
  <div id="app">
    <header>
      <h1>{{ $t('welcome.title') }}</h1>
    </header>

    <main>
      <div class="action-buttons">
        <button @click="navigateTo('consumer-dashboard')" class="p-button p-component">
          {{ $t('welcome.consumerButton') }}
        </button>
        <button @click="navigateTo('chef-dashboard')" class="p-button p-component">
          {{ $t('welcome.chefButton') }}
        </button>
      </div>
    </main>

    <footer>
      <p>{{ $t('welcome.footerText') }}</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    navigateTo(route) {
      this.$router.push({ name: route });
    }
  }
};
</script>

<style scoped>
#app {
  text-align: center;
  padding: 20px;
}

.action-buttons {
  margin-top: 50px;
}

.action-buttons button {
  margin: 10px;
}
</style>
-->

<template>
  <div id="app">
    <p-panel header="Sabores Cercanos" class="app-panel">
      <div class="action-buttons">
        <Button label="Customers" class="p-button-rounded p-button-success" @click="navigateTo('consumer-dashboard')" />
        <Button label="Chefs" class="p-button-rounded p-button-warning" @click="navigateTo('chef-dashboard')" />
      </div>
    </p-panel>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    navigateTo(route) {
      this.$router.push({ name: route });
    }
  }
};
</script>

<style scoped>
.app-panel {
  margin: 50px;
  text-align: center;
}

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

p-panel {
  padding: 2rem;
}
</style>
