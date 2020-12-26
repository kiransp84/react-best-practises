import FormPanel from "./FormPanel";

export const fetchContacts = ({ region, amount }) => {
  const BASE_URL = process.env.REACT_APP_API_SERVER;

  console.log(process.env);

  return fetch(`${BASE_URL}?amount=${amount}&region=${region}&ext`)
    .then(response => response.json())
    .then(parsedResponse =>
      parsedResponse.map(user => ({
        name: `${user.name} ${user.surname}`,
        email: user.email,
        thumbnail: user.photo
      }))
    );
};

export default () => <FormPanel fetchContacts={fetchContacts} />;
