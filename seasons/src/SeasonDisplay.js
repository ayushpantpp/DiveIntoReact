import React from 'react';
const seasonConfig = {
  summer : {
    text: "It is very hot",
    icon: 'sun'
  },
  winter : {
    text: "It is very cold",
    icon: 'snowflake'
  }

}
const getSeason = (lat, month) => {
    if(month > 2 && month < 9) {
      return lat > 0 ? 'summer' : 'winter';
    } else {
      return lat < 0 ? 'winter' : 'summer';
    }
} 


const SeasonDisplay = (props) => {
  const season =  getSeason(props.data.lat , new Date().getMonth());
  const { text, icon } = seasonConfig[season];
  return (<div>
            <h1> 
              <i className={`${icon} icon`}></i> 
                { text }
              <i className={`${icon} icon`}></i> 
            </h1>
          </div>)
};

export default SeasonDisplay;