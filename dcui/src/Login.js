import React, {useState, useEffect, Fragment} from 'react';
import API from './API_Interface/API_Interface';

import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';


export default function Login({setUser}) {
    const [userInput, setUserInput] = useState('');
    const [verifyUser, setVerifyUser] = useState(false);
    const [authFailed, setAuthFailed] = useState(false);
    const [newUser, setNewUser] = useState(false);

    const handleInputChange = event => {
        console.log("handleInputChange called.");

//        event.stopPropagation();
//        event.preventDefault();

        setUserInput(event.target.value);
        setAuthFailed(false);

        if(event.key === "Enter") {
            console.log("handleKeyPress: Verify user input.");
        }
    };

    useEffect(() => {
        if( newUser )
        {
            // api.createAccount(userInput);
            setVerifyUser(true);
        }

        if( ! verifyUser || userInput.length === 0)
            return;

        const api = new API();
        async function getUserInfo() {
            api.getUserInfo(userInput)
                .then( userInfo => {
                    console.log(`api returns user info and it is: ${JSON.stringify(userInfo)}`);
                    console.log(`api returns user info and the username is: ${JSON.stringify(userInfo.user.userName)}`);
                    const user = userInfo.user.userName;
                    if( userInfo.status === "OK" ) {
                        setUser(user);
                    } else  {
                        setVerifyUser(false);
                        setAuthFailed(true);
                    }
                });
        }

        getUserInfo();
    }, [verifyUser, setUser, userInput]);


    return (
        <Fragment>
            <Box bgcolor={'#E1ECF7'} padding={'5px'} borderRadius={'6px'} sx={{border:'3px ridge #F4B860'}}>
                <Box display="flex" justifyContent="center" alignItems="center" width="100%" mt={10}>
                    <TextField
                        color='#212738'
                        error={authFailed}
                        id="outlined-error-helper-text"
                        label="Login name"
                        placeholder=""
                        value={userInput}
                        helperText="Only for existing users!"
                        onChange={handleInputChange}
                    />
                    <Divider />
                </Box>

                <Box display="flex" justifyContent="center" alignItems="center" width="100%" mt={2}>
                    <Button
                        style={{backgroundColor:'black', color:'#E1ECF7'}}
                        variant="outlined"
                        size="medium"
                        onClick={() => {setVerifyUser(true)}}
                    >Sign In</Button>
                </Box>

                <Box display="flex" justifyContent="center" alignItems="center" width="100%" mt={2}>
                    <Button
                        style={{backgroundColor:'black', color:"#E1ECF7"}}
                        variant="outlined"
                        size="medium"
                        onClick={() => {setNewUser(true)}}
                    >Create Account</Button>
                </Box>
            </Box>
        </Fragment>

    );
}