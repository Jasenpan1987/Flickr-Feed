import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { PhotoListItem } from '../PhotoListItem'

const PhotoListComponent = ({ photos }) => {
  return (
    <section>
      {photos.map((photo, idx) => {
        console.log(photo);
        return (
          <PhotoListItem
            photo={photo}
            key={photo.id}
            idx={idx}
          />
        )
      })}
    </section>
  );
}

export const PhotoList = PhotoListComponent;
