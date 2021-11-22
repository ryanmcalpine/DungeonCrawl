import * as React from 'react';
import Button from '@mui/material/Button';
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

            <div style={{position: 'absolute', left: '50%', top: '50%'}}>
                <h1>DUNGEON CRAWL</h1>
                <Button variant={"outlined"} onClick={handleStartGame}>Start Game</Button>
                <div/>
                <Button variant={"outlined"} onClick={handleShowArmory}>Armory</Button>
                <div/>
                <Button variant={"outlined"} onClick={handleShowHighScores}>High Scores</Button>
            </div>
        )
    }
    else if( showBattle === true )
    {
        return(
            <div>
                <Button variant={"outlined"} onClick={handleReturnToMenu}>Return to Menu</Button>
                <Battle/>
            </div>
        )
    }
    else if( showArmory === true )
    {
        return(
            <div>
                <Button variant={"outlined"} onClick={handleReturnToMenu}>Return to Menu</Button>
                <Armory/>
            </div>
        )
    }
    else if( showHighScores === true )
    {
        return(
            <div>
                <Button variant={"outlined"} onClick={handleReturnToMenu}>Return to Menu</Button>
                <HighScores/>
            </div>
        )
    }
}