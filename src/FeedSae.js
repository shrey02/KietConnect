import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "./Post";
import "./Feed.css";
import StoryReel from './StoryReel';
import db from "./firebase";
import FlipMove from "react-flip-move";
import { useStateValue } from './StateProvider';
import TweetSae from "./tweetSae";

function FeedSae() {
  const [{ user }, dispatch] = useStateValue();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("sae").orderBy("timestamp","desc").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({id: doc.id,
       post: doc.data()})))
    );
  }, []);

  return (
    <div className="feed">
       <StoryReel />
      <div className="feed__header">

        <h2>INNOGEEKS KIET</h2>
      </div>
     
      <TweetSae />
    
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

export default FeedSae;
