import React from 'react';
import './App.css';
import NewCommentContainer from "./NewCommentContainer";

import CommentsListContainer from "./CommentsListContainer";

const App = () => {
  return (
    <div className="App">
      Lista komentarzy!
      <NewCommentContainer/>
			<CommentsListContainer />			
    </div>
  );
};

export default App;
