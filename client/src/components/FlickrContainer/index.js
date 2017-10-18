import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchFeed } from '../../actions';

import { Search } from '../Search';
import { PhotoList } from '../PhotoList';
class FlickrContainerComponent extends Component {
  componentDidMount() {
    this.props.fetchFeed();
  }

  render() {
    const { feed } = this.props;
    return (
      <div>
        <Search />
        { feed.error ?
          <h3>An Error Occurs</h3> :
          <PhotoList photos={feed.photos}/>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    feed: state.feed
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchFeed: tags => dispatch(fetchFeed(tags))
  }
}

export const FlickrContainer = connect(mapStateToProps, mapDispatchToProps)(FlickrContainerComponent);