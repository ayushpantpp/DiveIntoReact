import React from 'react';
import youtube from '../apis/youtube'
import SearchBar from './SearchBar';


// class App extends React.Component {
//     render() { 
//     return(<div>
//       <SearchBar/>
//       </div>);
//   }
// }


class App extends React.Component {
  onSearchSubmit = async (term) => {
    const response = await youtube.get('/', {
        params: {
          query: term
        }
    })
    console.log(response);
  }

  render() {
    return (
    <div className="ui container" style={{ marginTop: '20px'}}>
      <SearchBar onSubmit={ this.onSearchSubmit }/>
    </div>
    );  
  }

}

export default App;