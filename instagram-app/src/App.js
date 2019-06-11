import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar  from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';

class App extends React.Component {
  constructor(){
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        {dummyData.map(item => {
          return  <PostContainer post={item} key={item.id}/>
        })}
      </div>
    );
  }
}

export default App;
