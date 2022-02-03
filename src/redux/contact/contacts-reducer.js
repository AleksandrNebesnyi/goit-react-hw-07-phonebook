import { createReducer } from '@reduxjs/toolkit'; // Импорт функции создания редюсера
import { changeFilter } from './contacts-actions';

// Создание редюсера для фильтра в контактах
const filterReduser = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

// Экспорт  редюсера
export default filterReduser;
