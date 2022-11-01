import { Label } from 'components/Form/Form.styled';
import { FindUser, DeleteBtn, User } from './Users.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/actions';

export const Users = () => {
  return (
    // <FindUser>
    //   <Label>
    //     Find contacts by name
    //     <input
    //       type="text"
    //       name="filter"
    //       value={filter}
    //       onChange={handleFilterChange}
    //     />
    //   </Label>
    //   <ul>
    //     {contacts.length !== 0
    //       ? filteredList.map(({ id, name, number }) => (
    //           <User key={id}>
    //             {name}: {number}
    //             <DeleteBtn type="button" onClick={() => handleDelete(name)}>
    //               Delete
    //             </DeleteBtn>
    //           </User>
    //         ))
    //       : ''}
    //   </ul>
    // </FindUser>
    <>Hello</>
  );
};

// Users.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.objectOf(PropTypes.string.isRequired).isRequired
//   ).isRequired,
//   handleDelete: PropTypes.func.isRequired,
// };
