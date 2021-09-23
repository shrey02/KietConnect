import React,{useState} from 'react'
import { NavLink } from 'reactstrap';
import './Profilecard.css'
function Profilecard({name,about,job}){
    

return(
    <div className='profile-card'>
        <div className='upper-container'>
            <div className='image-container'>
                <img src="data:image/jpeg;base64,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 " alt=" " height="100px" width="100px"/>
            </div>
        </div>
        <div className="lower-container">
          <h3>{name}</h3>
<h4>{job}</h4>
<p>{about}</p>

<button className="profile_button" onClick={()=> window.open("https://www.linkedin.com/in/soumyjain/", "_blank")} className="profilebutton">Visit Profile</button>
        </div>
    </div>
)
}
export default Profilecard;