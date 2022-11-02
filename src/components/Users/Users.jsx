import { Label } from 'components/Form/Form.styled';
import { FindUser, DeleteBtn, User } from './Users.styled';
import { deleteContact } from '../../redux/contactsSlice';
import { setFilter } from '../../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, getContacts } from '../../redux/selectors';

export const Users = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

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
