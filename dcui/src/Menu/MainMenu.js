import * as React from 'react';
import Button from '@mui/material/Button';
import {Avatar} from "@mui/material";
import Box from '@mui/material/Box';
import {useEffect} from "react";

import API from '../API_Interface/API_Interface';
import Dungeon from '../Components/Dungeon.js';
import Battle from '../Components/Battle';
import Armory from '../Components/Armory';
import HighScores from '../Components/HighScores';

import goldIcon from '../Components/sprites/ui/GoldenCoin.png';
import helmIcon from '../Components/sprites/ui/Helm.png';

export default function MainMenu({user, logoutAction}){
    const [showMenu, setShowMenu] = React.useState(true);
    const [showBattle, setShowBattle] = React.useState(false);
    const [showArmory, setShowArmory] = React.useState(false);
    const [showHighScores, setShowHighScores] = React.useState(false);
    const [username, setUsername] = React.useState("username");
    const [goldAmount, setGoldAmount] = React.useState(0);

    useEffect(() => {
        const api = new API();

        async function getUserInfo() {
            //const usernameJSONString = await api.getUser(user);
            //console.log(`MainMenu.js:: username from the DB ${JSON.stringify(usernameJSONString)}`);
            //setUsername(usernameJSONString.data)
            setUsername(user);
            //console.log(`username is ${username}`);
            const goldJSONString = await api.getGold(user);
            console.log(`MainMenu.js:: current gold amount from the DB ${JSON.stringify(goldJSONString.data[0])}`);
            setGoldAmount(goldJSONString.data[0].gold);
        }

        getUserInfo();
    }, []);

    const handleStartGame = () => {
        setShowMenu(false);
        setShowBattle(true);
    }
    const handleShowArmory = () => {
        setShowMenu(false);
        setShowArmory(true);
    }
    const handleShowHighScores = () => {
        setShowMenu(false);
        setShowHighScores(true);
    }
    const handleReturnToMenu = () => {
        setShowMenu(true);
        setShowBattle(false);
        setShowArmory(false);
        setShowHighScores(false);
    }

    if( showMenu === true )
    {
        return(
            <div style={{
                width:'50%',
                position: 'absolute',
                left: '20%', top: '8%',
                outlineStyle:'groove',
                outlineColor:'#F4B860',
                backgroundColor: '#E1ECF7',
                borderRadius: '10px',
                padding:'3%',
                alignItems:'center',
                justifyContent:'center'

            }}>
                <h1 style={{
                    color:'#F4B860',
                    outlineStyle:'outset',
                    outlineColor:'#F4B860',
                    backgroundColor:'#212738',
                    borderRadius:'5px',
                    padding:'5px',
                    textAlign:'center'
                }}>
                    DUNGEON CRAWL
                </h1>
                <div style={{position:'relative', padding:'4%'}}/>
                <Button variant={"outlined"} style={{position:'relative', top:'-12%', left:'10%', backgroundColor:"black", color:"#E1ECF7", width:'40%', height:'50px'}} onClick={handleStartGame}>Start Game</Button>
                <div style={{position:'relative', marginLeft:'65%', top:'31%', display:'flex', alignItems:'center'}}>
                    <Avatar src={helmIcon} />
                    <span>{username}</span>
                </div>
                <Button variant={"outlined"} style={{position:'relative', top:'-12%', left:'10%', backgroundColor:"black", color:"#E1ECF7", width:'40%', height:'50px'}} onClick={handleShowArmory}>Armory</Button>
                <div style={{position:'relative', marginLeft:'65%', top:'41%', display:'flex', alignItems:'center'}}>
                    <Avatar src={goldIcon} />
                    <span>{goldAmount}</span>
                </div>
                <Button variant={"outlined"} style={{position:'relative', top:'-12%', left:'10%', backgroundColor:"black", color:"#E1ECF7", width:'40%', height:'50px'}} onClick={handleShowHighScores}>High Scores</Button>
            </div>
        )
    }
    else if( showBattle === true )
    {
        return(
            <div style={{position: 'absolute', left: '3%', top: '2%'}}>
                <Button variant={"outlined"} style={{backgroundColor:'#E1ECF7', color:"black"}} onClick={handleReturnToMenu}>Return to Menu</Button>
                <span style={{position:'absolute', left:'490px', top:'-28px', color:'#E1ECF7'}}><h1>DUNGEON CRAWL</h1></span>
                <Battle user={username} />
            </div>
        )
    }
    else if( showArmory === true )
    {
        return(
            <div>
                <Button variant={"outlined"} style={{position:'absolute', left:'3%', top:'3%', backgroundColor:'#E1ECF7', color:"black"}} onClick={handleReturnToMenu}>Return to Menu</Button>
                <span style={{position:'absolute', left:'45%', top:'-.7%', color:'#E1ECF7'}}><h1>ARMORY</h1></span>
                <Armory user={username} />
            </div>
        )
    }
    else if( showHighScores === true )
    {
        return(
            <div style={{position: 'absolute', left: '3%', top: '2%'}}>
                <Button variant={"outlined"} style={{backgroundColor:'#E1ECF7', color:"black"}} onClick={handleReturnToMenu}>Return to Menu</Button>
                <span style={{position:'relative', left:'37%', top:'-5%', color:'#E1ECF7'}}><h1>DUNGEON CRAWL</h1></span>
                <div style={{position: 'relative', left: '5%', top: '6%'}}>
                    <HighScores/>
                </div>
            </div>
        )
    }
}