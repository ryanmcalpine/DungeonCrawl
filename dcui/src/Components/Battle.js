import React, {useState, useEffect, Fragment} from 'react';
import Button from '@mui/material/Button';
import {Avatar} from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

import Actor from "./Actor";
import cave from './sprites/backgrounds/Cave.png';
import field from './sprites/backgrounds/Field.png';
import lavaCave from './sprites/backgrounds/Lava_Cave.png';
import lavaMountain from './sprites/backgrounds/Lava_Mountain.png';
import snowMountain from './sprites/backgrounds/Snow_Mountain.png';
import forest from './sprites/backgrounds/Forest.png';
import testFighter from './sprites/player/fighter_crusader.png';
import testRogue from './sprites/player/rogue_thief.png';
import testSorc from './sprites/player/sorceress_mage.png';
import slime from './sprites/enemy/test-slime.png';
import bat from './sprites/enemy/bat.png';
import beholder from './sprites/enemy/beholder.png';
import crow from './sprites/enemy/crow.png';
import cyclops from './sprites/enemy/cyclops.png';
import demon from './sprites/enemy/demon.png';
import ghost from './sprites/enemy/ghost.png';
import goblin from './sprites/enemy/goblin.png';
import orc from './sprites/enemy/orc.png';
import rat from './sprites/enemy/rat.png';
import skeleton from './sprites/enemy/skeleton.png';
import worm from './sprites/enemy/worm.png';
import zombie from './sprites/enemy/zombie.png';
import inventoryIcon from './sprites/ui/Bag.png';
import heartIcon from './sprites/ui/Heart.png';

import testVFX from './sprites/vfx/Cartoon_FX9_idle_5.png';
import goldIcon from "./sprites/ui/GoldenCoin.png";
import API from "../API_Interface/API_Interface";

