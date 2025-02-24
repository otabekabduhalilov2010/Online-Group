import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import { useAuthState } from 'react-firebase-hooks/auth'; // Добавлен импорт useAuthState
import { Context } from '../../main';

const AppRoute = () => {
  const { auth } = useContext(Context); // Получаем auth из контекста
  const [user] = useAuthState(auth); // Используем useAuthState для получения состояния пользователя

  return user ? (
    <Routes>
      {privateRoutes.map(({ path, Component }) => (
        <Route path={path} element={<Component />} key={path} />
      ))}
      {/* Перенаправление всех неизвестных маршрутов на чат */}
      <Route path="*" element={<Navigate to={CHAT_ROUTE} />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route path={path} element={<Component />} key={path} />
      ))}
      {/* Перенаправление всех неизвестных маршрутов на логин */}
      <Route path="*" element={<Navigate to={LOGIN_ROUTE} />} />
    </Routes>
  );
};

export default AppRoute;
