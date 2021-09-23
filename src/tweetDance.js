import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";
import firebase from "firebase";
import { useStateValue } from './StateProvider';


function TweetDance() {
  const [{ user }, dispatch] = useStateValue();
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("dance").add({
      displayName:user.displayName ,
      username: user.displayName,
      verified: true,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      text: tweetMessage,
      image: tweetImage,
      avatar:
        user.photoURL,
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src={user.photoURL} />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="Place your caption here..."
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          POST
        </Button>
      </form>
    </div>
  );
}

export default TweetDance;
