import { useRecoilValue } from "recoil";
import { contactList } from "../../recoil/atoms";
import ContactList from "./ContactList";

export default () => {
  const contacts = useRecoilValue(contactList);
  return <ContactList contacts={contacts} />;
};
