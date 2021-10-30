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

    function sleep( ms )
    {
        return new Promise(resolve => setTimeout( resolve, ms ));
    }

    async function handleAttack1()
    {
        if(turn === 1 || endOfRound>0) return;
        setTurn(1);
        //setTimeout(null,1000);
        setStatusBar("Fighter uses [MOVE 1]");
        await sleep(1200);
        setEnemyHP(enemyHP-10);
        await sleep(800);
        setStatusBar("Enemy takes 10 damage!");
        await sleep(2200);
        console.log(`current enemy hp ${enemyHP}`);
        //int damage = move.getDamage()
        //setEnemyHP()
        await handleEndofRound();
        await enemyAttack();
    }
    async function handleAttack2()
    {
        if(turn === 1 || endOfRound >0) return;
        setTurn(1);
        console.log('handle attack 2 called');
        setStatusBar("Fighter uses [MOVE 2]");
        await sleep(1200);
        setEnemyHP(enemyHP-50);
        await sleep(800);
        setStatusBar("Enemy takes 50 damage!");
        await sleep(2200);
        await handleEndofRound();
        await enemyAttack();
    }
    async function handleAttack3()
    {
        if(turn === 1 || endOfRound >0) return;
        setTurn(1);
        console.log('handle attack 3 called');
        setStatusBar("Fighter uses [MOVE 3]");
        await sleep(1200);
        // set enemy hp
        await sleep(800);
        setStatusBar("Enemy takes [DMG] damage!");
        await sleep(2200);
        await handleEndofRound();
        await enemyAttack();
    }
    async function handleAttack4()
    {
        if(turn === 1 || endOfRound >0) return;
        setTurn(1);
        console.log('handle attack 4 called');
        setStatusBar("Fighter uses [MOVE 4]");
        await sleep(1200);
        // set enemy hp
        await sleep(800);
        setStatusBar("Enemy takes [DMG] damage!");
        await sleep(2200);
        await handleEndofRound();
        await enemyAttack();
    }
    async function enemyAttack() {
        if (endOfRound > 0) return;
        setStatusBar("ENEMY TURN");
        console.log('enemy attack called');
        await sleep(2200);
        setStatusBar("Slime uses TACKLE");
        await sleep(1300);
        // Get randomized damage value
        let dmgMin = 6;
        let dmgMax = 11;
        let dmg = Math.floor(Math.random() * (dmgMax - dmgMin) + dmgMin);
        setFighterHP(fighterHP - dmg);
        await sleep(1000);
        setStatusBar(`Fighter takes ${dmg} damage!`);
        await sleep(2500)
        //setTimeout(null,500);
        await handleEndofRound();
        if (endOfRound === 0)
        {
            setTurn(0);
            setStatusBar("Player Turn!");
        }

    }
    async function handleEndofRound()
    {
        setEndOfRound(3);
        console.log(`handle end of round called`);
        console.log(`enemy hp ${enemyHP}`);
        console.log(enemyHP <= 0);
        if(fighterHP <=0)
        {
            setEndOfRound(2);
            setStatusBar("YOUR PARTY HAS BEEN DEFEATED!");
            await sleep(2500)
        }
        else if(enemyHP <= 0)
        {
            console.log(`enemy should be dead`);
            setEndOfRound(1);
            setStatusBar("YOU WON!");
            await sleep(2500)
        }
        else setEndOfRound(0);

    }
    /*const handleEndofRound = () =>
    {
        console.log('handle end of turn is called');
        if(fighterHP <=0)
        {
            setEndOfRound(2);
            setStatusBar("YOUR PARTY HAS BEEN DEFEATED!");
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
        }
    }*/
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
