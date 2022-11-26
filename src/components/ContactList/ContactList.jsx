import { Contact } from 'components/Contact/Contact';
import { fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, ListItem } from './ContactsList.styled';
import { Loader } from 'components/Loader/Loader';
import {
  selectContacts,
  selectStatusFilter,
  selectIsLoading,
  selectError,
} from 'redux/contacts/selectors';

export function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectStatusFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const normalized = filter.toLocaleLowerCase();
  const filterContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normalized)
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List>
      {error && <p>error</p>}
      {filterContacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          <Contact id={id} name={name} number={number} />
        </ListItem>
      ))}
    </List>
  );
}
