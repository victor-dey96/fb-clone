import React from 'react'
import './Login.css'
import {Button} from '@material-ui/core'
import {auth, provider} from './firebase';
import {actionTypes} from './reducer'
import {useStateValue} from './StateProvider'

function Login() {

    const [state, dispatch] = useStateValue();
    
    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => { 
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
                console.log(result.user.displayName);
        })
        .catch((error) => alert(error.message))
    }

    return (
        <div className='Login'>
            <div className="login_logo">
                <img 
                    src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" 
                    alt="Facebook Logo"
                />
                <img 
                src ="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                alt="Facebook Word Logo" 

                />
            </div>
            <Button type='submit' onClick={signIn}
            >
                Sign In
            </Button>
        </div>
    )
}

export default Login
