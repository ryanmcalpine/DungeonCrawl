import React, {useState, useEffect, Fragment} from 'react';
import Button from '@mui/material/Button';
import color from "color";

import Actor from "./Actor";
import forest from './sprites/backgrounds/Forest.png';
import testFighter from './sprites/player/test-fighter.png';
import testSlime from './sprites/enemy/test-slime.png';


export default function Battle(props)
{
    const [enemyHP,setEnemyHP] = useState(50);
    const [fighterHP,setFighterHP] = useState(50);
    const [rogueHP,setRogueHP] = useState(50);
    const [mageHP,setMageHP] = useState(50);
    const [statusBar,setStatusBar] = useState("Sic em!");
    const [endOfRound, setEndOfRound] = useState(0);
    // 0 -> game is still going, 1 -> enemy died, 2 -> we died ;-;
    const [turn,setTurn] = useState(0);//0 -> players turn 1->enemy's turn
    const handleAttack1 = () =>
    {
        if(turn === 1) return;
        //setTimeout(null,1000);
        setStatusBar("Fighter uses [movename]");
        setTimeout(null,1000);
        setTimeout(setEnemyHP(enemyHP-10),1500);
        setStatusBar("Enemy took 10 damage!");
        setTimeout(null,1000);
        console.log(`current enemy hp ${enemyHP}`);
        //int damage = move.getDamage()
        //setEnemyHP()
        handleEndofRound();
        setTurn(1);
        setTimeout(enemyAttack,1500);
    }
    const handleAttack2 = () =>
    {
        if(turn === 1) return;
        console.log('handle attack 2 called');
        setStatusBar("Fighter uses [movename]");
        setStatusBar("Enemy takes [DMG] damage!");
        handleEndofRound();
    }
    const handleAttack3 = () =>
    {
        if(turn === 1) return;
        console.log('handle attack 3 called');
        setStatusBar("Fighter uses [movename]");
        setStatusBar("Enemy takes [DMG] damage!");
        handleEndofRound();
    }
    const handleAttack4 = () =>
    {
        if(turn === 1) return;
        console.log('handle attack 4 called');
        setStatusBar("Fighter uses [movename]");
        setTimeout(null,500);
        setStatusBar("Enemy takes [DMG] damage!");
        handleEndofRound();
    }
    const enemyAttack = () =>
    {
        console.log('enemy attack called');
        setTimeout(null,500);
        setStatusBar("Slime uses tackle!");
        setTimeout(null,500);
        setFighterHP(fighterHP-10);
        setStatusBar("Fighter takes 10 damage!");
        setTimeout(null,500);
        handleEndofRound();
        setTurn(0);
    }
    const handleEndofRound = () =>
    {
        console.log('handle end of turn is called');
        if(fighterHP <=0)
        {
            setEndOfRound(2);
            setStatusBar("YOU DIED");
        }
        else if(enemyHP <= 0)
        {
            setEndOfRound(1);
            setStatusBar("YOU WON!");
        }
        else setEndOfRound(0);
        //console.log(`turn is ${turn}`);
        /*if(turn === 0)
        {
            //console.log(`hewooooooooooooo`);
            setTurn(1);
            //console.log(`turn should be 1: ${turn}`);
            setTimeout(enemyAttack,1500);

        }
        else if(turn === 1)
        {
            setTurn(0);
        }*/
    }
    const spriteData = {
        w: 160,
        h: 200
    }
    return <Fragment>
        {
            <div style={{
                backgroundImage: `url(${forest})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height:'540px',
                width:'1250px',
                }}>
                <div style={{
                    position: 'absolute',
                    top: 220,
                    left: 300
                }}>
                    <Actor sprite={testFighter} data={spriteData} />
                </div>
                <div style={{
                    position: 'absolute',
                    top: 220,
                    left:740
                }}>
                    <Actor sprite={testSlime} data={spriteData} />
                </div>
                <div style={{
                    position: 'absolute',
                    top: 550,
                    left:520
                }}>
                    {statusBar}
                </div>
                <div style={{
                    position: 'absolute',
                    top: 550,
                    left:320
                }}>
                    fighterHP: {fighterHP}
                </div>
                <div style={{
                    position: 'absolute',
                    top: 550,
                    left:820
                }}>
                    enemyHP: {enemyHP}
                </div>

                <div style={{
                    position: 'absolute',
                    top: 600,
                    left:180
                }}>
                    <Button onClick={handleAttack1} variant="outlined">Attack 1</Button>
                    <Button onClick={handleAttack2} variant="outlined">Attack 2</Button>
                    <div />
                    <Button onClick={handleAttack3} variant="outlined">Attack 3</Button>
                    <Button onClick={handleAttack4} variant="outlined">Attack 4</Button>
                </div>
            </div>
        }
    </Fragment>
}
