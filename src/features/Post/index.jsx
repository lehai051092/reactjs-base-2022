import React, {useEffect, useState} from 'react';
import PostListFeature from "./components/PostList";
import Pagination from "./components/Pagination";
import queryString from "query-string";
import PostFilterForm from "./components/PostFilterForm";

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
    _page: 1,
    title_like: '',
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

  const handleDataFilterForm = (filterData) => {
    setFilters({
      ...getFilters,
      _page: 1,
      title_like: filterData.searchTerm,
    });
  };

  return (
    <div>
      <h2>React hooks - PostList</h2>
      <PostFilterForm onSubmitSearchForm={handleDataFilterForm}/>
      <PostListFeature postList={getPostList}/>
      <Pagination pagination={getPagination} onPageChange={handlePageChange}/>
    </div>
  );
}

export default PostFeature;