'use client';

import { createContext, useContext } from 'react';
import { auth } from './auth';

// Создаем контекст с начальным значением
export const AuthContext = createContext({ auth });

// Хук для использования контекста аутентификации
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth должен использоваться внутри AuthProvider');
  }
  return context;
}

// Провайдер контекста аутентификации
export function AuthProvider({ children }) {
  // В реальном приложении здесь была бы логика авторизации
  const value = { auth };
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
} 