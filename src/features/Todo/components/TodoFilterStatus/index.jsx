import React from 'react';
import PropTypes from 'prop-types';

TodoFilterStatus.propTypes = {
  onFilterChange: PropTypes.func,
};

TodoFilterStatus.defaultProps = {
  onFilterChange: null,
};

function TodoFilterStatus({onFilterChange}) {
  const options = [
    {
      id: 1,
      value: 'all',
      title: 'All',
    },
    {
      id: 2,
      value: 'new',
      title: 'New',
    },
    {
      id: 3,
      value: 'completed',
      title: 'Completed',
    },
  ];

  const handleFilterChange = (event) => {
    if (!onFilterChange) return;

    onFilterChange(event.target.value);
  };

  return (
    <select onChange={handleFilterChange}>
      {
        options.map((option) => (
          <option key={option.id} value={option.value}>{option.title}</option>
        ))
      }
    </select>
  );
}

export default TodoFilterStatus;