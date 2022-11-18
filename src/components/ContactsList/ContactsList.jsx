import { setFilter } from '../../redux/contacts/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import formStyle from '../FormStyles/FormStyles.module.scss';
import ownStyle from './ContactsList.module.scss';
import {
  MdDeleteForever,
  MdOutlineDriveFileRenameOutline,
} from 'react-icons/md';
import { BsTelephoneForward } from 'react-icons/bs';
import { Loader } from '../Loaders/Loader';

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
      <label className="flex flex-col items-center">
        Find contacts by name
        <input
          className={formStyle.input}
          placeholder="..."
          type="text"
          name="search"
          onChange={handleFilterChange}
        />
      </label>
      <ul className="flex items-center justify-center mt-10 gap-9 flex-wrap">
        <Loader isOpen={isLoading} />
        {error && <h3>{error}</h3>}
        {contacts.length !== 0
          ? contacts.map(({ id, name, number }) => (
              <li key={id} className={ownStyle.contactCard}>
                <span className="flex items-center text-2xl">
                  <MdOutlineDriveFileRenameOutline size={20} className="mr-4" />{' '}
                  {name}
                </span>
                <span className="flex items-center text-2xl">
                  {' '}
                  <BsTelephoneForward size={20} className="mr-4" /> {number}
                </span>
                <button
                  type="button"
                  className="flex w-16 h-10 mx-auto justify-center items-center bg-indigo-500 text-white rounded-full"
                  onClick={() => dispatch(deleteContact(id))}
                >
                  <MdDeleteForever size={20} />
                </button>
              </li>
            ))
          : ''}
      </ul>
    </div>
  );
};
