import React from 'react';

class SearchBar extends React.Component {
  state = {
    text: ' '
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.text);
  }
  render() {
    return (
    <div className= "ui segment">
      <form className="ui form" onSubmit={this.onFormSubmit}>
      <div className= "field">
        Image Search
        <input type="text" 
        value = { this.state.text }
        onChange={ e => this.setState( { text: e.target.value } ) }></input>
      { this.state.text }
      </div> 
      </form>
    </div>
    )
  }

}

export default SearchBar;