export default function Battle(user)
{
    const [enemyHP,setEnemyHP] = useState(50);
    const [fighterHP,setFighterHP] = useState(500000);
    const [rogueHP,setRogueHP] = useState(50);
    const [sorceressHP,setSorceressHP] = useState(50);
    const [statusBar,setStatusBar] = useState("Sic 'em!");
    const [endOfRound, setEndOfRound] = useState(0);
    // 0 -> game is still going, 1 -> enemy died, 2 -> we died ;-;
    const [turn,setTurn] = useState(0);//0 -> players turn 1->enemy's turn
    const [animationStep, setAnimationStep] = useState(0); // 0 = idle, 1 = attack
    const [enemyAnimationStep, setEnemyAnimationStep] = useState(0);
    const [stage,setStage] = useState(0);
    const [defeated,setDefeated] = useState(0);
    const [currEnemy,setCurrEnemy] = useState(0);
    const stages = [field,forest,cave,lavaMountain,snowMountain,lavaCave];
    const enemies = [slime,bat,crow,rat,goblin,worm,cyclops,demon,ghost,orc,skeleton,zombie,beholder];
    const enemyNames = ["Slime","Bat","Crow","Rat", "Gerblin","Wurm","Cyclops","Duo Mobile [demon]",
        "Ghost of Christmas Past","Orc","Skellington","Nicholas Ivanov","Hermaeus Mora"];
    const [hasUsedMove, setHasUsedMove] = useState(false);  // for use in enabling/disabling buttons
    const [currentCharacter, setCurrentCharacter] = useState(0);
    const [hasSwappedCharacter, setHasSwappedCharacter] = useState(false);  // for enabling/disabling button

    const [showVFX, setShowVFX] = useState(false);
    const [VFXSprite, setVFXSprite] = useState("");

    const [fHealthPercent, setFHealthPercent] = useState(100);  // Fighter health as percentage of max
    const [rHealthPercent, setRHealthPercent] = useState(100);  // Rogue health as percentage of max
    const [sHealthPercent, setSHealthPercent] = useState(100);  // Sorceress health as percentage of max
    const [eHealthPercent, setEHealthPercent] = useState(100);  // Enemy health as percentage of max

    const [hasBeenInitialized, setHasBeenInitialized] = useState(false);
    const [fighterSpritePath, setFighterSpritePath] = useState('./sprites/player/fighter_folk.png');
    const [rogueSpritePath, setRogueSpritePath] = useState('./sprites/player/rogue_folk.png');
    const [sorceressSpritePath, setSorceressSpritePath] = useState('./sprites/player/sorceress_folk.png');
    const [className, setClassName] = useState("Fighter");
    const [fighterMaxHP, setFighterMaxHP] = useState(20);
    const [fighterPA, setFighterPA] = useState(5);
    const [fighterMA, setFighterMA] = useState(5);
    const [fighterPD, setFighterPD] = useState(5);
    const [fighterMD, setFighterMD] = useState(5);
    const [fighterSPD, setFighterSPD] = useState(10);
    const [rogueMaxHP, setRogueMaxHP] = useState(20);
    const [roguePA, setRoguePA] = useState(5);
    const [rogueMA, setRogueMA] = useState(5);
    const [roguePD, setRoguePD] = useState(5);
    const [rogueMD, setRogueMD] = useState(5);
    const [rogueSPD, setRogueSPD] = useState(10);
    const [sorceressMaxHP, setSorceressMaxHP] = useState(20);
    const [sorceressPA, setSorceressPA] = useState(5);
    const [sorceressMA, setSorceressMA] = useState(5);
    const [sorceressPD, setSorceressPD] = useState(5);
    const [sorceressMD, setSorceressMD] = useState(5);
    const [sorceressSPD, setSorceressSPD] = useState(10);
    const [enemyMaxHP, setEnemyMaxHP] = useState(20);
    const [enemyPA, setEnemyPA] = useState(5);
    const [enemyMA, setEnemyMA] = useState(5);
    const [enemyPD, setEnemyPD] = useState(5);
    const [enemyMD, setEnemyMD] = useState(5);
    const [enemySPD, setEnemySPD] = useState(10)

    const [username, setUsername] = React.useState(user.user);
    const [goldAmount, setGoldAmount] = useState(0);

    function sleep( ms )    // Pause program execution for duration in milliseconds
    {
        return new Promise(resolve => setTimeout( resolve, ms ));
    }

     useEffect(() =>
    {
        if( hasBeenInitialized === false )
        {
            const api = new API();

            async function getUserInfo() {
                const goldJSONString = await api.getGold(user);
                setGoldAmount(goldJSONString.data[0].gold);

                // TODO: API call to UsersDB find currently equipped armor sets
                const feq = await api.getFighterEquipped(username);
                const fsp = await api.getArmor( feq.data[0].fighterEquipped );
                console.log(`Battle.js:: Fsp = ${fsp.data[0].fighterEquipped}`);
                setFighterSpritePath( fsp.data[0].spritePath );
                console.log(`Battle.js:: Fighter sprite path = ${fighterSpritePath}`);
                // setRogueSpritePath(  );
                // setSorceressSpritePath(  );

                // TODO: API call to ArmorDB to get stats for equipped armor sets

                // setFighterMaxHP(  );
                // setFighterPA(  );
                // setFighterMA(  );
                // setFighterPD(  );
                // setFighterMD(  );
                // setFighterSPD(  );

                // setRogueMaxHP(  );
                // setRoguePA(  );
                // setRogueMA(  );
                // setRoguePD(  );
                // setRogueMD(  );
                // setRogueSPD(  );

                // setSorceressMaxHP(  );
                // setSorceressPA(  );
                // setSorceressMA(  );
                // setSorceressPD(  );
                // setSorceressMD(  );
                // setSorceressSPD(  );

                // TODO: API call to MonstersDB to get stats for first enemy

                // setEnemyMaxHP(  );
                // setEnemyPA(  );
                // setEnemyMA(  );
                // setEnemyPD(  );
                // setEnemyMD(  );
                // setEnemySPD(  );
            }

            getUserInfo();
            setHasBeenInitialized(true);
        }

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

    // WIP Attempt to make one function to handle all attacks
    async function handleAttack( idx )  // idx = 0-3 for attack buttons
    {
        if(turn === 1 || endOfRound>0) return;

        setHasUsedMove(true);

        // TODO: Moves DB API call here to get JSON string

        // Get the name in string to use in status bar
        switch (currentCharacter) {
            case 0:
                setClassName("Fighter");
                break;
            case 1:
                setClassName("Rogue");
                break;
            case 2:
                setClassName("Sorceress");
        }

        setAnimationStep(1);
        // setVFXSprite("./sprites/vfx/" + "Cartoon_FX9_idle_5.png");    // TODO: JSON data
        setVFXSprite(testVFX);
        setShowVFX(true);
        await sleep(1200);
        setShowVFX(false);

        // Calculate damage to deal
        if( true ) // if moveType === magic
        {
            // Use Magic Atk/Def for calculations
        }
        else    // strong and fast both use Physical Attack/Defense
        {

        }

        setEnemyHP(enemyHP-10); // TODO: get damage amount from JSON
        setEHealthPercent( (enemyHP/enemyMaxHP) * 100 );
        await sleep(800);
        setStatusBar("Enemy takes 10 damage!"); // TODO: you get the idea
        setAnimationStep(0);
        await sleep(2200);
        console.log(`current enemy hp ${enemyHP}`);
    }

    async function handleAttack1()
    {
        if(turn === 1 || endOfRound>0) return;

        setHasUsedMove(true);

        // TODO: One Moves DB API call here to get JSON string

        //setTimeout(null,1000);
        // TODO: get move name from JSON
        switch (currentCharacter) {
            case 0:
                setStatusBar("Fighter uses [MOVE 1]");
                break;
            case 1:
                setStatusBar("Rogue uses [MOVE 1]");
                break;
            case 2:
                setStatusBar("Sorceress uses [MOVE 1]");
        }
        setAnimationStep(1);
        //setVFXSprite("./sprites/vfx/" + "Cartoon_FX9_idle_5.png");    // TODO: JSON data after the +
        setVFXSprite(testVFX);
        setShowVFX(true);
        await sleep(1200);
        setShowVFX(false);
        setEnemyHP(enemyHP-10); // TODO: get damage amount from JSON
        setEHealthPercent( (enemyHP/enemyMaxHP) * 100 );
        await sleep(800);
        setStatusBar("Enemy takes 10 damage!"); // TODO: you get the idea
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

        console.log('handle attack 2 called');
        switch (currentCharacter) {
            case 0:
                setStatusBar("Fighter uses DEV ONE HITTER");
                break;
            case 1:
                setStatusBar("Rogue uses DEV ONE HITTER");
                break;
            case 2:
                setStatusBar("Sorceress uses DEV ONE HITTER");
        }
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

        console.log('handle attack 3 called');
        switch (currentCharacter) {
            case 0:
                setStatusBar("Fighter uses [MOVE 3]");
                break;
            case 1:
                setStatusBar("Rogue uses [MOVE 3]");
                break;
            case 2:
                setStatusBar("Sorceress uses [MOVE 3]");
        }
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

        console.log('handle attack 4 called');
        switch (currentCharacter) {
            case 0:
                setStatusBar("Fighter uses [MOVE 4]");
                break;
            case 1:
                setStatusBar("Rogue uses [MOVE 4]");
                break;
            case 2:
                setStatusBar("Sorceress uses [MOVE 4]");
        }
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
        //setEndOfRound();
        console.log(`end of round: ${endOfRound}`);
        if (endOfRound > 0) return;
        setStatusBar("ENEMY TURN");
        console.log('enemy attack called');
        console.log(`end of round: ${endOfRound}`);
        await sleep(2200);
        setStatusBar(`${enemyNames[currEnemy]} attacks!`);
        setEnemyAnimationStep(1);
        await sleep(1300);
        // Get randomized damage value
        let dmgMin = 6;
        let dmgMax = 11;
        let dmg = Math.floor(Math.random() * (dmgMax - dmgMin) + dmgMin);
        switch (currentCharacter) {
            case 0:
                setFighterHP(fighterHP - dmg);
                setFHealthPercent((fighterHP / 500000) * 100 );
                await sleep(1000);
                setStatusBar(`Fighter takes ${dmg} damage!`);
                break;
            case 1:
                setRogueHP(rogueHP - dmg);
                setRHealthPercent( (rogueHP / 50) * 100 );
                await sleep(1000);
                setStatusBar(`Rogue takes ${dmg} damage!`);
                break;
            case 2:
                setSorceressHP(sorceressHP - dmg);
                setSHealthPercent( (sorceressHP / 50) * 100 );
                await sleep(1000);
                setStatusBar(`Sorceress takes ${dmg} damage!`);
        }
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
        setHasSwappedCharacter(false);
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
            setTurn(0);
            await sleep(2500)
        }
        else setEndOfRound(0);

    }
    async function endTurn()
    {
        setTurn(1);
        await handleEndofRound();
        if(endOfRound === 0) await enemyAttack();
    }
    async function advance()
    {
        if(endOfRound === 0) return;
        if(defeated === 3)
        {
            if(stage<6)setStage(stage+1);
            else setStage(0);
            setDefeated(0);
        }
        else setDefeated(defeated+1);

        setEndOfRound(0);
        setEnemyHP(50);
        setTurn(0);
        setHasUsedMove(false);
        setHasSwappedCharacter(false);
        if(currEnemy<enemies.length-1)setCurrEnemy(currEnemy+1);
        else setCurrEnemy(0);
        setHasUsedMove(false);

        // TODO: API call to MonstersDB to get stats for next enemy

        // setEnemyMaxHP(  );
        // setEnemyPA(  );
        // setEnemyMA(  );
        // setEnemyPD(  );
        // setEnemyMD(  );
        // setEnemySPD(  );
    }

    function handleSwapCharacter()  // Rotate through active party members (fighter->rogue->sorceress)
    {
        setHasSwappedCharacter(true);
        console.log("handleSwapCharacter():: currentCharacter=" + currentCharacter);
        switch(currentCharacter)
        {
            case 0:
                setCurrentCharacter(1);
                break;
            case 1:
                setCurrentCharacter(2);
                break;
            case 2:
                setCurrentCharacter(0);
        }
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
    const VFXSpriteData = {
        w: 1200,
        h: 1000
    }
    return <Fragment>
        {
            <Box bgcolor={'#E1ECF7'} height={'660px'}>
                <div style={{position:'absolute', left:'1178px', top:'-4px', display:'flex', alignItems:'center', backgroundColor:'#E1ECF7', borderRadius:'6px', paddingRight:'6px'}}>
                    <Avatar src={goldIcon} />
                    <span>{goldAmount}</span>
                </div>
                <div style={{
                    backgroundImage: `url(${stages[stage]})`,
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
                        {
                            (currentCharacter === 0) &&
                            <Actor sprite={fighterSpritePath} data={spriteData} step={animationStep}/>
                        }
                        {
                            (currentCharacter === 1) &&
                            <Actor sprite={rogueSpritePath} data={spriteData} step={animationStep}/>
                        }
                        {
                            (currentCharacter === 2) &&
                            <Actor sprite={sorceressSpritePath} data={spriteData} step={animationStep}/>
                        }
                    </div>
                    <div style={{position:'absolute', top:-100, left:42}}>
                        {
                            showVFX &&
                            <Actor sprite={VFXSprite} data={VFXSpriteData} step={0}/>
                        }
                    </div>
                    <div style={{
                        position: 'absolute',
                        top: 220,
                        left:740
                    }}>
                        <Actor sprite={enemies[currEnemy]} data={spriteData} step={enemyAnimationStep} />
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
                            <Box sx={{ width: '180%' }}>
                                {
                                    (currentCharacter === 0) ? (
                                        <LinearProgress variant={"buffer"} value={fHealthPercent} valueBuffer={100}/>
                                    ) : ('')
                                }
                                {
                                    (currentCharacter === 1) ? (
                                        <LinearProgress variant={"buffer"} value={rHealthPercent} valueBuffer={100}/>
                                    ) : ('')
                                }
                                {
                                    ( currentCharacter === 2 ) ? (
                                        <LinearProgress variant={"buffer"} value={sHealthPercent} valueBuffer={100}/>
                                    ) : ('')
                                }
                            </Box>
                            {
                                (currentCharacter === 0) ? (
                                    <div style={{display:'flex', alignItems:'center'}}>
                                        <Avatar src={heartIcon} sx={{height:'20px', width:'20px'}} />
                                        <span> Fighter: {fighterHP}</span>
                                    </div>
                                ) : ('')
                            }
                            {
                                (currentCharacter === 1) ? (
                                    <div style={{display:'flex', alignItems:'center'}}>
                                        <Avatar src={heartIcon} sx={{height:'20px', width:'20px'}} />
                                        <span> Rogue: {rogueHP}</span>
                                    </div>
                                ) : ('')
                            }
                            {
                                (currentCharacter === 2) ? (
                                    <div style={{display:'flex', alignItems:'center'}}>
                                        <Avatar src={heartIcon} sx={{height:'20px', width:'20px'}} />
                                        <span> Sorceress: {sorceressHP}</span>
                                    </div>
                                ) : ('')
                            }
                        </div>
                        <div style={{
                            position: 'absolute',
                            top: 580,
                            left: 820
                        }}>
                            <Box sx={{ width: '180%' }}>
                                <LinearProgress variant={"buffer"} value={eHealthPercent} valueBuffer={100} />
                            </Box>
                            <div style={{display:'flex', alignItems:'center'}}>
                                <Avatar src={heartIcon} sx={{height:'20px', width:'20px'}} />
                                <span> {enemyNames[currEnemy]}: {enemyHP}</span>
                            </div>
                        </div>

                        <div style={{
                            position: 'absolute',
                            top: 620,
                            left:300
                        }}>
                            {
                                ( hasUsedMove || turn === 1 ) ? (
                                    <Button onClick={handleAttack1} variant="outlined" disabled>Attack 1</Button>
                                ) : (
                                    <Button onClick={handleAttack1} style={{backgroundColor:"#212738"}} variant="contained">Attack 1</Button>
                                )
                            }
                            {
                                ( hasUsedMove || turn === 1 ) ? (
                                    <Button onClick={handleAttack2} variant="outlined" disabled>Attack 2</Button>
                                ) : (
                                    <Button onClick={handleAttack2} style={{backgroundColor:"#212738"}}  variant="contained">Attack 2</Button>
                                )
                            }
                            <div />
                            {
                                ( hasUsedMove || turn === 1 ) ? (
                                    <Button onClick={handleAttack3} variant="outlined" disabled>Attack 3</Button>
                                ) : (
                                    <Button onClick={handleAttack3} style={{backgroundColor:"#212738"}} variant="contained">Attack 3</Button>
                                )
                            }
                            {
                                ( hasUsedMove || turn === 1 ) ? (
                                    <Button onClick={handleAttack4} variant="outlined" disabled>Attack 4</Button>
                                ) : (
                                    <Button onClick={handleAttack4} style={{backgroundColor:"#212738"}} variant="contained">Attack 4</Button>
                                )
                            }
                        </div>
                        <div style={{
                            position: 'absolute',
                            top: 620,
                            left: 560
                        }}>
                            {
                                ( turn === 1 ) ? (
                                    <Button onClick={endTurn} variant="outlined" disabled>End Turn</Button>
                                ) : (
                                    <Button onClick={endTurn} style={{backgroundColor:"#212738"}} variant="contained">End Turn</Button>
                                )
                            }
                            {
                                ( turn === 1 || endOfRound !== 1 ) ? (
                                    <Button onClick={advance} variant="outlined" disabled>Move Forward</Button>
                                ) : (
                                    <Button onClick={advance} style={{backgroundColor:"#212738"}} variant="contained">Move Forward</Button>
                                )
                            }
                        </div>
                        <div style={{
                            position: 'absolute',
                            top: 620,
                            left: 850
                        }}>
                            <Button onClick={endTurn} startIcon={<Avatar src={inventoryIcon} sx={{width:24, height:24}} />} variant="outlined" disabled>Inventory</Button>
                        </div>
                        <div style={{
                            position: 'absolute',
                            top: 657,
                            left: 850
                        }}>
                            {
                                ( hasSwappedCharacter || turn === 1 ) ? (
                                    <Button onClick={handleSwapCharacter} variant="outlined" disabled>Swap Party Member</Button>
                                ) : (
                                    <Button onClick={handleSwapCharacter} style={{backgroundColor:"#212738"}} variant="contained">Swap Party Member</Button>
                                )
                            }
                        </div>

                </div>
            </Box>
        }
    </Fragment>
}
