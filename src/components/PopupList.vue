<template>
  <div class="output">
    <div v-for="popup in popups" :key="popup.id" class="popup-item">
      <div class="popup-details">
        <strong>{{ popup.title }}</strong>
        <div v-if="popup.startTime || popup.endTime" class="time-info">
          <span>{{ formatTime(popup.startTime) }} ~ {{ formatTime(popup.endTime) }}</span>
        </div>
      </div>
      <div class="button-group">
        <button @click="editPopup(popup)" class="terminal-button">[ Edit ]</button>
        <button @click="deletePopup(popup.id)" class="terminal-button delete-button">[ Delete ]</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePopups } from '../composables/usePopups';
import type { Popup } from '../composables/usePopups';

const { popups, deletePopup } = usePopups();
const emit = defineEmits(['edit']);

const editPopup = (popup: Popup) => {
  emit('edit', popup);
};

const formatTime = (time?: string) => {
  if (!time) return 'N/A';
  return new Date(time).toLocaleString();
};
</script>

<style scoped>
.output {
  color: var(--krds-text-secondary);
}

.popup-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px dashed var(--krds-blue-light);
}

.popup-details strong {
  color: var(--krds-text-primary);
}

.time-info {
  font-size: 0.8em;
  color: #666;
}

.button-group {
  display: flex;
  gap: 0.5rem;
}

.terminal-button {
  background: none;
  border: 1px solid var(--krds-blue);
  color: var(--krds-blue);
  padding: 0.2rem 0.5rem;
  font-family: inherit;
  cursor: pointer;
  font-weight: bold;
}

.terminal-button:hover {
  background-color: var(--krds-blue);
  color: white;
}

.delete-button {
  border-color: #ff6b6b;
  color: #ff6b6b;
}

.delete-button:hover {
  background-color: #ff6b6b;
  color: white;
}
</style>
