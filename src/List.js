import React,{useState} from 'react'
import "./List.css";
import TweetBox from './TweetBox';
import Post from "./Post";
import Card from "./card";
import ClubTemp from "./ClubTemp";
import {NavLink} from "react-router-dom";
import FlipMove from "react-flip-move";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    gridContainer: {
      paddingLeft: "45px",
      paddingRight: "40px"
    }
  });

function List() {
  const [name8,setName]=useState('Kiet');
  const [heading,setHeading]=useState("Demo Club Name");
  const [image3,setImage1]=useState("https://www.kiet.edu/uploads/department/student_club/571457974.jpg");
  const [image1,setImage3]=useState("https://cdn-images-1.medium.com/max/1200/1*GUnXaV_rVzuce67X__7G6w.png");
  const [image4,setImage4]=useState("https://www.kiet.edu/uploads/department/student_club/177900965.jpg");
  const [image5,setImage5]=useState("https://www.kiet.edu/uploads/department/student_club/187446816.jpg");
  const [image2,setImage2]=useState("https://www.kiet.edu/uploads/department/student_club/101602257.jpg");
    const classes = useStyles();
    return (
     <div>
        <div className="list__header">
        <h2>Kiet Club List</h2>
         </div>
         <div className="list">
        
        
         <FlipMove>
         <Grid
      container
      spacing={4}
      className={classes.gridContainer}
      justify="center">
      <Grid item xs={12} sm={6} md={6}>
        <ClubTemp name={name8} Heading={heading} Image4={image3}  /> 
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
      <ClubTemp name={name8} Heading={heading} Image4={image2} /> 
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
      <ClubTemp name={name8} Heading={heading} Image4={image1}  /> 
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
       <ClubTemp name={name8} Heading={heading} Image4={image4}  /> 
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
       <ClubTemp name={name8} Heading={heading} Image4={image5}  /> 
      </Grid>
    </Grid>
    </FlipMove>
         </div>
        </div>
    )
}

export default List;