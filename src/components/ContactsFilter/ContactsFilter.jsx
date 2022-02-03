import { useSelector, useDispatch } from 'react-redux'; // Импортируем хуки для использования стейта и доставки экшинов прямо в компоненте
import { changeFilter } from 'redux/contact/contacts-actions'; // Импортируем экшны для диспатча
import { getFilter } from 'redux/contact/contacts-selector'; // Импортируем части стейта из selector
import { Form, Label, Input } from './ContactsFilter.styled'; //Стили

// Принимает значение с поля фильтра и метод пишущий в стейт

const ContactsFilter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <>
      <Form>
        <Label>
          <h3>Find contacts by name:</h3>
          <Input
            type="text"
            value={filter}
            onChange={event =>
              dispatch(changeFilter(event.currentTarget.value))
            }
          />
        </Label>
      </Form>
    </>
  );
};

export default ContactsFilter;
