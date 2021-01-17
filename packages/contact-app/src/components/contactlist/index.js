import { Fragment } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { contactList } from "../../recoil/atoms";

import SearchBar from "../searchbar";
import ContactList from "./ContactList";

const ContactApp = styled.div`
  width:  300px;
  height: 600px;

  & > * {
    width: 100%;
  }
`;

export default () => {
  const contacts = useRecoilValue(contactList);

  return (
    <ContactApp>
      <SearchBar />
      <ContactList contacts={contacts} />
    </ContactApp>
  );
};
