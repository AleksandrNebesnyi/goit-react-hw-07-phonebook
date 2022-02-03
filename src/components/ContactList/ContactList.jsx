import { useSelector, useDispatch } from 'react-redux'; // Импортируем хуки для использования стейта и доставки экшинов прямо в компоненте
import { getFilter } from 'redux/contact/contacts-selector'; // Импортируем части стейта из selector
import contactsActions from 'redux/contact/contacts-actions'; // Импортируем экшны для диспатча
import { List } from './ContactList.styled'; //Стили
import ContactItem from '../ContactItem/ContactItem'; //Компонент одного контакта
import { useFetchContactsQuery } from '../../redux/contact/contacts-sliceApi';
import Loader from '../Loader/Loader';
// Принимает все отфильтрованные контакты и пробрасывает дальше метод для удаления контакта

const ContactList = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  const filter = useSelector(getFilter);

  // const contacts = useSelector(getfilteredContacts);

  return (
    <List>
      {contacts &&
        contacts
          .filter(el => el?.name.toUpperCase().includes(filter.toUpperCase()))
          .map(contact => <ContactItem key={contact.id} contact={contact} />)}
      {isFetching && <Loader />}
    </List>
  );
};

export default ContactList;
