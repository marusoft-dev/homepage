import { ref, watch } from 'vue';

export interface Popup {
  id: number;
  title: string;
  content: string;
  position: 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  startTime?: string;
  endTime?: string;
}

const STORAGE_KEY = 'marusoft_popups';

const popups = ref<Popup[]>(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'));

watch(popups, (newPopups) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newPopups));
}, { deep: true });

export function usePopups() {
  const addPopup = (popup: Omit<Popup, 'id'>) => {
    const newId = popups.value.length > 0 ? Math.max(...popups.value.map(p => p.id)) + 1 : 1;
    popups.value.push({ ...popup, id: newId });
  };

  const updatePopup = (updatedPopup: Popup) => {
    const index = popups.value.findIndex(p => p.id === updatedPopup.id);
    if (index !== -1) {
      popups.value[index] = updatedPopup;
    }
  };

  const deletePopup = (id: number) => {
    popups.value = popups.value.filter(p => p.id !== id);
  };

  return {
    popups,
    addPopup,
    updatePopup,
    deletePopup,
  };
}
