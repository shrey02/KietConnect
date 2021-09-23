import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import db from "./firebase";
import FlipMove from "react-flip-move";
import { useStateValue } from './StateProvider';
import { useState, useEffect } from "react";
import Like from "./like";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar,postId }, ref) => {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");
    const [{ user }, dispatch] = useStateValue();
    useEffect(() => {
      if (postId) {
        db
          .collection("posts") 
          .doc(postId)
          .collection("comments")
          .onSnapshot((snapshot) => {
            setComments(snapshot.docs.map((doc) => doc.data()));
          });
      }
    }, []);

    const postComment = (e) => {
      e.preventDefault();

      db.collection("posts").doc(postId).collection("comments").add({
        text: comment,
        username1:user.displayName
      });
      setComment(" ");
    };

    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />

        <div className="post__comments">
          {comments.map((comment) => (
            <p>
              <strong>{comment.username1} </strong>
             {comment.text}
            </p>
          ))}
        </div>
          <form className="post__commentBox">
          <Like/>
            <input
              className="post__input"
              type="text"
              placeholder="Add a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              className="post__button"
              type="submit"
              onClick={postComment}
            >
              Post
            </button>
          </form>
        </div>
      </div>
    );
  }
);

export default Post;
