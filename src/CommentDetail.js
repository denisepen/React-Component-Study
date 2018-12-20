import React from 'react';
// import faker from 'faker';

const CommentDetail = (props) => {
var t = new Date();

  return (
    <div className="comment" >
      <a className="avatar" href = '/'>
        <img alt="avatar" src={props.avatar}/>
      </a>
      <div classname="content">
        <a href="/" classname="author">
          {props.name}
        </a>
        <div className="metadata">
          <span className="date"> {t.toLocaleDateString()}</span>
        </div>
        <div className="text"> {props.comment} </div>
      </div>
    </div>
  )
}

export default CommentDetail;
