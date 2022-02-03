import PropTypes from 'prop-types';
import { Item, Name, Number, Button } from './ContactItem.styled';
import { useDeleteContactMutation } from 'redux/contact/contacts-sliceApi';
import Loader from 'component/Loader/Loader';

// Принимает один контакт и метод для удаления контакта

const ContactItem = ({ contact, onDeleteContact }) => {
  const { name, number, id } = contact;
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <Item>
      <Name>{name}: </Name>
      <Number href={`tel:${number}`}>{number}</Number>
      <Button
        type="button"
        // onClick={onDeleteContact} // Метод на клике, принимает ID контакта
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
      >
        {/* {isDeleting && <Loader size={12} />} */}
        Delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
