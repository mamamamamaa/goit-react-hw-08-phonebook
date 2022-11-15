import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://636d6bd6b567eed48ac159b5.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const contacts = await axios.get('/contacts');
      return contacts.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.messages);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phoneNumber }, thunkAPI) => {
    try {
      const contacts = await axios.post('/contacts', { name, phoneNumber });
      return contacts.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.messages);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const contacts = await axios.delete(`/contacts/${contactId}`);
      console.log(contacts.data);
      return contacts.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.messages);
    }
  }
);
