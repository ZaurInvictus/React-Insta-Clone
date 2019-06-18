import React from 'react';
import dummyData from '../../dummy-data';
import SearchBar  from '../SearchBar/SearchBar'
import PostContainer from './PostContainer';


class PostsPages extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: [],
    }
  }

  componentDidMount() {
    this.setState({posts: dummyData});
  }

  //SEARCH POSTS 
  searchTermHandler = e => {
    this.setState({ searchTerm: e.target.value });
  };

  //SHORT VERSION OF FILTER
  searchPostsHandler = e => {
    const posts = this.state.posts.filter(curr => curr.username.includes(e.target.value));
    this.setState({ filteredPosts: posts });
  };


  render() {
    return (
      <div className="App">
        <SearchBar 
          searchTerm={this.state.searchTermHandler}
          searchPosts={this.searchPostsHandler}
        />
        <PostContainer 
          posts = {
            this.state.filteredPosts.length > 0
            ? this.state.filteredPosts
            : this.state.posts
          }
        />
      </div> 
    );
  }
}


export default PostsPages;
