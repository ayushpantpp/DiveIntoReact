import React from 'react';
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {
  state = { images: [], queryTerm: '', count:2};
  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
        params: {
          query: term
        }
    })
    this.setState({ images: response.data.results, queryTerm : term});
  }
  getNextPage = async (term, pageno) => {
    this.setState({ count: this.state.count + 1 });

    const response = await unsplash.get('/search/photos', {
        params: {
          query: this.state.queryTerm,
          page: this.state.count
        }
    })
    this.setState({ images: response.data.results });
  }

  render() {
    return (
    <div className="ui container" style={{ marginTop: '20px'}}>
      <SearchBar onSubmit={ this.onSearchSubmit }/>
      <ImageList images= { this.state.images }/>
      Found: { this.state.images.length } images
      <button onClick={ this.getNextPage } term={this.state.queryTerm}>Get Next</button>
    </div>
    );  
  }

}

export default App;