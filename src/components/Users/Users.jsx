import { useState } from 'react';
import { Label } from 'components/Form/Form.styled';
import { FindUser, DeleteBtn, User } from './Users.styled';
import PropTypes from 'prop-types';

export const Users = ({ contacts, handleDelete }) => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = ({ target: { value } }) => setFilter(value);
  const normalizedFilter = filter.toLowerCase();
  const filtredList = contacts.filter(item =>
    item.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <FindUser>
      <Label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilterChange}
        />
      </Label>
      <ul>
        {contacts.length !== 0
          ? filtredList.map(({ id, name, number }) => (
              <User key={id}>
                {name}: {number}
                <DeleteBtn type="button" onClick={() => handleDelete(name)}>
                  Delete
                </DeleteBtn>
              </User>
            ))
          : ''}
      </ul>
    </FindUser>
  );
};

Users.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
