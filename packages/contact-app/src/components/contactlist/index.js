import { Fragment } from "react";
import { useRecoilValue } from "recoil";
import { contactList } from "../../recoil/atoms";

import SearchBar from "../searchbar";
import ContactList from "./ContactList";

export default () => {
  const contacts = useRecoilValue(contactList);
  return (
    <Fragment>
      <SearchBar />
      <ContactList contacts={contacts} />
    </Fragment>
  );
};
