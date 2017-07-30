import React from 'react';
import Counter from './Counter.jsx'

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