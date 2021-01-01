import styled from "styled-components";

const Ul = styled.ul`
  padding: 0;
`;

const Li = styled.li`
  list-style: none;
  margin: 5px;
  background-color: #e6eeff;
`;

//color red for every even contact item
const LiColors = styled(Li).attrs((/* props */) => ({ tabIndex: 0 }))`
  &:nth-child(2) {
    background: #ccd8ff;
  }
`;

const Img = styled.img`
  border-radius: 50%;
  margin-right: 10px;
  float: left;
  width: 60px;
`;

const ContactData = styled.div`
  padding-top: 5px;
  height: 60px;
`;

export default ({ contacts = [] }) => {
  // To-Do show a loading indicator

  return (
    <div>
      <Ul>
        {contacts.map(contact => (
          <LiColors key={contact.email}>
            <Img src={contact.thumbnail} role="presentation" />
            <ContactData>
              <strong>{contact.name}</strong>
              <br />
              <small>{contact.email}</small>
            </ContactData>
          </LiColors>
        ))}
      </Ul>
    </div>
  );
};
