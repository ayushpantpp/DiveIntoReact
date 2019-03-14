import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {

  state = { lat: null, lang: null, errorMessgae: null };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
         this.setState({
           lat : position.coords.latitude,
           long: position.coords.longitude
         });
      },
       error => {
         this.setState({ errorMessgae: error.message })
       }
    );
    console.log(this.state);

  }
  render() {
    if(this.state.errorMessgae)
    return (<div> Error: {this.state.errorMessgae} 
    </div>
      
      )
    if(!this.state.errorMessgae)
    return <SeasonDisplay data = { this.state }/>


    return (<div>Null</div>)
   }
}

ReactDOM.render(
  <App/>, document.querySelector('#root')
);