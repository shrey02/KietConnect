import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import StoryReel from './StoryReel';
import db from "./firebase";
import FlipMove from "react-flip-move";
import { useStateValue } from './StateProvider';
import TweetDance from "./tweetDance";

function FeedDance() {
  const [{ user }, dispatch] = useStateValue();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("dance").orderBy("timestamp","desc").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({id: doc.id,
       post: doc.data()})))
    );
  }, []);

  return (
    <div className="feed">
       <StoryReel />
      <div className="feed__header">

        <h2>DANCE AND MUSIC CLUBS</h2>
      </div>
     
      <TweetDance />
    
      <FlipMove>
        {posts.map(({id,post}) => (
          <Post
            key={post.timestamp}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
            postId={id}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default FeedDance;
