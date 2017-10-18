import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchFeed } from '../../actions'

class SearchComponent extends Component {
  state = { tags: '' };
  
  handleInputChange = (e) => {
    this.setState({
      tags: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchFeed(this.state.tags);
    this.setState({
      tags: ''
    });
  }

  render() {
    return (
      <form className="mb-3 p-1" onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="input-group">
            <input
              className="form-control"
              placeholder="Search"
              onChange={this.handleInputChange}
            />
            <button
              className="btn btn-success ml-2"
              type="submit"
            >Search</button>
          </div>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchFeed: tags => dispatch(fetchFeed(tags))
  }
}

export const Search = connect(null, mapDispatchToProps)(SearchComponent);