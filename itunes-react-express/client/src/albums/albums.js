import React, { Component } from 'react';
import { Album } from './album';
//styles css.

const styles = {
  albumsSearch: {
    background: 'rgba(0,0,0,0.8)',
    width: '100%',
    height: 'auto',
    display: 'inline-block'
  },
  searchContainer: {
    width: '260px',
    margin: '20px auto'
  },
  searchInput: {
    width: '100%',
    height: '40px',
    paddingLeft: '45px',
    border: 'none',
    borderBottom: '1px solid #ccc',
    fontSize: '20px'
  },
  searchLabel: {
    position: 'relative'
  },
  searchIcon: {
    position: 'absolute',
    height: '40px',
    lineHeight: '40px',
    left: '12px',
    fontSize: '1.4em'
  },
  albums: {
    margin: '0 auto'
  }
};

export class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: [] };
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
//searched for items data.
  handleSearch(query) {
    if(query){
      fetch(`/search/${query}`)
        .then(response => response.json())
        .then(data => this.setState({ albums: data }))
        .catch(error => console.error(error));
    }
  }
//when component has loaded search for artists named Ronny
//Ronny is my name :)
   componentDidMount() {
    this.handleSearch('ronny');
  }

  handleClick(event) {
    event.preventDefault();
    this.handleSearch(event.target.value);
  }
//if enter is pressed,search for the value that was entered.
  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.handleSearch(event.target.value);
    }
  }
//form fields and input fields
  render() {
    return (
      <div>
        <div className="albums-search" style={ styles.albumsSearch }>
          <form id="searchbox" style={ styles.searchContainer }>
            <label style={ styles.searchLabel }>
              <i
                className="fa fa-search fa-3"
                aria-hidden="true"
                style={ styles.searchIcon }
                onClick={ this.handleClick }></i>
              <input
                type="text"
                search="search"
                style={ styles.searchInput }
                onKeyPress={ this.handleKeyPress } />
            </label>
          </form>
        </div>
        <div className="albums-container" style={ styles.albums }>
          { this.state.albums.map((album, i) => (
            <Album key={ i } album={ album } />
          )) }
        </div>
      </div>
    );
  }
}
