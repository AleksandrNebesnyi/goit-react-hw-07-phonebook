import { useState } from 'react';
import { toast } from 'react-toastify';
import { Form, Label, Input, Button } from './ContactForm.styled'; //Стили
import {
  useFetchContactsQuery,
  useCreateContactMutation,
} from 'redux/contact/contacts-sliceApi';

const ContactForm = () => {
  // Локальный стейт контакта
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const { data: contacts } = useFetchContactsQuery();

  const [createContact, { isLoading }] = useCreateContactMutation();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        return;
    }
  };

  // Метод на отправке формы. Формирует из локального стейта контакт и передает на бэкенд.
  const handleSubmit = event => {
    event.preventDefault();
    // Проверка на дубликат
    const normalizedContact = name.toLowerCase();
    const duplicateName = contacts.find(
      contact => contact.name.toLowerCase() === normalizedContact,
    );

    if (duplicateName) {
      toast.error(`${name} is already in contact list`);
      resetForm();
      return;
    }

    createContact(name, phone);
    toast.success(`${name} is added to the contact list!`);
    resetForm();
  };

  // Сброс полей формы (после отправки)
  const resetForm = () => {
    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          placeholder="Contact name"
          aria-label="Input for your name"
          value={name} // Пишем значение в стейт
          onChange={handleChange} // Наблюдающий метод
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="phone"
          placeholder="Phone number"
          aria-label="Input for your phone number"
          value={phone} // Пишем значение в стейт
          onChange={handleChange} // Наблюдающий метод
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
        />
      </Label>

      <Button type="submit" disabled={isLoading}>
        Add contact
      </Button>
    </Form>
  );
};

export default ContactForm;
