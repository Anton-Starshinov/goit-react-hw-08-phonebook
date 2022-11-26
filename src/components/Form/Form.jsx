import { useState } from 'react';
import { nanoid } from 'nanoid';
import { FormStyled, LabelForm, InputForm, ButtonForm } from './Form.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContacts } from 'redux/contacts/operations';

export function Form() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameId = nanoid(3);

  const handleChangeName = evt => {
    setName(evt.target.value);
  };

  const handleChangeNumber = evt => {
    setNumber(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${name} is already in contacts`);
    }

    dispatch(addContacts({ name, number }));

    resetSubmit();
  };

  const resetSubmit = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <LabelForm htmlFor={nameId}>
        Name
        <InputForm
          id={nameId}
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </LabelForm>
      <LabelForm htmlFor={nameId}>
        Number
        <InputForm
          id={nameId}
          type="tel"
          name="number"
          value={number}
          onChange={handleChangeNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </LabelForm>
      <ButtonForm type="submit">Add contact</ButtonForm>
    </FormStyled>
  );
}
