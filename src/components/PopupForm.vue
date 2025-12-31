<template>
  <form @submit.prevent="savePopup" class="terminal-form">
    <div class="form-group">
      <label for="popup-title">Title:</label>
      <input type="text" id="popup-title" v-model="editablePopup.title" class="terminal-input" />
    </div>
    <div class="form-group">
      <label for="popup-content">Content:</label>
      <textarea id="popup-content" v-model="editablePopup.content" class="terminal-input"></textarea>
    </div>
    <div class="form-group">
      <label for="popup-position">Position:</label>
      <select id="popup-position" v-model="editablePopup.position" class="terminal-input">
        <option value="center">Center</option>
        <option value="top-left">Top Left</option>
        <option value="top-right">Top Right</option>
        <option value="bottom-left">Bottom Left</option>
        <option value="bottom-right">Bottom Right</option>
      </select>
    </div>
    <div class="form-group">
      <label for="popup-start-time">Start Time:</label>
      <input type="datetime-local" id="popup-start-time" v-model="editablePopup.startTime" class="terminal-input" />
    </div>
    <div class="form-group">
      <label for="popup-end-time">End Time:</label>
      <input type="datetime-local" id="popup-end-time" v-model="editablePopup.endTime" class="terminal-input" />
    </div>
    <div class="button-group">
      <button type="submit" class="terminal-button">{{ isEditing ? '[ Update ]' : '[ Save ]' }}</button>
      <button type="button" @click="newPopup" v-if="isEditing" class="terminal-button">[ New ]</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, watch, defineProps } from 'vue';
import { usePopups, Popup } from '../composables/usePopups';

const props = defineProps<{
  popupToEdit: Popup | null;
}>();

const { addPopup, updatePopup } = usePopups();

const editablePopup = ref<Omit<Popup, 'id'> & { id?: number }>({
  title: '',
  content: '',
  position: 'center',
  startTime: '',
  endTime: '',
});

const isEditing = ref(false);

watch(() => props.popupToEdit, (newVal) => {
  if (newVal) {
    editablePopup.value = { ...newVal };
    isEditing.value = true;
  } else {
    newPopup();
  }
});

const savePopup = () => {
  if (isEditing.value && editablePopup.value.id) {
    updatePopup(editablePopup.value as Popup);
  } else {
    addPopup(editablePopup.value);
  }
  newPopup();
};

const newPopup = () => {
  editablePopup.value = {
    title: '',
    content: '',
    position: 'center',
    startTime: '',
    endTime: '',
  };
  isEditing.value = false;
};
</script>

<style scoped>
.form-group {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}

.form-group label {
  color: var(--krds-text-primary);
  width: 120px;
  flex-shrink: 0;
}

.terminal-input {
  background-color: #e0e0e0;
  border: 1px solid #ccc;
  padding: 0.5rem;
  font-family: inherit;
  color: #333;
  flex-grow: 1;
  width: 100%;
}

textarea.terminal-input {
  min-height: 100px;
  resize: vertical;
}

.button-group {
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
}

.terminal-button {
  background: none;
  border: 1px solid var(--krds-blue);
  color: var(--krds-blue);
  padding: 0.5rem 1rem;
  font-family: inherit;
  cursor: pointer;
  font-weight: bold;
}

.terminal-button:hover {
  background-color: var(--krds-blue);
  color: white;
}
</style>
