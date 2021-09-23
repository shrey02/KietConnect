import React, { forwardRef } from "react";
import "./card.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Card() {
    return (
      <div className="card" >
        <div className="card__avatar">
          <Avatar src="https://image.shutterstock.com/image-vector/six-piece-flat-puzzle-round-600w-363547607.jpg" />
        </div>
        <div className="card__body">
          <div className="card__header">
            <div className="card__headerText">
              <h3>
                Member Name{" "}
                <span className="card__headerSpecial">
                 KIET CLUB
                </span>
              </h3>
            </div>
            <div className="card__headerDescription">
              <p>List oF member</p>
            </div>
          </div>
          <img src="https://image.shutterstock.com/image-vector/six-piece-flat-puzzle-round-600w-363547607.jpg" alt="" />
          <div className="card__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    );

    }
export default Card;
