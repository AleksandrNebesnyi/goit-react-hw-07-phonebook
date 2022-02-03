import { useSelector, useDispatch, shallowEqual } from 'react-redux'; // Импортируем хуки для использования стейта и доставки экшинов прямо в компоненте
import { getFilter } from 'redux/contact/contacts-selector'; // Импортируем части стейта из selector
import contactsActions from 'redux/contact/contacts-actions'; // Импортируем экшны для диспатча
import { List } from './ContactList.styled'; //Стили
import ContactItem from '../ContactItem/ContactItem'; //Компонент одного контакта
import { useFetchContactsQuery } from '../../redux/contact/contacts-sliceApi';
import Loader from '../Loader/Loader';
// Принимает все отфильтрованные контакты и пробрасывает дальше метод для удаления контакта

const ContactList = () => {
  const { data: contacts, isFetching } = useFetchContactsQuery();
  const filter = useSelector(getFilter, shallowEqual);
  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLoverCase().includes(filter.toLoverCase()),
  // );
  // console.log(filteredContacts);
  return (
    <List>
      {contacts &&
        contacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      {isFetching && <Loader />}
    </List>
  );
};

export default ContactList;

// .filter(el => el?.name.toLoverCase().includes(filter.toLoverCase()))
