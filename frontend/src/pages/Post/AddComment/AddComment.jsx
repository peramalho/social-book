import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Wrapper, Label, TextArea, Button, Error } from './styles';
import { addComment } from '../../../store/ducks/reducer';

function AddComment({ _id }) {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      comment: '',
    },
    validationSchema: Yup.object({
      comment: Yup.string()
        .max(280, 'Máximo de 280 caracteres.')
        .required('Required!'),
    }),
    onSubmit: (values) => {
      dispatch(addComment(_id, values));
    },
  });

  return (
    <Wrapper>
      <Label htmlFor="comment">Comente a publicação: </Label>
      <TextArea
        id="comment"
        name="comment"
        placeholder="..."
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.comment}
      />
      {formik.touched.comment && formik.errors.comment && (
        <Error>{formik.errors.comment}</Error>
      )}
      <Button type="submit" onClick={formik.handleSubmit}>
        Comentar
      </Button>
    </Wrapper>
  );
}

AddComment.propTypes = {
  _id: PropTypes.number,
};

AddComment.defaultProps = {
  _id: 0,
};

export default AddComment;
