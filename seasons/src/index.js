import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';
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
  renderContent() {
    if(this.state.errorMessgae)
    return (<Loader/>
    )
    if(!this.state.errorMessgae)
    return <SeasonDisplay data = { this.state }/>

    return (<Loader message="Please allow to find location"/>)
  }

  render() {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    );
   }
}

ReactDOM.render(
  <App/>, document.querySelector('#root')
);