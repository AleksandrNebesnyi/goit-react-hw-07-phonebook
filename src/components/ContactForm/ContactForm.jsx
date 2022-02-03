import { useSelector, useDispatch } from 'react-redux'; // Импортируем хуки для использования стейта и доставки экшинов прямо в компоненте
import contactsActions from 'redux/contact/contacts-actions'; // Импорт экшенов из контактов
import { useState } from 'react';
import { getContacts } from 'redux/contact/contacts-selector'; // Импортируем части стейта из selector
import { toast } from 'react-toastify';
import { Form, Label, Input, Button } from './ContactForm.styled'; //Стили
import {
  useFetchContactsQuery,
  useCreateContactMutation,
} from 'redux/contact/contacts-sliceApi';

const ContactForm = () => {
  // Локальный стейт контакта
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { data: contacts } = useFetchContactsQuery();
  console.log(contacts);
  const [createContact] = useCreateContactMutation();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };
  // const duplicateName = () =>
  //   contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
  //     .length !== 0;
  // Проверка на дубликат
  // const duplicateName = () =>
  //   contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
  //   при сабмите отправляет экшин добавления контакта
  const onSubmit = (name, number) => createContact(name, number);
  // Метод на отправке формы. Формирует из локального стейта контакт и передает во внешний метод
  const handleSubmit = event => {
    event.preventDefault();

    // if (duplicateName) {
    //   toast.warn(`${name} is already on contacts`);

    //   return;
    // }

    onSubmit(name, number);
    resetForm();
  };

  // Сброс полей формы (после отправки)
  const resetForm = () => {
    setName('');
    setNumber('');
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
          name="number"
          placeholder="Phone number"
          aria-label="Input for your phone number"
          value={number} // Пишем значение в стейт
          onChange={handleChange} // Наблюдающий метод
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;

// const isAlreadyContacts =()=> contacts.find((el) => el.name.toLowerCase() === name.toLowerCase())
// .length !== 0;

// const handleSubmit = (e) => {
// e.preventDefault();
// const contact = { name, phone: number }
// if (isAlreadyContacts) {
//   onWarning(`Contacts ${name} already exist`)
// } else {
//   addContact(contact)
// }
// setName("");
// setNumber("");
// };
// useEffect(() => {
// if (error) onError(`${error.status} ${error.data.msg}`)
// }, [error]);
