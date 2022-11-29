import React, {useState} from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
  onFormSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onFormSubmit: null,
};

function TodoForm({onFormSubmit}) {
  const [getValue, setValue] = useState('');

  const handleInputValue = (event) => {
    setValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (getValue.length > 0) {
      onFormSubmit(getValue);
    }

    setValue('');
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" value={getValue} onChange={handleInputValue}/>
    </form>
  );
}

export default TodoForm;