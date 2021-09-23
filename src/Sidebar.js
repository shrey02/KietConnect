import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import { NavLink, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from "./List";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__twitterIcon">
        KietConnect
  </div>
      <NavLink to="/"><SidebarOption active Icon={HomeIcon} text="Home" /></NavLink>
      <NavLink to="/"> <SidebarOption active Icon={NotificationsNoneIcon} text="Upcoming events" /></NavLink>
      <NavLink to="/"> <SidebarOption active Icon={MailOutlineIcon} text="Past events" /> </NavLink>                                               
      <NavLink to="/resources"> <SidebarOption active Icon={BookmarkBorderIcon} text="Resources" /></NavLink>
      <NavLink to="/MembersList"> <SidebarOption active Icon={ListAltIcon} text="List of members" /></NavLink>
      <NavLink to="/List"> <SidebarOption active Icon={PermIdentityIcon} text="Creators Profile" /></NavLink>
      <NavLink to="/Explore"> <SidebarOption active Icon={SearchIcon} text="Explore clubs" /></NavLink>
      <SidebarOption Icon={MoreHorizIcon} text="More" />
      {/* Button -> Tweet */}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        APPLY for Club 
      </Button>
    </div>
  );
}

export default Sidebar;
