import React from 'react';
import Counter from './counter.jsx'

class Index extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div>
        <Counter/>
      </div>
    );
  }
}

export default Index;