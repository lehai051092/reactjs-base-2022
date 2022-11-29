import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
  pagination: {},
};

function Pagination({pagination, onPageChange}) {
  const {_page, _limit, _totalRows} = pagination;
  const totalPages = Math.ceil(_totalRows / _limit);

  const handlePageChange = (newPage) => {
    if (!onPageChange) return;

    onPageChange(newPage);
  };

  return (
    <div>
      <button disabled={_page <= 1} onClick={() => handlePageChange(_page - 1)}>Prev</button>
      <button disabled={_page >= totalPages} onClick={() => handlePageChange(_page + 1)}>Next</button>
    </div>
  );
}

export default Pagination;