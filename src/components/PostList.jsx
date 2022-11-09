import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PostItem from './PostItem';

const PostList = ({posts, title, remove}) => {
  // console.log(posts);
  // if(!posts.lenght){
  //     return (
  //       <h4 style={{textAlign: 'center', 
  //       fontSize: '20px', 
  //       textTransform: 'uppercase'}}
  //       >
  //         Posts not found
  //       </h4>
  //     )
  // }

  return (
    <ul>
            <h1
        style={{textAlign: 'center'}}
      >{title}</h1>
      <TransitionGroup>
      {posts.map((post,index) => 
        <CSSTransition
          key={post.id}
          timeout={500}
          classNames='post'
        >
          <PostItem
            remove={remove} 
            index={index}
            post={post}
        />
        </CSSTransition>
      )}
      </TransitionGroup>
    </ul>
  );
}

export default PostList;
