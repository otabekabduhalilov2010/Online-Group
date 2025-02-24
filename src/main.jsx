import { createContext } from 'react';
import { createRoot } from 'react-dom/client';
import firebase from 'firebase/compat/app'; // Используем совместимость
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import App from './App.jsx';

// Конфигурация Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCXKd158nRrAWgC19N0fjt8qqSpYFGt2p8",
  authDomain: "online-group-sd.firebaseapp.com",
  projectId: "online-group-sd",
  storageBucket: "online-group-sd.appspot.com", // ✅ Исправлено
  messagingSenderId: "914123654980",
  appId: "1:914123654980:web:cc01f3f12bf8a5d53d7911",
  measurementId: "G-040GLWSYE0"
};

// Инициализация Firebase (проверяем, чтобы не инициализировать повторно)
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Создаем контекст
export const Context = createContext({
  firebase,
  auth: firebase.auth(),
  firestore: firebase.firestore(),
});

// Рендер приложения
createRoot(document.getElementById('root')).render(
  <Context.Provider value={Context._currentValue}>
    <App />
  </Context.Provider>
);
