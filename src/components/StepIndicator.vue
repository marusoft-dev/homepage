<template>
  <div class="step-indicator-container">
    <div
      v-for="(step, index) in steps"
      :key="index"
      class="step"
    >
      <div class="step-circle">
        <span>{{ index + 1 }}</span>
      </div>
      <div class="step-label">{{ step.label }}</div>
      <div v-if="index < steps.length - 1" class="step-connector"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  steps: { label: string }[];
}>();
</script>

<style scoped>
.step-indicator-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100px;
  position: relative;
}

.step-circle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: var(--krds-surface);
  border: 2px solid var(--krds-blue);
  color: var(--krds-blue);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  z-index: 1;
}

.step-label {
  font-weight: 500;
  color: var(--krds-text-secondary);
  font-size: 0.9rem;
}

.step-connector {
  position: absolute;
  top: 23px;
  left: 50%;
  width: 100%;
  height: 2px;
  background-color: var(--krds-blue);
  transform: translateX(50%);
  z-index: 0;
}

/* Adjust last step to not have a connector */
.step:last-child .step-connector {
  display: none;
}
</style>
