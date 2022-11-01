import { actionTypes } from './constants';
import { combineReducers } from 'redux';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.addStorageContacts: {
      return {
        ...state,
        contacts: action.payload.contacts,
      };
    }
    case actionTypes.addContacts: {
      return {
        ...state,
        contacts: [...action.payload.contacts],
      };
    }
    case actionTypes.deleteContacts: {
      return {
        ...state,
        contacts: state.contacts.filter(
          ({ name }) => name !== action.payload.name
        ),
      };
    }
    default: {
      return state;
    }
  }
};
const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.setFilter: {
      return {
        ...state,
        filter: action.payload.filter,
      };
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
