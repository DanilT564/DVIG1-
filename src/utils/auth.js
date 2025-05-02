// Простая заглушка для аутентификации, чтобы исправить ошибку сборки
export const auth = {
  user: null,
  isAuthenticated: false,
};

export function useAuth() {
  return {
    auth,
  };
} 