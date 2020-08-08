import React from "react";
import { Link } from "react-router-dom";
import Image from '../pokeball.png';

/*** Connecting to redux store using a react-redux library called connect ***/
import { connect } from 'react-redux';

const Home = (props) => {
  const posts = props.posts;
  const postList = posts.length ? (
    posts.map((post) => {
      return (
        <div className="post card" key={post.id}>
          <img src={Image} alt=''/>
          <div className="card-content">
            <Link to={`/${post.id}`}>
              <span className="card-title red-text">{post.title}</span>
            </Link>
            <p>{post.body}</p>
          </div>
        </div>
      );
    })
  ) : (
    <div className="center">You have no post yet!</div>
  );

  return (
    <div className="container home">
      <h4 className="center">Home</h4>
      {postList}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(Home);
