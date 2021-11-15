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
    const [animationStep, setAnimationStep] = useState(0); // 0 = idle, 1 = attack
    const [enemyAnimationStep, setEnemyAnimationStep] = useState(0);
    const [hasUsedMove, setHasUsedMove] = useState(false);

    function sleep( ms )
    {
        return new Promise(resolve => setTimeout( resolve, ms ));
    }
     useEffect(() =>
    {
        console.log(`handle end of round called`);
        console.log(`enemy hp ${enemyHP}`);
        console.log(enemyHP <= 0);
        if(fighterHP <=0)
        {
            setEndOfRound(2);
            setStatusBar("YOUR PARTY HAS BEEN DEFEATED!");
            //await sleep(2500)
        }
        else if(enemyHP <= 0)
        {
            console.log(`enemy should be dead`);
            setEndOfRound(1);
            setStatusBar("YOU WON!");
            //await sleep(2500)
        }
        else setEndOfRound(0);
        console.log(`end of round: ${endOfRound}`);
        return endOfRound;
        }, [fighterHP,endOfRound,enemyHP]);

    async function handleAttack1()
    {
        if(turn === 1 || endOfRound>0) return;

        setHasUsedMove(true);

        setTurn(1);
        //setTimeout(null,1000);
        setStatusBar("Fighter uses [MOVE 1]");
        setAnimationStep(1);
        await sleep(1200);
        setEnemyHP(enemyHP-10);
        await sleep(800);
        setStatusBar("Enemy takes 10 damage!");
        setAnimationStep(0);
        await sleep(2200);
        console.log(`current enemy hp ${enemyHP}`);
        //int damage = move.getDamage()
        //setEnemyHP()
        //await handleEndofRound();
        //if(enemyHP-10>0)await enemyAttack();
        //else handleEndofRound();
    }
    async function handleAttack2()
    {
        if(turn === 1 || endOfRound >0) return;

        setHasUsedMove(true);

        setTurn(1);
        console.log('handle attack 2 called');
        setStatusBar("Fighter uses [MOVE 2]");
        setAnimationStep(1);
        await sleep(1200);
        setEnemyHP(enemyHP-50);
        await sleep(800);
        setStatusBar("Enemy takes 50 damage!");
        setAnimationStep(0);
        await sleep(2200);
        //await handleEndofRound();
       //if(enemyHP-50>0) await enemyAttack();
       //else handleEndofRound();
    }
    async function handleAttack3()
    {
        if(turn === 1 || endOfRound >0) return;

        setHasUsedMove(true);

        setTurn(1);
        console.log('handle attack 3 called');
        setStatusBar("Fighter uses [MOVE 3]");
        setAnimationStep(1);
        await sleep(1200);
        // set enemy hp
        await sleep(800);
        setStatusBar("Enemy takes [DMG] damage!");
        setAnimationStep(0);
        await sleep(2200);
        //await handleEndofRound();
        //await enemyAttack();
    }
    async function handleAttack4()
    {
        if(turn === 1 || endOfRound >0) return;

        setHasUsedMove(true);

        setTurn(1);
        console.log('handle attack 4 called');
        setStatusBar("Fighter uses [MOVE 4]");
        setAnimationStep(1);
        await sleep(1200);
        // set enemy hp
        await sleep(800);
        setStatusBar("Enemy takes [DMG] damage!");
        setAnimationStep(0);
        await sleep(2200);
        //await handleEndofRound();
        //await enemyAttack();
    }
    async function enemyAttack() {
        setEndOfRound();
        console.log(`end of round: ${endOfRound}`);
        if (endOfRound > 0) return;
        setStatusBar("ENEMY TURN");
        console.log('enemy attack called');
        console.log(`end of round: ${endOfRound}`);
        await sleep(2200);
        setStatusBar("Slime uses TACKLE");
        setEnemyAnimationStep(1);
        await sleep(1300);
        // Get randomized damage value
        let dmgMin = 6;
        let dmgMax = 11;
        let dmg = Math.floor(Math.random() * (dmgMax - dmgMin) + dmgMin);
        setFighterHP(fighterHP - dmg);
        await sleep(1000);
        setStatusBar(`Fighter takes ${dmg} damage!`);
        setEnemyAnimationStep(0);
        await sleep(2500)
        setTimeout(null,500);
        await handleEndofRound();
        if (fighterHP -dmg>0)
        {
            setTurn(0);
            setStatusBar("Player Turn!");
        }
        else handleEndofRound();

    }
    async function handleEndofRound()
    {
        setEndOfRound(3);
        setHasUsedMove(false);
        console.log(`handle end of round called`);
        console.log(`enemy hp ${enemyHP}`);
        console.log(enemyHP <= 0);
        if(fighterHP <=0)
        {
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
    async function endTurn()
    {
        await handleEndofRound();
        await enemyAttack();

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
                    <Actor sprite={testFighter} data={spriteData} step={animationStep} />
                </div>
                <div style={{
                    position: 'absolute',
                    top: 220,
                    left:740
                }}>
                    <Actor sprite={testSlime} data={spriteData} step={enemyAnimationStep} />
                </div>
                <div style={{
                    position: 'absolute',
                    top: 580,
                    left: 570
                }}>
                    {statusBar}
                </div>
                <div style={{
                    position: 'absolute',
                    top: 580,
                    left: 320
                }}>
                    fighterHP: {fighterHP}
                </div>
                <div style={{
                    position: 'absolute',
                    top: 580,
                    left: 780
                }}>
                    enemyHP: {enemyHP}
                </div>

                <div style={{
                    position: 'absolute',
                    top: 620,
                    left:300
                }}>
                    {hasUsedMove ? (
                        <Button onClick={handleAttack1} variant="outlined" disabled>Attack 1</Button>
                    ) : (
                        <Button onClick={handleAttack1} variant="outlined">Attack 1</Button>
                    )
                    }
                    {hasUsedMove ? (
                        <Button onClick={handleAttack2} variant="outlined" disabled>Attack 2</Button>
                    ) : (
                        <Button onClick={handleAttack2} variant="outlined">Attack 2</Button>
                    )
                    }
                    <div />
                    {hasUsedMove ? (
                        <Button onClick={handleAttack3} variant="outlined" disabled>Attack 3</Button>
                    ) : (
                        <Button onClick={handleAttack3} variant="outlined">Attack 3</Button>
                    )
                    }
                    {hasUsedMove ? (
                        <Button onClick={handleAttack4} variant="outlined" disabled>Attack 4</Button>
                    ) : (
                        <Button onClick={handleAttack4} variant="outlined">Attack 4</Button>
                    )
                    }
                </div>
                <div style={{
                    position: 'absolute',
                    top: 620,
                    left: 560
                }}>
                    <Button onClick={endTurn} variant="outlined">End Turn</Button>
                </div>
                <div style={{
                    position: 'absolute',
                    top: 620,
                    left: 740
                }}>
                    <Button onClick={endTurn} variant="outlined">Inventory</Button>
                </div>
                <div style={{
                    position: 'absolute',
                    top: 657,
                    left: 740
                }}>
                    <Button onClick={endTurn} variant="outlined">Party Members</Button>
                </div>
            </div>
        }
    </Fragment>
}
