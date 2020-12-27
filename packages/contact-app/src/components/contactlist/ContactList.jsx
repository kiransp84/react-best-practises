export default ({ contacts = [] }) => {
  // To-Do show a loading indicator
  return (
    <div>
      <ul className="ul">
        {contacts.map(contact => (
          <li className="li" key={contact.email}>
            <img className="img" src={contact.thumbnail} role="presentation" />
            <div className="contactData">
              <strong>{contact.name}</strong>
              <br />
              <small>{contact.email}</small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
