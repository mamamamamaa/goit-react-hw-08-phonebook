import { Label } from 'components/Form/Form.styled';
import { FindUser, DeleteBtn, User } from './Users.styled';
import { deleteContact } from '../../redux/contactsSlice';
import { setFilter } from '../../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';

export const Users = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <FindUser>
      <Label>
        Find contacts by name
        <input type="text" name="search" onChange={handleFilterChange} />
      </Label>
      <ul>
        {contacts.length !== 0
          ? contacts.map(({ id, name, number }) => (
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
