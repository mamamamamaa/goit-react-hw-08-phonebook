import { Label } from 'components/ContactForm/ContactForm.styled';
import { FindUser, DeleteBtn, User } from './Users.styled';
import { setFilter } from '../../redux/contacts/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';

export const Users = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
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
        {isLoading && <h3>Loading....</h3>}
        {error && <h3>{error}</h3>}
        {contacts.length !== 0
          ? contacts.map(({ id, name, number }) => (
              <User key={id}>
                {name}: {number}
                <DeleteBtn
                  type="button"
                  onClick={() => dispatch(deleteContact(id))}
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
