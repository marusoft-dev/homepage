<script setup lang="ts">
import KrdsHeader from './components/KrdsHeader.vue';
import KrdsFooter from './components/KrdsFooter.vue';
</script>

<template>
  <div id="wrapper">
    <KrdsHeader />
    <main>
      <router-view />
    </main>
    <KrdsFooter />
  </div>
</template>

<style scoped>
#wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f9f9f9;
}

main {
  flex-grow: 1;
}
</style>


