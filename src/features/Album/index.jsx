import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      title: 'JustaTee',
      imageUrl: 'https://photo-resize-zmp3.zmdcdn.me/w480_r2x3_webp/cover_artist/e/f/c/7/efc7d2cf0bd476eb30d953adfbac3dd8.jpg',
    },
    {
      id: 2,
      title: 'MIN',
      imageUrl: 'https://photo-resize-zmp3.zmdcdn.me/w480_r2x3_webp/cover_artist/b/0/c/3/b0c3bc16ca25baed31d8e905ddaf8a1f.jpg',
    },
    {
      id: 3,
      title: 'Mr.Siro',
      imageUrl: 'https://photo-resize-zmp3.zmdcdn.me/w480_r2x3_webp/cover_artist/3/5/a/d/35ad281a468d21a2d0ad5a8d96c62f23.jpg',
    },
  ];

  return (
    <div>
      <h2>Nghệ Sĩ Yêu Thích</h2>
      <AlbumList albumList={albumList}/>
    </div>
  );
}

export default AlbumFeature;