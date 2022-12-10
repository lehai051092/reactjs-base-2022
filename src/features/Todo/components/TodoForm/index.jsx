import React from 'react';
import PropTypes from 'prop-types';
import InputField from "../../../../components/form-controls/InputField";
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";

TodoForm.propTypes = {
  onFormSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onFormSubmit: null,
};

function TodoForm({onFormSubmit}) {
  const schema = yup.object({
    title: yup.string()
      .required('Please enter title')
      .min(6, 'Title is too short'),
  }).required();

  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (values) => {
    if (onFormSubmit) {
      onFormSubmit(values.title);
    }

    form.reset();
  }

  return (
    <form onSubmit={form.handleSubmit(handleFormSubmit)}>
      <InputField name="title" label="Todo" form={form} />
    </form>
  );
}

export default TodoForm;