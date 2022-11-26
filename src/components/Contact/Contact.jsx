import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contacts/operations';
import {
  TextList,
  ButtonList,
  ItemBox,
} from 'components/ContactList/ContactsList.styled';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContacts(id));

  return (
    <ItemBox>
      <TextList>
        {name}: {number}
      </TextList>
      <ButtonList type="button" onClick={handleDelete}>
        Delete
      </ButtonList>
    </ItemBox>
  );
};
