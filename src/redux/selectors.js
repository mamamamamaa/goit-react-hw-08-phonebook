import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.filter.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, contactsFilter) => {
    const normalisedFilter = contactsFilter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalisedFilter)
    );
  }
);
export const selectIsContact = createSelector([selectContacts], contacts => {
  return newUser => {
    const normalizedName = newUser.toLowerCase();
    return !contacts.find(user => user.name.toLowerCase() === normalizedName);
  };
});
