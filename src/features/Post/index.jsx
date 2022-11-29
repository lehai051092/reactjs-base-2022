import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import PostListFeature from "./components/PostList";
import Pagination from "./components/Pagination";
import queryString from "query-string";

PostFeature.propTypes = {};

function PostFeature(props) {
  const [getPostList, setPostList] = useState([]);
  const [getPagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 11,
  });
  const [getFilters, setFilters] = useState({
    _limit: 10,
    _page: 1
  });

  useEffect(() => {
    async function fetchPostList() {
      try {
        const queryParams = queryString.stringify(getFilters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${queryParams}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        const {data, pagination} = responseJSON;

        setPostList(data);
        setPagination(pagination)
      } catch (error) {
        console.log('Fetch post list fail: ' + error.message());
      }
    }

    fetchPostList();
  }, [getFilters]);

  const handlePageChange = (newPage) => {
    setFilters({
      ...getFilters,
      _page: newPage
    });
  };

  return (
    <div>
      <h2>React hooks - PostList</h2>
      <PostListFeature postList={getPostList}/>
      <Pagination pagination={getPagination} onPageChange={handlePageChange}/>
    </div>
  );
}

export default PostFeature;