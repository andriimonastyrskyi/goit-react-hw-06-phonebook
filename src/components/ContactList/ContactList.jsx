import { useSelector } from 'react-redux';
import { getFilteredUser, getUsers } from 'redux/users/userSelectors';
import { DeleteBtn } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { deleteUser } from 'redux/users/userSlice';

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredUsers);
  const dispatch = useDispatch();

  return (
    <ul>
      {visibleContacts.map(({ id, number, name }) => {
        return (
          <li key={id}>
            <span>
              {name}: {number}
            </span>
            <DeleteBtn type="button" onClick={() => dispatch(deleteUser(id))}>
              Delete
            </DeleteBtn>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
