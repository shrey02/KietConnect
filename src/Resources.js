import React,{useState} from 'react'
import  "./Resources.css";
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

function Resources() {
  const [name9,setName]=useState('Code');
  const [heading2,setHeading]=useState("Coding Question");
  const [image33,setImage13]=useState("https://media.geeksforgeeks.org/wp-content/cdn-uploads/histogram1.png");
  const [image13,setImage33]=useState("https://cdn.programiz.com/sites/tutorial2program/files/build-max-heap-2_01.png");
  const [image43,setImage43]=useState("https://www.topcoder.com/wp-content/uploads/2017/07/binary-search.png");
  const [image53,setImage53]=useState("https://leetcode.com/problems/trapping-rain-water/Figures/42/trapping_rain_water.png");
  const [image23,setImage23]=useState("https://d3n817fwly711g.cloudfront.net/blog/wp-content/uploads/2017/11/Concept-Map-Example-on-Concept-Mapping.png");
    
  const classes = useStyles();
    return (
       <div>
       
       <div className="reed__header">
        <h2>Resources</h2>
         </div>
         <div className="resource">

    <div>
       
        
         <FlipMove>
         <Grid
      container
      spacing={4}
      className={classes.gridContainer}
      justify="center">
      <Grid item xs={12} sm={6} md={12}>
        <ClubTemp name={name9} Heading={heading2} Image4={image33} /> 
      </Grid>
      <Grid item xs={12} sm={6} md={12}>
      <ClubTemp name={name9} Heading={heading2} Image4={image23}/> 
      </Grid>
      <Grid item xs={12} sm={6} md={12}>
      <ClubTemp name={name9} Heading={heading2} Image4={image13} /> 
      </Grid>
      <Grid item xs={12} sm={6} md={12}>
       <ClubTemp name={name9} Heading={heading2} Image4={image43} /> 
      </Grid>
      <Grid item xs={12} sm={6} md={12}>
       <ClubTemp name={name9} Heading={heading2} Image4={image53} /> 
      </Grid>
    </Grid>
    </FlipMove>
         </div>
        </div>
        </div>
    )
}

export default Resources;