import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import Dungeon from '../Components/Dungeon.js';
import Battle from '../Components/Battle';
import Armory from '../Components/Armory';
import HighScores from '../Components/HighScores';

export default function MainMenu({}){
    const [showMenu, setShowMenu] = React.useState(true);
    const [showBattle, setShowBattle] = React.useState(false);
    const [showArmory, setShowArmory] = React.useState(false);
    const [showHighScores, setShowHighScores] = React.useState(false);

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
            <div style={{position: 'absolute', left: '50%', top: '50%', backgroundColor: '#F7F1EB', borderRadius: '10px', padding:'5px'}}>
                <h1>DUNGEON CRAWL</h1>
                <Button variant={"outlined"} style={{backgroundColor:"black", color:"#E1ECF7"}} onClick={handleStartGame}>Start Game</Button>
                <div style={{padding: '4px'}}/>
                <Button variant={"outlined"} style={{backgroundColor:"black", color:"#E1ECF7"}} onClick={handleShowArmory}>Armory</Button>
                <div style={{padding: '4px'}}/>
                <Button variant={"outlined"} style={{backgroundColor:"black", color:"#E1ECF7"}} onClick={handleShowHighScores}>High Scores</Button>
            </div>
        )
    }
    else if( showBattle === true )
    {
        return(
            <div style={{position: 'absolute', left: '3%', top: '2%'}}>
                <Button variant={"outlined"} style={{backgroundColor:'#E1ECF7', color:"black"}} onClick={handleReturnToMenu}>Return to Menu</Button>
                <Battle/>
            </div>
        )
    }
    else if( showArmory === true )
    {
        return(
            <div>
                <Button variant={"outlined"} style={{backgroundColor:'#E1ECF7', color:"black"}} onClick={handleReturnToMenu}>Return to Menu</Button>
                <Armory/>
            </div>
        )
    }
    else if( showHighScores === true )
    {
        return(
            <div>
                <Button variant={"outlined"} style={{backgroundColor:'#E1ECF7', color:"black"}} onClick={handleReturnToMenu}>Return to Menu</Button>
                <HighScores/>
            </div>
        )
    }
}