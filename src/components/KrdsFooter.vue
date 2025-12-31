<template>
  <footer class="krds-footer">
    <div class="footer-container">
      <div class="copyright">
        &copy; 2025 마루소프트.
      </div>
      <div class="footer-links">
        <router-link to="/terms">[ 이용약관 ]</router-link>
        <router-link to="/privacy">[ 개인정보처리방침 ]</router-link>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// No script logic needed
</script>

<style scoped>
.krds-footer {
  padding: 1rem 2rem;
  font-family: 'SF Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'Courier New', monospace;
  color: var(--krds-text-secondary);
  font-size: 0.8rem;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}

.footer-links a {
  color: var(--krds-text-secondary);
  text-decoration: none;
  margin-left: 1.5rem;
}

.footer-links a:hover {
  color: var(--krds-blue);
}
</style>
