import React from 'react';
import PropTypes from 'prop-types';

const CoreLayoutComponent = ({ children }) => (
  <div>
    <header className="navbar navbar-expand-md navbar-dark bg-dark">
      <a href="#" className="navbar-brand mr-0 mr-md-2">Flickr Feed</a>
    </header>
    <section className="container pt-2">
      {children}
    </section>
  </div>
);

CoreLayoutComponent.propTypes = {
  children: PropTypes.object.isRequired
}

export const CoreLayout = CoreLayoutComponent;