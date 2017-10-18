import React from 'react';
import PropTypes from 'prop-types';

const style = {
  mediaContainer: {
    background: '#ccc',
    borderRadius: '10px',
    padding: 10
  },
  parent: {
    width: 350,
    height: 200,
    overflow: 'hidden',
    border: '1px solid #becde5',
    borderRadius: '10px',
  },
  contentImg: {
    display: 'block',
    width: '100%',
    height: 'auto'
  }
}

const renderBadge = (idx, text, i) => {
  const badgeCollection = [
    'dark', 'primary', 'secondary', 'success', 'danger',
    'warning', 'info', 'light'
  ]
  const indexInCollection = i % badgeCollection.length;

  return (
    <span
      key={`tag-${i}`}
      className={`badge badge-${badgeCollection[indexInCollection]} mr-1`}
    >{text}</span>
  )
}

const PhotoListItemComponent = ({ idx, photo:
  { links, title, author, published, tags } }) => {
    const slicedTags = tags.length > 10 ? tags.slice(0, 10) : tags;
  return (
    <div className="media mt-1" style={style.mediaContainer}>
      <div style={style.parent}>
        <img
          className="d-flex mr-1"
          src={links[1].href} alt="Card image"
          style={style.contentImg}
        />
      </div>
      <div className="media-body ml-1">
        <h4 className="mt-0 text-center">{title}</h4>
        
        <div className="mt-1 mb-1">
          <h5 className="d-inline mr-1">Tags:</h5>
          {slicedTags.map((tag, i) => renderBadge(idx, tag, i))}
        </div>
        <div>
          <h5>Author: <a href={author.uri}>{author.name}</a></h5>
        </div>
      </div>
    </div>
  );
};

export const PhotoListItem = PhotoListItemComponent;
