// @flow
import React, { Component } from 'react';
import ShowCard from './ShowCard';

class Search<SyntheticKeyboardEvent> extends Component {
  state = {
    searchTerm: ''
  };
  props: {
    shows: Array<Show>
  };

  handleSearchTermChange = (
    event: SyntheticKeyboardEvent & { target: HTMLInputElement }
  ) => {
    this.setState({ searchTerm: event.target.value });
  };

  // handleSearchTermChange(
  //   event: SyntheticKeyboardEvent & { target: HTMLInputElement }
  // ) {
  //   this.setState({ searchTerm: event.target.value });
  // }
  render() {
    return (
      <div className="search">
        <header>
          <h1>svideo</h1>
          <input
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
            type="text"
            placeholder="Search"
          />
        </header>
        <div>
          {this.props.shows
            .filter(show =>
              `${show.title} ${show.description}`
                .toLowerCase()
                .includes(this.state.searchTerm.toLowerCase())
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
