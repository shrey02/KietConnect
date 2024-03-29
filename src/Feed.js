import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import StoryReel from './StoryReel';
import db from "./firebase";
import FlipMove from "react-flip-move";
import { useStateValue } from './StateProvider';

function Feed() {
  const [{ user }, dispatch] = useStateValue();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").orderBy("timestamp","desc").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({id: doc.id,
       post: doc.data()})))
    );
  }, []);

  return (
    <div className="feed">
       <StoryReel />
      <div className="feed__header">

        <h2>CODE IT FEED</h2>
      </div>
     
      <TweetBox />
    
      <FlipMove>
        {posts.map(({id,post}) => (
          <Post
            key={post.timestamp}
            postId={id}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
            
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
