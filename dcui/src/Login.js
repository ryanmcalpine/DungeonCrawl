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

    function handleCreateAccount()
    {
        if( userInput.length === 0 )
            return;

        const api = new API();
        api.createAccount(userInput);
    }

    useEffect(() => {
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
    }, [verifyUser, setUser, userInput, newUser]);


    return (
        <Fragment>
            <div style={{padding:'3%'}}>
            <Box align={"center"} justifyContent={"center"} bgcolor={'#E1ECF7'} padding={'5px'} borderRadius={'6px'} sx={{border:'3px ridge #F4B860', width:'50%', padding:'5%'}} m={"auto"}>
                <div style={{textAlign:'center', align:'center', alignItems:'center', justifyContent:'center'}}>
                    <h1 style={{align:'center', mt:'1', ml:'auto', color:'#F4B860', outlineStyle:'outset', outlineColor:'#F4B860', backgroundColor:'#212738', borderRadius:'5px', padding:'5px', textAlign:'center'}}>DUNGEON CRAWL</h1>
                </div>
                <Box display="flex" justifyContent="center" alignItems="center" width="100%" mt={8}>
                    <TextField
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
                        style={{backgroundColor:'black', color:'#E1ECF7', width:'40%', marginTop:'3%'}}
                        variant="outlined"
                        size="medium"
                        onClick={() => {setVerifyUser(true)}}
                    >Sign In</Button>
                </Box>

                <Box display="flex" justifyContent="center" alignItems="center" width="100%" mt={1}>
                    <Button
                        style={{backgroundColor:'black', color:"#E1ECF7", width:"40%", marginTop:'3%'}}
                        variant="outlined"
                        size="medium"
                        onClick={() => {handleCreateAccount()}}
                    >Create Account</Button>
                </Box>
            </Box>
            </div>
        </Fragment>

    );
}