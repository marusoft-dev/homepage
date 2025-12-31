<template>
  <div class="terminal-container">
    <div class="terminal-line">
      <span class="prompt-user">marusoft@dev</span><span class="prompt-symbol">:~$</span>
      <span class="command">./manage-popups.sh</span>
    </div>
    <div class="popup-management-container">
      <div class="popup-form-container">
        <h2 class="output-header">[ Popup Details ]</h2>
        <PopupForm :popup-to-edit="selectedPopup" />
      </div>
      <div class="popup-list-container">
        <h2 class="output-header">[ Popup List ]</h2>
        <PopupList @edit="editPopup" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PopupForm from '../components/PopupForm.vue';
import PopupList from '../components/PopupList.vue';
import type { Popup } from '../composables/usePopups';

const selectedPopup = ref<Popup | null>(null);

const editPopup = (popup: Popup) => {
  selectedPopup.value = popup;
};
</script>

<style scoped>
.terminal-container {
  padding: 2rem;
  max-width: 1280px;
  margin: 0 auto;
  font-family: 'SF Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'Courier New', monospace;
}

.terminal-line {
  line-height: 1.5;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prompt-user {
  color: var(--krds-text-username);
  font-weight: bold;
}

.prompt-symbol {
  color: var(--krds-text-primary);
  margin-right: 0.5rem;
}

.command {
  color: var(--krds-text-primary);
  white-space: pre-wrap;
}

.output-header {
  color: var(--krds-blue);
  margin-bottom: 1.5rem;
}

.popup-management-container {
  display: flex;
  padding: 20px;
}

.popup-form-container {
  flex: 1;
  padding-right: 20px;
  border-right: 1px solid var(--krds-blue);
  max-width: 50%;
  box-sizing: border-box;
}

.popup-list-container {
  flex: 1;
  padding-left: 20px;
  max-width: 50%;
  box-sizing: border-box;
}
</style>
