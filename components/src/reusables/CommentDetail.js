// import the react and react dom directory.
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

// Create react component.
const CommentDetail = props => {  
  return (
    <div className="ui container comments"> 
      <div className="comment">
          <a href="/" className="avatar">
            <img alt="avatar" src={ props.imageUrl }></img>
          </a>
          <div className="content">
            <a href="/" className="author">
            { props.author }
            </a>
          <div className="metadata">
            <span className="date"> { props.timeAgo }</span>
          </div>
          <div className="text"> { props.content } </div>
        </div>
      </div>
    </div>
  );
} 

export default CommentDetail;