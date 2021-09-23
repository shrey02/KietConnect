
import React,{useState} from 'react'
import "./ListOfMembers.css"
import Profilecard from "./Profilecard";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
    gridContainer: {
      paddingLeft: "45px",
      paddingRight: "40px"
    }
  });
function ListOfMembers() {
    const classes = useStyles();
    const [name1,setName]=useState('Avanish Dixit');
    const [job1,setJob]=useState("IT 3rd year");
    const [about1,setAbout]=useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.");
    const [name3,setName2]=useState('Rupam Karmakar');
    const [job3,setJob2]=useState("IT 3rd year");
    const [name4,setName3]=useState('Rahul Verma');
    const [job4,setJob3]=useState("IT 3rd year");
    const [name5,setName4]=useState('Soumy Jain');
    const [job5,setJob4]=useState("IT 2nd year");
    const [name6,setName5]=useState('Divyank Goel');
    const [job6,setJob5]=useState("IT 2nd year");
  
    return (
        <div>
        <div className='ListProfile'>
        <div className="List__head">
        <h2>Code IT Members</h2>
         </div>
        
        <Grid
      container
      spacing={2}
      className={classes.gridContainer}
      justify="center">
        <Grid item xs={6} sm={6} md={6}>
 <Profilecard name={name1} job={job1} about={about1}/> 

 </Grid>
 <Grid item xs={6} sm={6} md={6}>
 
 <Profilecard name={name3} job={job3} about={about1}/>
 </Grid>
 <Grid item xs={6} sm={6} md={6}>
 <Profilecard name={name4} job={job4} about={about1}/>
 </Grid>
 <Grid item xs={6} sm={6} md={6}>
 <Profilecard name={name5} job={job5} about={about1}/> 
 </Grid>
 <Grid item xs={6} sm={6} md={6}>
 <Profilecard name={name6} job={job6} about={about1}/>
   </Grid>
   </Grid>
   </div>
   </div>
    )
}

export default ListOfMembers
