import * as React from 'react';
import Button from '@mui/material/Button';
import Dungeon from '../Components/Dungeon.js';
import Battle from '../Components/Battle';

export default function MainMenu({}){
    const [showMenu, setShowMenu] = React.useState(true);
    const [showBattle, setShowBattle] = React.useState(false);
    const [showArmory, setShowArmory] = React.useState(false);

    const handleStartGame = () => {
        setShowMenu(false);
        setShowBattle(true);
    }
    const handleEndGame = () => {
        setShowMenu(true);
        setShowBattle(false);
    }

    if( showMenu === true )
    {
        return(

            <div style={{position: 'absolute', left: '50%', top: '50%'}}>
                <h1>DUNGEON CRAWL</h1>
                <Button variant={"outlined"} onClick={handleStartGame}>Start Game</Button>
                <div/>
                <Button variant={"outlined"}>Armory</Button>
            </div>
        )
    }
    else if( showBattle === true )
    {
        return(
            <div>
                <Button variant={"outlined"} onClick={handleEndGame}>Return to Menu</Button>
                <Battle/>
            </div>
        )
    }

}