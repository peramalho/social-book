import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Form, Title, TextArea, Error, Button } from './styles';
import { PageWrapper } from '../../components/styles';

function NewPost() {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      message: '',
    },
    validationSchema: Yup.object({
      message: Yup.string()
        .max(280, 'Máximo de 280 caracteres.')
        .required('Required!'),
    }),
    onSubmit: async (values) => {
      try {
        await axios.post(`${process.env.REACT_APP_BACKEND_URL}/posts`, values);
      } catch (err) {
        console.log(err);
      }
      history.push('/');
    },
  });

  return (
    <div>
      <PageWrapper>
        <Form onSubmit={formik.handleSubmit}>
          <Title htmlFor="message">Novo Post</Title>
          <TextArea
            id="message"
            name="message"
            placeholder="Digite uma mensagem..."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
          />
          {formik.touched.message && formik.errors.message && (
            <Error>{formik.errors.message}</Error>
          )}
          <Button type="submit">Postar</Button>
        </Form>
      </PageWrapper>
    </div>
  );
}

export default NewPost;
