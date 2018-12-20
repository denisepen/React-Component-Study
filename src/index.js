import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments" >
    <ApprovalCard>
      <CommentDetail
        name="Alex"
        comment={"Nice Post"}
        avatar={faker.image.avatar()}/>
    </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          name="Sam"
          comment={"Create something New"}
          avatar={faker.image.avatar()}/>
        </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          name="Ray"
          comment={"I find this exciting"}
          avatar={faker.image.avatar()}/>
        </ApprovalCard>    
    </div>)
}

ReactDOM.render(<App />, document.querySelector('#root'))
