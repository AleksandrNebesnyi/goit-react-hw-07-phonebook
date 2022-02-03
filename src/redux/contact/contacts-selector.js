// import { createSelector } from '@reduxjs/toolkit';

// селектор получения части стейта хранящего значение фильтра
export const getFilter = state => state.filter;

// export const getfilteredContacts = state => {
//   const contacts = getContacts(state);
//   const filter = getFilter(state);
//   const normalizedFilter = filter.toLowerCase();

//   if (filter !== '') {
//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(normalizedFilter),
//     );
//   } else {
//     return contacts;
//   }
// };

// Мемоизация функции фильтра контактов на базе композитного селектора

// export const getfilteredContacts = createSelector(
//   [getContacts, getFilter],
//   (contacts, filter) => {
//     const normalizedFilter = filter.toLowerCase();
//     if (filter !== '') {
//       return contacts.filter(({ name }) =>
//         name.toLowerCase().includes(normalizedFilter),
//       );
//     } else {
//       return contacts;
//     }
//   },
// );
