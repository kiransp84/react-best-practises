import { Formik, Form, Field, ErrorMessage } from "formik";

import { useRecoilState } from "recoil";
import { contactList } from "../../recoil/atoms";

//To-Do move it to a util file
const validateForm = values => {
  const errors = {};
  if (!values.region) {
    errors.region = " A region is required ";
  }
  if (!values.amount) {
    errors.region = " A valid amount is required ";
  }
  return errors;
};

export default ({ fetchContacts }) => {
  // global state
  const [contacts, setContacts] = useRecoilState(contactList);

  return (
    <Formik
      initialValues={{
        amount: 0,
        region: "US"
      }}
      validate={validateForm}
      onSubmit={(values, { setSubmitting }) => {
        fetchContacts(values)
          .then(contacts => {
            console.log(contacts);
            setContacts(contacts);
          })
          .catch(submitErors => {
            console.error(submitErors);
            //To-Do show an error panel
          })
          .finally(() => {
            setSubmitting(false);
          });
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="amount" />
          <ErrorMessage name="amount" component="div" />
          <Field type="text" name="region" />
          <ErrorMessage name="region" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Go
          </button>
        </Form>
      )}
    </Formik>
  );
};
