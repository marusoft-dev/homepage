<template>
  <header class="krds-header">
    <div class="header-container">
      <a href="/" class="logo-link">
        <img src="https://avatars.githubusercontent.com/u/172918290?s=200&v=4" alt="마루소프트 로고" class="logo-image">
        <span class="logo-text">[ marusoft ]</span>
      </a>
      <div class="spacer"></div>
      <nav class="navigation">
        <ul>
          <li><router-link to="/case-studies">[ 구축사례 ]</router-link></li>
          <li><router-link to="/contact">[ 문의하기 ]</router-link></li>
        </ul>
      </nav>
      <!-- The button is removed as per previous request, will be handled again if user asks -->
    </div>
  </header>
</template>

<script setup lang="ts">
// No script logic needed anymore
</script>

<style scoped>
.krds-header {
  padding: 1rem 2rem;
  font-family: 'SF Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'Courier New', monospace;
}

.header-container {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}

.logo-link {
  text-decoration: none;
  display: flex;
  align-items: center;
}

.logo-image {
  height: 32px; /* Adjust size as needed */
  margin-right: 0.5rem;
}

.logo-text {
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--krds-blue);
}

.spacer {
  flex-grow: 1;
}

.navigation ul {
  display: flex;
  list-style: none;
}

.navigation li {
  margin-left: 1.5rem;
}

.navigation a {
  font-weight: 500;
  color: var(--krds-text-primary);
  text-decoration: none;
}

.navigation a:hover {
  color: var(--krds-blue);
}
</style>

