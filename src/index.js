import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

const App = () => {
  return (<div className="ui container comments" >
    <div className="comment" >
      <a className="avatar" href = '/'>
        <img alt="avatar" src={faker.image.avatar()}/>
      </a>
      <div classname="content">
        <a href="/" classname="author">
          Sam
        </a>
        <div className="metadata">
          <span className="date">Today at 6:00PM</span>
        </div>
        <div className="text">Nice Blog Post </div>
      </div>
    </div>
    <div className="comment" >
      <a className="avatar" href = '/'>
        <img alt="avatar" src={faker.image.avatar()}/>
      </a>
      <div classname="content">
        <a href="/" classname="author">
          Sam
        </a>
        <div className="metadata">
          <span className="date">Today at 6:00PM</span>
        </div>
        <div className="text">Nice Blog Post </div>
      </div>
    </div>
    <div className="comment" >
      <a className="avatar" href = '/'>
        <img alt="avatar" src={faker.image.avatar()}/>
      </a>
      <div classname="content">
        <a href="/" classname="author">
          Sam
        </a>
        <div className="metadata">
          <span className="date">Today at 6:00PM</span>
        </div>
        <div className="text">Nice Blog Post </div>
      </div>
    </div>
  </div>)
}

ReactDOM.render(<App />, document.querySelector('#root'))
