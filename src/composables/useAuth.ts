import { ref, readonly } from 'vue';

const isAuthenticated = ref(false);

export function useAuth() {
  const login = () => {
    isAuthenticated.value = true;
  };

  const logout = () => {
    isAuthenticated.value = false;
  };

  return {
    isAuthenticated: readonly(isAuthenticated),
    login,
    logout,
  };
}
