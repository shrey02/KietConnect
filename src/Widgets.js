import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search KietConnect" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>coding updates</h2>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="100DaysOfCode"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://kiet.edu"}
          options={{ text: "#reactjs is awesome", via: "Code IT" }}

        />
        <TwitterTweetEmbed tweetId={"1312922955773480960"} />
      </div>
    </div>
  );
}

export default Widgets;
