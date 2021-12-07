import React, { useState } from 'react'
import GoogleLogin from 'react-google-login';
import App from '../../App';
const Login = () => {
    const [name, setname] = useState('');
    const [flag, setflag] = useState(false);
    const responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj);
        setname(response.profileObj.name);
        setflag(true);
    }
    return (
        <div className="container">
            <div className='google'>
                <GoogleLogin
                    clientId="446301006294-f4rkinbj1oieb8a1kn0d5cvbita6vuao.apps.googleusercontent.com"
                    buttonText="Sign In With Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
            <div className="showdata">
                {
                    !flag ? <h1>User is Not Login Currently<br />Loading...</h1> : <App name={name} flag={flag} setflag={setflag} />
                }

            </div>
        </div>
    );
}

export default Login
