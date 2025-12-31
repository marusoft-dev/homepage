<template>
  <div class="popup-overlay" v-if="props.isVisible" :style="overlayStyle">
    <div :class="['popup-card', props.position]">
      <div class="popup-header">
        <h3>[ {{ props.title }} ]</h3>
        <button @click="closePopup" class="close-button">X</button>
      </div>
      <div class="popup-content">
        <p>{{ props.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue';

const props = defineProps<{
  title: string;
  content: string;
  isVisible: boolean;
  position: 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}>();

const emit = defineEmits(['close']); // Removed 'closeForToday'

const closePopup = () => {
  emit('close');
};

const overlayStyle = computed(() => {
  if (props.position === 'center') {
    return {
      justifyContent: 'center',
      alignItems: 'center',
    };
  } else {
    return {};
  }
});
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75); /* Slightly darker overlay */
  display: flex;
  z-index: 1000;
  font-family: 'SF Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'Courier New', monospace;
  transition: opacity 0.3s ease;
  justify-content: flex-start;
  align-items: flex-start;
}

.popup-card {
  background-color: #1a1a1a;
  color: var(--krds-text-primary);
  border: 2px solid var(--krds-blue);
  box-shadow: 0 0 20px rgba(0, 191, 255, 0.6);
  padding: 1.5rem 2rem;
  width: 90%;
  max-width: 550px;
  position: relative;
  z-index: 1001;
  margin: 0;
  border-radius: 4px;
}

/* Positioning styles for the card within the overlay */
.popup-card.center {
  /* No specific styles here, handled by popup-overlay's flex for 'center' */
}
.popup-card.top-left {
  position: absolute;
  top: 20px;
  left: 20px;
}
.popup-card.top-right {
  position: absolute;
  top: 20px;
  right: 20px;
}
.popup-card.bottom-left {
  position: absolute;
  bottom: 20px;
  left: 20px;
}
.popup-card.bottom-right {
  position: absolute;
  bottom: 20px;
  right: 20px;
}

.popup-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;
  border-bottom: 1px dashed var(--krds-blue);
  padding-bottom: 0.8rem;
}

.popup-header h3 {
  margin: 0;
  color: var(--krds-blue);
  font-weight: bold;
  font-size: 1.4rem;
  text-shadow: 0 0 10px rgba(0, 191, 255, 0.7);
}

.close-button {
  background: none;
  border: none;
  color: #ff6b6b;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0 0.5rem;
  transition: color 0.2s ease;
  font-family: inherit;
  line-height: 1;
}

.close-button:hover {
  color: #ff0000;
  text-shadow: 0 0 8px #ff0000;
}

.popup-content {
  margin-bottom: 1.5rem;
  line-height: 1.7;
  font-size: 1rem;
  color: #e0e0e0;
}

.popup-content p {
  margin: 0;
  white-space: pre-wrap;
  word-break: break-word;
}
</style>
