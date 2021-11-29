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
import f_barbarian from "./sprites/player/fighter_barbarian.png";
import f_crusader from "./sprites/player/fighter_crusader.png";
import f_folk from "./sprites/player/fighter_folk.png";
import f_knight from "./sprites/player/fighter_knight.png";
import f_samurai from "./sprites/player/fighter_samurai.png";
import r_archer from "./sprites/player/rogue_archer.png";
import r_folk from "./sprites/player/rogue_folk.png";
import r_witchhunter from "./sprites/player/rogue_musketeer.png";
import r_ninja from "./sprites/player/rogue_ninja.png";
import r_thief from "./sprites/player/rogue_thief.png";
import s_folk from "./sprites/player/sorceress_folk.png";
import s_acolyte from "./sprites/player/sorceress_priest.png";
import s_priestess from "./sprites/player/sorceress_acolyte.png";
import s_mage from "./sprites/player/sorceress_mage.png";
import s_wizard from "./sprites/player/sorceress_wizard.png";
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
import spider from './sprites/enemy/spider.png';

import testVFX from './sprites/vfx/Cartoon_FX9_idle_5.png';
import vfx_quickAttack from './sprites/vfx/Cartoon_FX1_00.png';
import vfx_scratch from './sprites/vfx/Cartoon_FX21_02.png';
import vfx_bite from './sprites/vfx/Cartoon_FX6_05.png';
import vfx_chomp from './sprites/vfx/Cartoon_FX7_02.png';
import vfx_acidShot from './sprites/vfx/Cartoon_FX22_hole_disappear_09.png';
import vfx_supernova from './sprites/vfx/Cartoon_FX4_00.png';
import vfx_holyFlame from './sprites/vfx/Cartoon_FX11_00.png';
import vfx_firebolt from './sprites/vfx/Cartoon_FX26_missile_18.png';
import vfx_thrownBomb from './sprites/vfx/Cartoon_FX14_idle_1.png';
import vfx_heavyStrike from './sprites/vfx/Cartoon_FX13_idle_6.png';
import vfx_groundPound from './sprites/vfx/Cartoon_FX38_03.png';
import vfx_eternalFlame from './sprites/vfx/Cartoon_FX42_11.png';
import vfx_flurry from './sprites/vfx/Cartoon_FX2_06.png';
import vfx_frenzy from './sprites/vfx/Cartoon_FX25_05.png';
import vfx_hellfire from './sprites/vfx/Cartoon_FX28_07.png';
import vfx_criticalHit from './sprites/vfx/Cartoon_FX33_00.png';
import vfx_astronomicalHit from './sprites/vfx/Cartoon_FX36_00.png';
import vfx_goopBall from './sprites/vfx/Cartoon_FX37_15.png';
import vfx_magicMissile from './sprites/vfx/Cartoon_FX59_0.png';
import vfx_netherBolt from './sprites/vfx/Cartoon_FX29_05.png';
import vfx_explosiveForce from './sprites/vfx/Cartoon_FX26_08.png';
import vfx_dashingStrike from './sprites/vfx/Cartoon_FX4_idle_10.png';
import vfx_fireFountain from './sprites/vfx/Cartoon_FX5_idle_19.png';
import vfx_magmaBall from './sprites/vfx/Cartoon_FX8_idle_05.png';
import vfx_tornadoSlash from './sprites/vfx/Cartoon_FX30_tornado_11.png';
import vfx_chaosOrb from './sprites/vfx/Cartoon_FX23_hole_appear_05.png';
import vfx_auraBlast from './sprites/vfx/Cartoon_FX16_idle_3.png';
import vfx_starfall from './sprites/vfx/Cartoon_FX29_missile_effect_14.png';
import vfx_shieldBash from './sprites/vfx/Cartoon_FX32_shield_hit_04.png';
import vfx_darkAether from './sprites/vfx/Cartoon_FX18_steam_02_17.png';
import vfx_blackAtom from './sprites/vfx/Cartoon_FX1_idle_04.png';
import vfx_blueFlameEruption from './sprites/vfx/Cartoon_FX37_idle_05.png';

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
    const [currEnemy,setCurrEnemy] = useState(1)
    const [enemyName, setEnemyName] = useState("error");
    const [currEnemySpritePath,setcurrEnemySpritePath] = useState(crow);
    const stages = [field,forest,cave,lavaMountain,snowMountain,lavaCave];
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
    const [fighterSpritePath, setFighterSpritePath] = useState(f_folk);
    const [rogueSpritePath, setRogueSpritePath] = useState(r_folk);
    const [sorceressSpritePath, setSorceressSpritePath] = useState(s_folk);
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

    const moves = [
        // moves[0] === Quick Attack
        {
          name: 'Quick Attack',
          type: '0',
          damage: '6',
          sprite: vfx_quickAttack,
        },
        // moves[1] === Scratch
        {
            name: 'Scratch',
            type: '0',
            damage: '7',
            sprite: vfx_scratch,
        },
        // moves[2] === Bite
        {
            name: 'Bite',
            type: '0',
            damage: '5',
            sprite: vfx_bite,
        },
        {//3
            name: 'Chomp',
            type: '1',
            damage: '9',
            sprite: vfx_chomp,
        },
        {//4
            name: 'Acid Shot',
            type: '2',
            damage: '9',
            sprite: vfx_acidShot,
        },
        {//5
            name: 'Supernova',
            type: '2',
            damage: '24',
            sprite: vfx_supernova,
        },
        {//6
            name: 'Holy Flame',
            type: '2',
            damage: '16',
            sprite: vfx_holyFlame,
        },
        {//7
            name: 'Firebolt',
            type: '2',
            damage: '12',
            sprite: vfx_quickAttack,
        },
        {//8
            name: 'Thrown Bomb',
            type: '2',
            damage: '15',
            sprite: vfx_thrownBomb,
        },
        {//9
            name: 'Heavy Strike',
            type: '1',
            damage: '13',
            sprite: vfx_heavyStrike,
        },
        {//10
            name: 'Ground Pound',
            type: '1',
            damage: '16',
            sprite: vfx_groundPound,
        },
        {//11
            name: 'EternalFlame',
            type: '2',
            damage: '18',
            sprite: vfx_eternalFlame,
        },
        {//12
            name: 'Flurry',
            type: '0',
            damage: '15',
            sprite: vfx_flurry,
        },
        {//13
            name: 'Frenzy',
            type: '1',
            damage: '6',
            sprite: vfx_frenzy,
        },
        {//14
            name: 'Hellfire',
            type: '2',
            damage: '20',
            sprite: vfx_hellfire,
        },
        {//15
            name: 'Critical Hit',
            type: '0',
            damage: '21',
            sprite: vfx_criticalHit,
        },
        {//16
            name: 'Astronomical Hit',
            type: '1',
            damage: '26',
            sprite: vfx_astronomicalHit,
        },
        {//17
            name: 'Goop Ball',
            type: '2',
            damage: '13',
            sprite: vfx_goopBall,
        },
        {//18
            name: 'Magic Missile',
            type: '2',
            damage: '17',
            sprite: vfx_magicMissile,
        },
        {//19
            name: 'Nether Bolt',
            type: '2',
            damage: '21',
            sprite: vfx_netherBolt,
        },
        {//20
            name: 'Explosive Force',
            type: '2',
            damage: '19',
            sprite: vfx_explosiveForce,
        },
        {//21
            name: 'Dashing Strike',
            type: '0',
            damage: '22',
            sprite: vfx_dashingStrike,
        },
        {//22
            name: 'Fire Fountain',
            type: '2',
            damage: '17',
            sprite: vfx_fireFountain,
        },
        {//23
            name: 'Magma Ball',
            type: '1',
            damage: '19',
            sprite: vfx_magmaBall,
        },
        {//24
            name: 'Tornado Slash',
            type: '2',
            damage: '19',
            sprite: vfx_tornadoSlash,
        },
        {//25
            name: 'Chaos Orb',
            type: '2',
            damage: '17',
            sprite: vfx_chaosOrb,
        },
        {//26
            name: 'Aura Blast',
            type: '2',
            damage: '16',
            sprite: vfx_auraBlast,
        },
        {//27
            name: 'Starfall',
            type: '2',
            damage: '17',
            sprite: vfx_starfall,
        },
        {//28
            name: 'Shield Bash',
            type: '1',
            damage: '18',
            sprite: vfx_shieldBash,
        },
        {//29
            name: 'Dark Aether',
            type: '2',
            damage: '22',
            sprite: vfx_darkAether,
        },
        {//30
            name: 'Black Atom',
            type: '2',
            damage: '23',
            sprite: vfx_blackAtom,
        },
        {//31
            name: 'Blue Flame Eruption',
            type: '2',
            damage: '21',
            sprite: vfx_blueFlameEruption,
        }
    ];
    const [fighterAttack1,setfighterAttack1] = useState(moves[0]);
    const [fighterAttack2,setfighterAttack2] = useState(moves[0]);
    const [fighterAttack3,setfighterAttack3] = useState(moves[0]);
    const [fighterAttack4,setfighterAttack4] = useState(moves[0]);

    const [mageAttack1,setmageAttack1] = useState(moves[0]);
    const [mageAttack2,setmageAttack2] = useState(moves[0]);
    const [mageAttack3,setmageAttack3] = useState(moves[0]);
    const [mageAttack4,setmageAttack4] = useState(moves[0]);

    const [rogueAttack1,setrogueAttack1] = useState(moves[0]);
    const [rogueAttack2,setrogueAttack2] = useState(moves[0]);
    const [rogueAttack3,setrogueAttack3] = useState(moves[0]);
    const [rogueAttack4,setrogueAttack4] = useState(moves[0]);

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
                const goldJSONString = await api.getGold(username);
                setGoldAmount(goldJSONString.data[0].gold);

                const feq = await api.getFighterEquipped(username);
                console.log(`intended FSP: ${JSON.stringify(feq.data[0].fighterEquipped)}`);
                switch( feq.data[0].fighterEquipped )
                {
                    case 0:
                        setFighterSpritePath(f_folk);
                        break;
                    case 1:
                        setFighterSpritePath(f_barbarian);
                        setfighterAttack2(moves[9]);
                        break;
                    case 2:
                        setFighterSpritePath(f_crusader);
                        setfighterAttack2(moves[12]);
                        setfighterAttack3(moves[13]);
                        break;
                    case 3:
                        setFighterSpritePath(f_samurai);
                        setfighterAttack1(moves[24]);
                        setfighterAttack2(moves[21]);
                        setfighterAttack3(moves[10]);
                        setfighterAttack4(moves[15]);
                        break;
                    case 4:
                        setFighterSpritePath(f_knight);
                        setfighterAttack1(moves[28]);
                        setfighterAttack2(moves[24]);
                        setfighterAttack3(moves[10]);
                        setfighterAttack4(moves[16]);

                }
                const req = await api.getRogueEquipped(username);
                switch( req.data[0].rogueEquipped )
                {
                    case 0:
                        setRogueSpritePath(r_folk);
                        break;
                    case 1:
                        setRogueSpritePath(r_thief);

                        break;
                    case 2:
                        setFighterSpritePath(r_archer);
                        break;
                    case 3:
                        setFighterSpritePath(r_witchhunter);
                        break;
                    case 4:
                        setFighterSpritePath(r_ninja);
                }
                const seq = await api.getMageEquipped(username);
                switch( seq.data[0].mageEquipped )
                {
                    case 0:
                        setSorceressSpritePath(s_folk);
                        break;
                    case 1:
                        setSorceressSpritePath(s_acolyte);
                        break;
                    case 2:
                        setSorceressSpritePath(s_priestess);
                        break;
                    case 3:
                        setSorceressSpritePath(s_mage);
                        break;
                    case 4:
                        setSorceressSpritePath(s_wizard);
                }
                //console.log(`fsp: ${fighterSpritePath}`);
                //console.log(`ssp: ${sorceressSpritePath}`);
                //console.log(`rsp: ${rogueSpritePath}`);
                /*
                console.log(`Battle.js:: Fsp = ${fsp.data[0].fighterEquipped}`);
                setFighterSpritePath( fsp.data[0].spritePath );
                console.log(`Battle.js:: Fighter sprite path = ${fighterSpritePath}`);
                */

                // setRogueSpritePath(  );
                // setSorceressSpritePath(  );

                // TODO: API call to ArmorDB to get stats for equipped armor sets
                const armorStatsF = await api.getArmor(feq.data[0].fighterEquipped+10);
                //console.log(`stats = ${JSON.stringify(armorStatsF)}`);
                setFighterMaxHP(armorStatsF.data[0].HP);
                setFighterPA(armorStatsF.data[0].PA);
                setFighterMA(armorStatsF.data[0].MA);
                setFighterPD(armorStatsF.data[0].PD);
                setFighterMD(armorStatsF.data[0].MD);
                setFighterSPD(armorStatsF.data[0].SPD);
                setFighterHP(fighterMaxHP);

                const armorStatsR = await api.getArmor(feq.data[0].fighterEquipped+30);
                //console.log(`stats = ${JSON.stringify(armorStatsR)}`);
                setRogueMaxHP(armorStatsR.data[0].HP);
                setRoguePA(armorStatsR.data[0].SP);
                setRogueMA(armorStatsR.data[0].MA);
                setRoguePD(armorStatsR.data[0].PD);
                setRogueMD(armorStatsR.data[0].MD);
                setRogueSPD(armorStatsR.data[0].SPD);
                setRogueHP(rogueMaxHP);
                const armorStatsS = await api.getArmor(feq.data[0].fighterEquipped+20);
                //console.log(`stats = ${JSON.stringify(armorStatsS)}`);
                setSorceressMaxHP(armorStatsS.data[0].HP);
                setSorceressPA(armorStatsS.data[0].SP);
                setSorceressMA(armorStatsS.data[0].MA);
                setSorceressPD(armorStatsS.data[0].PD);
                setSorceressMD(armorStatsS.data[0].MP);
                setSorceressSPD(armorStatsS.data[0].SPD);
                setSorceressHP(sorceressMaxHP);
                // TODO: API call to MonstersDB to get stats for first enemy
                const monsterStats = await api.getMonster(currEnemy)
                console.log(`monsterStats: ${JSON.stringify(monsterStats.data)}`);
                switch( monsterStats.data[0].monsterID )
                {
                    case 1:
                        setcurrEnemySpritePath(crow);
                        break;
                    case 2:
                        setcurrEnemySpritePath(rat);
                        break;
                    case 3:
                        setcurrEnemySpritePath(slime);
                        break;
                    case 4:
                        setcurrEnemySpritePath(ghost);
                        break;
                    case 5:
                        setcurrEnemySpritePath(spider);
                        break;
                    case 6:
                        setcurrEnemySpritePath(zombie);
                        break;
                    case 7:
                        setcurrEnemySpritePath(goblin);
                        break;
                    case 8:
                        setcurrEnemySpritePath(orc);
                        break;
                    case 9:
                        setcurrEnemySpritePath(worm);
                        break;
                    case 10:
                        setcurrEnemySpritePath(bat);
                        break;
                    case 11:
                        setcurrEnemySpritePath(cyclops);
                        break;
                    case 12:
                        setcurrEnemySpritePath(skeleton);
                        break;
                    case 13:
                        setcurrEnemySpritePath(beholder);
                        break;
                    case 14:
                        setcurrEnemySpritePath(demon);
                }
                setEnemyMaxHP(monsterStats.data[0].maxHP);
                setEnemyPA(monsterStats.data[0].physicalATK);
                setEnemyMA(monsterStats.data[0].physicalATK);
                setEnemyPD(monsterStats.data[0].physicalDEF);
                setEnemyMD(monsterStats.data[0].magicDEF);
                setEnemySPD(monsterStats.data[0].speed);
                setEnemyHP(monsterStats.data[0].maxHP);
                setEnemyName(monsterStats.data[0].monsterName);
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
        console.log(`handleAttack(idx) called`);
        if(turn === 1 || endOfRound>0) return;

        setHasUsedMove(true);

        // TODO: get index of move we are using in moves[]

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
        setStatusBar(`${className} uses ${moves[idx].name}`)
        setAnimationStep(1);
        setVFXSprite(moves[idx].sprite);
        //setVFXSprite(testVFX);
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

        setEnemyHP(enemyHP - moves[idx].damage); // TODO: use stats in dmg calculation
        setEHealthPercent( (enemyHP/enemyMaxHP) * 100 );
        await sleep(800);
        setStatusBar(`${enemyName} takes ${moves[idx].damage} damage!`); // TODO: you get the idea
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
        if (endOfRound > 0 || enemyHP<0) return;
        setStatusBar("ENEMY TURN");
        console.log('enemy attack called');
        console.log(`end of round: ${endOfRound}`);
        await sleep(2200);
        setStatusBar(`${enemyName} attacks!`);
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
        if(endOfRound === 0 || enemyHP >0) await enemyAttack();
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
        //setEnemyHP(50);
        setTurn(0);
        setHasUsedMove(false);
        setHasSwappedCharacter(false);
        if(currEnemy === 1) setCurrEnemy(2);
        else if(currEnemy<15)setCurrEnemy(currEnemy+1);
        else setCurrEnemy(1);
        setHasUsedMove(false);

        // TODO: API call to MonstersDB to get stats for next enemy
        const api = new API();
        const newmonsterStats = await api.getMonster(currEnemy)
        console.log(`monsterStats: ${JSON.stringify(newmonsterStats.data)}`);
        switch( newmonsterStats.data[0].monsterID )
        {
            case 1:
                setcurrEnemySpritePath(crow);
                break;
            case 2:
                setcurrEnemySpritePath(rat);
                break;
            case 3:
                setcurrEnemySpritePath(slime);
                break;
            case 4:
                setcurrEnemySpritePath(ghost);
                break;
            case 5:
                setcurrEnemySpritePath(spider);
                break;
            case 6:
                setcurrEnemySpritePath(zombie);
                break;
            case 7:
                setcurrEnemySpritePath(goblin);
                break;
            case 8:
                setcurrEnemySpritePath(orc);
                break;
            case 9:
                setcurrEnemySpritePath(worm);
                break;
            case 10:
                setcurrEnemySpritePath(bat);
                break;
            case 11:
                setcurrEnemySpritePath(cyclops);
                break;
            case 12:
                setcurrEnemySpritePath(skeleton);
                break;
            case 13:
                setcurrEnemySpritePath(beholder);
                break;
            case 14:
                setcurrEnemySpritePath(demon);
        }
        setEnemyMaxHP(newmonsterStats.data[0].maxHP);
        setEnemyPA(newmonsterStats.data[0].physicalATK);
        setEnemyMA(newmonsterStats.data[0].physicalATK);
        setEnemyPD(newmonsterStats.data[0].physicalDEF);
        setEnemyMD(newmonsterStats.data[0].magicDEF);
        setEnemySPD(newmonsterStats.data[0].speed);
        setEnemyHP(newmonsterStats.data[0].maxHP);
        setEnemyName(newmonsterStats.data[0].monsterName);

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
                        <Actor sprite={currEnemySpritePath} data={spriteData} step={enemyAnimationStep} />
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
                                <span> {enemyName}: {enemyHP}</span>
                            </div>
                        </div>

                        <div style={{
                            position: 'absolute',
                            top: 620,
                            left:300
                        }}>
                            {
                                ( hasUsedMove || turn === 1 ) ? (
                                    <Button onClick={() => handleAttack(0)} variant="outlined" disabled>{moves[0].name}</Button>
                                ) : (
                                    <Button onClick={() => handleAttack(0)} style={{backgroundColor:"#212738"}} variant="contained">{moves[0].name}</Button>
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
