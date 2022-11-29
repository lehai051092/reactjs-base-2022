import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

Album.propTypes = {
  album: PropTypes.object,
};

Album.defaultProps = {
  album: {},
};

function Album({album}) {
  return (
    <div className={'album'}>
      <div className={'album__image'}>
        <img src={album.imageUrl} alt=""/>
      </div>
      <p className={'album__title'}>{album.title}</p>
    </div>
  );
}

export default Album;