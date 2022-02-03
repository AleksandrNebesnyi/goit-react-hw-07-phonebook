import { createReducer, combineReducers } from '@reduxjs/toolkit'; // Импорт функции создания редюсера
import actions from './contacts-actions';

// Создание редюсера для массива items в контактах (добавление контакта и удаление)
// const items = createReducer([], {
//   [actions.addContact]: (state, { payload }) => [payload, ...state],
//   [actions.deleteContact]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// });

// Создание редюсера для фильтра в контактах
const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

// Экспорт всех редюсеров через комбайн
export default combineReducers({ filter });

// Создание редюсера для массива items в контактах (фетч всех контактов, добавление и удаление контакта)
// const items = createReducer([], {
//   [actions.fetchContactsSuccess]: (_, { payload }) =>
//     payload.sort((a, b) => a.name.localeCompare(b.name)),
//   [actions.addContactSuccess]: (state, { payload }) => [payload, ...state],
//   [actions.deleteContactSuccess]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// });
