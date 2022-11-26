import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Form } from 'components/Form/Form';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';
import { ContactsConteiner, ContactsText } from './Contacts.styled';
import { Loader } from 'components/Loader/Loader';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsConteiner>
      <ContactsText>Your contacts</ContactsText>
      <Form />
      <div>{isLoading && <Loader />}</div>
      <Filter />
      <ContactList />
    </ContactsConteiner>
  );
}
