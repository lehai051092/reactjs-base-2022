import React from 'react';
import PropTypes from 'prop-types';

PostListFeature.propTypes = {
  postList: PropTypes.array,
};

PostListFeature.defaultProps = {
  postList: [],
}

function PostListFeature({postList}) {
  return (
    <ul>
      {
        postList.map((post) => (
          <li key={post.id}>
            <span>{post.title}</span>
          </li>
        ))
      }
    </ul>
  );
}

export default PostListFeature;