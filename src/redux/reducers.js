import { actionTypes } from './constants';
import { combineReducers } from 'redux';

const initialContactsState = [];
const initialFilterState = '';

const contactsReducer = (state = initialContactsState, action) => {
  switch (action.type) {
    case actionTypes.addStorageContacts: {
      return [...action.payload.contacts];
    }
    case actionTypes.addContact: {
      return [...state, action.payload];
    }
    case actionTypes.deleteContact: {
      return state.filter(({ name }) => name !== action.payload.name);
    }
    default: {
      return state;
    }
  }
};
const filterReducer = (state = initialFilterState, action) => {
  switch (action.type) {
    case actionTypes.setFilter: {
      return action.payload.filter;
    }
    default: {
      return state;
    }
  }
};

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
