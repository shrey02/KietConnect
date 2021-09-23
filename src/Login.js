import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            });
        }).catch(error => alert(error.message))
    };
    return (
        
        <div className="login__bg">
        <div className="pimg1">
          <div className="ptext">
            <span className="border">
              KIET CONNECT
            </span>
          </div>
        </div>  
        <section className="section section-light">
          <h2>LET US UNITE KIET</h2>
          <p>
            PUT ON YOUR OXYGEN MASK UP ,TAKE A DEEP BREATHE AND JUMP INTO THE SEA OF KIET CLUBS !!
          </p>
        </section>
        <div className="pimg2">
          <div className="ptext2">
            <span className="border">
                        GET SET CLICK....... 
            </span>	
          </div>
        </div>
        <div className="pimg1">
          <div className="ptext">
            <span className="border">
              <Button type="submit" onClick={signIn}>Login using Google</Button>
            </span>	
          </div>
        </div> 
      </div>
         
    )
}

export default Login
