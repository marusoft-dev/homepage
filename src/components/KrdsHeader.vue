<template>
  <header class="krds-header">
    <div class="header-container">
      <router-link to="/" class="logo-link">
        <img src="/logo.svg" alt="마루소프트 로고" class="logo-image">
        <span class="logo-text">[ marusoft ]</span>
      </router-link>
      <div class="spacer"></div>
      <nav class="navigation">
        <ul>
          <li><router-link to="/case-projects">[ 구축사례 ]</router-link></li>
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

@media (max-width: 600px) {
  .krds-header {
    padding: 0.8rem 1rem; /* Adjust padding for smaller screens */
  }

  .logo-image {
    height: 28px; /* Slightly smaller logo image */
  }

  .logo-text {
    font-size: 1rem; /* Smaller logo text for mobile */
  }

  .navigation li {
    margin-left: 1rem; /* Reduce spacing between nav items */
  }

  .navigation a {
    font-size: 0.8rem; /* Significantly smaller font for nav links on mobile */
  }
}
</style>

