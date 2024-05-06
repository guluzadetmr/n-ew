import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { Form } from 'react-router-dom';

const Register = () => {
    const formik = useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
      },
      onSubmit: values => {
        axios.post('https://northwind.vercel.app/api/categories', {
          name: values.firstName,
          surname: values.lastName
        })
        .then(res => {
          console.log(res.data);
          formik.resetForm();
        })
      }
    });
  return (
    <div>
    <h1>Register</h1>
    <form onSubmit={formik.handleSubmit}>
    <label htmlFor="firstName">First Name</label>
      <input
      id='firstName'
        type="text"
        name="firstName"
        value={formik.values.firstName}
        onChange={formik.handleChange}
      />
      <label htmlFor="lastName">Last Name</label>
      <input
      id='lastName'
        type="text"
        name="lastName"
        value={formik.values.lastName}
        onChange={formik.handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  </div>
);
}

export default Register

