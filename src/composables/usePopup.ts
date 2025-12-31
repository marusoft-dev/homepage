import { reactive, readonly, watch } from 'vue';

interface PopupState {
  isEnabled: boolean;
  title: string;
  content: string;
  position: 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

const STORAGE_KEY = 'marusoft_popup_state';

// Initialize with data from localStorage or default values
const initialPopupState: PopupState = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

const popupState = reactive<PopupState>({
  isEnabled: initialPopupState.isEnabled ?? false,
  title: initialPopupState.title ?? '알림',
  content: initialPopupState.content ?? '중요한 공지입니다!',
  position: initialPopupState.position ?? 'center', // Default position
});

// Watch for changes in popupState and save to localStorage
watch(popupState, (newState) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
}, { deep: true });

export function usePopup() {
  const updatePopup = (
    newTitle: string,
    newContent: string,
    newIsEnabled: boolean,
    newPosition: 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  ) => {
    popupState.title = newTitle;
    popupState.content = newContent;
    popupState.isEnabled = newIsEnabled;
    popupState.position = newPosition;
  };

  return {
    popupState: readonly(popupState),
    updatePopup,
  };
}
