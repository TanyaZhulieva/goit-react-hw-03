import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  contactName: Yup.string()
    .min(3, "Too short")
    .max(50, "Max 50 chars!")
    .required("Required"),
  contactNumber: Yup.string()
    .min(3, "Too short")
    .max(50, "Max 50 chars!")
    .required("Required"),
});

export default function ContactForm({ onAdd }) {
const contactId = nanoid()

  const handleSabmit = (values, actions) => {
    onAdd({
      ...values,
      id: contactId,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        contactName: "",
        contactNumber: "",
      }}
      validationSchema={ContactSchema}
      onSubmit={handleSabmit}
    >
      <Form className={css.form}>
        <div className={css.group}>
          <label htmlFor={contactId}>Name</label>
          <Field className={css.input} id={contactId} name="contactName" />
          <ErrorMessage
            className={css.error}
            name="contactName"
            component="span"
          />
        </div>

        <div className={css.group}>
          <label>Number</label>
          <Field className={css.input} name="contactNumber" />
          <ErrorMessage
            className={css.error}
            name="contactNumber"
            component="span"
          />
        </div>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
