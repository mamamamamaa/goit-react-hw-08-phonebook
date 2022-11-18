import { setFilter } from '../../redux/contacts/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import styledInput from '../ContactForm/ContactForm.module.scss';
import styledButton from '../UserMenu/UserMenu.module.scss';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <div>
      <label>
        Find contacts by name
        <input
          className={styledInput.input}
          placeholder="..."
          type="text"
          name="search"
          onChange={handleFilterChange}
        />
      </label>
      <ul className="flex items-center">
        {isLoading && <h3>Loading....</h3>}
        {error && <h3>{error}</h3>}
        {contacts.length !== 0
          ? contacts.map(({ id, name, number }) => (
              <li
                key={id}
                className="flex flex-col bg-white shadow-2xl w-auto h-32 p-7 rounded-2xl"
              >
                <span>{name}</span> <span> {number}</span>
                <button
                  type="button"
                  className={styledButton.button}
                  onClick={() => dispatch(deleteContact(id))}
                >
                  Delete
                </button>
              </li>
            ))
          : ''}
      </ul>
    </div>
  );
};
