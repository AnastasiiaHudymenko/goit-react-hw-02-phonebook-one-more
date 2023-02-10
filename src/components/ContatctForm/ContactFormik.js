import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import css from './ContactForm.module.css';

let initialValues = { name: '', number: '' };
let userSchema = object({
  name: string().required(),
  number: string().min(6).required(),
});

export const ContactFormik = props => {
  const handlSubmit = (values, actions) => {
    actions.resetForm();
    return props.onSubmit(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={handlSubmit}
    >
      {({ errors, touched }) => (
        <Form className={css.form}>
          <label className={css.label}>
            <p className={css.labelName}>Name</p>
            <Field
              className={css.input}
              type="text"
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            {errors.name && touched.name ? (
              <ErrorMessage
                className={css.errorMessage}
                component="span"
                name="name"
              />
            ) : null}
          </label>
          <label className={css.label}>
            <p className={css.labelName}>Number</p>
            <Field
              className={css.input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            {errors.number && touched.number ? (
              <ErrorMessage
                className={css.errorMessage}
                component="span"
                name="number"
              />
            ) : null}
          </label>
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};
