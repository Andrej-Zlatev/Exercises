import { contactData } from "../ContactList/ContactList";

const Contact = ({ name, phone }: contactData) => {
  return (
    <div>
      <p>Name:{name}</p>
      <p>Phone{phone}</p>
    </div>
  );
};

export default Contact;
