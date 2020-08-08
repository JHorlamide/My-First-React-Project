import React from "react";

import Image from '../pokeball.png';
import { deletePost } from '../Actions/postAction';
/*** Connect to redux store ***/ 
import { connect } from 'react-redux';


const Post = (props) => {

  const handleClick = () => {
    props.deletePost(props.post.id);
    props.history.push('/');
  };

  const newPost = props.post ? (
    <div className="post card">
      <img src={Image} alt="" />
      <h4 className="center card-title">{props.post.title}</h4>
      <p className="card-body">{props.post.body}</p>
      <div className='center'>
        <button className='btn grey' onClick={handleClick}>Delete Post</button>
      </div>
    </div>
  ) : (
    <div className='center'>Loeading post...</div>
  );

  return <div className="container home">{newPost}</div>;
};

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find((post) => {
      return post.id === id;
    })
  };
};


const mapDispatchToProps = (dispatach) => {
  return {
    deletePost: (id) => {
      dispatach(deletePost(id))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
