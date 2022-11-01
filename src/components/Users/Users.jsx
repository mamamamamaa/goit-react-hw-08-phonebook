import { Label } from 'components/Form/Form.styled';
import { FindUser, DeleteBtn, User } from './Users.styled';
import {
  addStorageContacts,
  deleteContact,
  setFilter,
} from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const STORAGE_DATA = 'contacts';

export const Users = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  useEffect(() => {
    const data = localStorage.getItem(STORAGE_DATA);
    if (data) {
      dispatch(addStorageContacts(JSON.parse(data)));
    }
  }, []);

  const normalisedFilter = filter.toLowerCase();
  const filteredList = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalisedFilter)
  );

  return (
    <FindUser>
      <Label>
        Find contacts by name
        <input type="text" name="search" onChange={handleFilterChange} />
      </Label>
      <ul>
        {contacts.length !== 0
          ? filteredList.map(({ id, name, number }) => (
              <User key={id}>
                {name}: {number}
                <DeleteBtn
                  type="button"
                  onClick={() => dispatch(deleteContact(name))}
                >
                  Delete
                </DeleteBtn>
              </User>
            ))
          : ''}
      </ul>
    </FindUser>
  );
};

// Users.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.objectOf(PropTypes.string.isRequired).isRequired
//   ).isRequired,
//   handleDelete: PropTypes.func.isRequired,
// };
