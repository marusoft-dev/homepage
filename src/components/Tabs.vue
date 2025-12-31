<template>
  <div class="tabs-container">
    <div class="tab-list" role="tablist">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['tab-button', { 'active': activeTab === index }]"
        role="tab"
        :aria-selected="activeTab === index"
        @click="activeTab = index"
      >
        {{ tab.title }}
      </button>
    </div>
    <div class="tab-panels">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        v-show="activeTab === index"
        class="tab-panel"
        role="tabpanel"
      >
        <slot :name="`tab-panel-${index}`"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  tabs: { title: string }[];
}>();

const activeTab = ref(0);
</script>

<style scoped>
.tabs-container {
  width: 100%;
}

.tab-list {
  display: flex;
  border-bottom: 2px solid var(--krds-gray-light);
}

.tab-button {
  padding: 1rem 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: var(--krds-text-secondary);
  position: relative;
  bottom: -2px;
  border-bottom: 2px solid transparent;
}

.tab-button.active {
  color: var(--krds-blue);
  border-bottom-color: var(--krds-blue);
}

.tab-panels {
  padding-top: 2rem;
}

.tab-panel {
  color: var(--krds-text-secondary);
}
</style>
