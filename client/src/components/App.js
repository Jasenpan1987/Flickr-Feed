import React from 'react';
import { CoreLayout } from '../Layout/CoreLayout'
import { Search } from './Search';
import { FlickrContainer } from './FlickrContainer';

import "./App.css";

const App = () => {
  return (
    <CoreLayout>
      <h2 className="text-center">Flickr Feed</h2>
      <FlickrContainer />
    </CoreLayout>
  );
};

export default App;
