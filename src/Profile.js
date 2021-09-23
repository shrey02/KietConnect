import React,{useState} from 'react'
import "./Profile.css"
import Profilecard from "./Profilecard";

function Profile() {
    const [name,setName]=useState('Shrey Sinha');
    const [job,setJob]=useState('2nd Year IT C');
    const [about,setAbout]=useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.");
    const [name2,setName2]=useState('Umang Goel');
    const [job2,setJob2]=useState("2nd Year IT C");
  
    return (
        <div>
             <div className="Pro__head">
        <h2>Creators Profile</h2>
         </div>
             <div className='Profile'>
            
        
      <Profilecard name={name} job={job} about={about}/> 
      <Profilecard name={name2} job={job2} about={about}/> 
        </div>
        </div>
    )
}

export default Profile;
