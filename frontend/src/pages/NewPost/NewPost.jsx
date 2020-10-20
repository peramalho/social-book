import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { Form, Title, TextArea, Error, Button } from './styles';
import { PageWrapper } from '../../components/styles';
import { addPost } from '../../store/ducks/reducer';

function NewPost() {
  const dispatch = useDispatch();
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
    onSubmit: (values) => {
      dispatch(addPost(values));
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
