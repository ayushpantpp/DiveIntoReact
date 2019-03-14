// import the react and react dom directory.
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './reusables/CommentDetail'
import ApprovalCard from './reusables/ApprovalCard'

// Create react component.
function getButtonText() {
  return "Click on us";
}

const App = () => {  
  return (
    <div className="ui container comments"> 
      <div className="heading"> <h1>Blog Post Comments</h1></div>
     
      <ApprovalCard>
        <CommentDetail 
        author="Ayush"
        timeAgo="TOday at 5:00"
        content="CHutzpa"
        imageUrl= {faker.image.avatar() } />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail 
        author="Piddu"
        timeAgo="TOday at 6:00"
        content="Hhhdhhd"
        imageUrl= {faker.image.avatar() } /></ApprovalCard>
      <ApprovalCard>
        <CommentDetail
        author="Tiddu"
        timeAgo="TOday at 7:00"
        content="JFGGFF"
        imageUrl= {faker.image.avatar() } />
      </ApprovalCard>
      
    </div>

  );
} 


// Take the react component and show it on screen.

ReactDOM.render(<App />, document.querySelector('#root'));