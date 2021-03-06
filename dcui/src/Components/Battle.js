import React, {useState, useEffect, Fragment} from 'react';
import {Avatar, Box, Button, LinearProgress} from "@mui/material";

import Actor from "./Actor";
import API from "../API_Interface/API_Interface";

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
import r_witchHunter from "./sprites/player/rogue_musketeer.png";
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
import vfx_blackHole from './sprites/vfx/Cartoon_FX25_hole_idle_08.png';

import goldIcon from "./sprites/ui/GoldenCoin.png";

export default function Battle(user)
{
    const [enemyHP,setEnemyHP] = useState(50);
    const [fighterHP,setFighterHP] = useState(500000);
    const [rogueHP,setRogueHP] = useState(50);
    const [sorceressHP,setSorceressHP] = useState(50);
    const [statusBar,setStatusBar] = useState("Sic 'em!");
    const [endOfRound, setEndOfRound] = useState(0); // 0 -> game is ongoing, 1 -> enemy died, 2 -> we died ;-;
    const [turn,setTurn] = useState(0); //0 -> players turn 1->enemy's turn
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
            sprite: vfx_firebolt,
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
        },
        {//32
            name: 'Black Hole',
            type: '2',
            damage: '30',
            sprite: vfx_blackHole,
        }
    ];
    const [fighterAttack1,setFighterAttack1] = useState(moves[0]);
    const [fighterAttack2,setFighterAttack2] = useState(moves[0]);
    const [fighterAttack3,setFighterAttack3] = useState(moves[0]);
    const [fighterAttack4,setFighterAttack4] = useState(moves[0]);

    const [mageAttack1,setMageAttack1] = useState(moves[0]);
    const [mageAttack2,setMageAttack2] = useState(moves[0]);
    const [mageAttack3,setMageAttack3] = useState(moves[0]);
    const [mageAttack4,setMageAttack4] = useState(moves[0]);

    const [rogueAttack1,setRogueAttack1] = useState(moves[0]);
    const [rogueAttack2,setRogueAttack2] = useState(moves[0]);
    const [rogueAttack3,setRogueAttack3] = useState(moves[0]);
    const [rogueAttack4,setRogueAttack4] = useState(moves[0]);

    const [enemyAttack1,setEnemyAttack1] = useState(moves[0]);
    const [enemyAttack2,setEnemyAttack2] = useState(moves[0]);
    const [enemyAttack3,setEnemyAttack3] = useState(moves[0]);

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
                switch( feq.data[0].fighterEquipped )
                {
                    case 0:
                        setFighterSpritePath(f_folk);
                        break;
                    case 1:
                        setFighterSpritePath(f_barbarian);
                        setFighterAttack2(moves[9]);
                        break;
                    case 2:
                        setFighterSpritePath(f_crusader);
                        setFighterAttack2(moves[12]);
                        setFighterAttack3(moves[13]);
                        break;
                    case 3:
                        setFighterSpritePath(f_samurai);
                        setFighterAttack1(moves[24]);
                        setFighterAttack2(moves[21]);
                        setFighterAttack3(moves[10]);
                        setFighterAttack4(moves[15]);
                        break;
                    case 4:
                        setFighterSpritePath(f_knight);
                        setFighterAttack1(moves[28]);
                        setFighterAttack2(moves[24]);
                        setFighterAttack3(moves[10]);
                        setFighterAttack4(moves[16]);

                }
                const req = await api.getRogueEquipped(username);
                switch( req.data[0].rogueEquipped )
                {
                    case 5:
                        setRogueSpritePath(r_folk);
                        break;
                    case 6:
                        setRogueSpritePath(r_thief);
                        setRogueAttack2(moves[10]);

                        break;
                    case 7:
                        setRogueSpritePath(r_archer);
                        setRogueAttack1(moves[4]);
                        setRogueAttack2(moves[8]);
                        setRogueAttack3(moves[7]);
                        break;
                    case 8:
                        setRogueSpritePath(r_witchHunter);
                        setRogueAttack1(moves[20]);
                        setRogueAttack2(moves[8]);
                        setRogueAttack3(moves[27]);
                        setRogueAttack4(moves[19]);
                        break;
                    case 9:
                        setRogueSpritePath(r_ninja);
                        setRogueAttack1(moves[21]);
                        setRogueAttack2(moves[20]);
                        setRogueAttack3(moves[10]);
                        setRogueAttack4(moves[15]);
                }
                const seq = await api.getMageEquipped(username);
                switch( seq.data[0].mageEquipped )
                {
                    case 10:
                        setSorceressSpritePath(s_folk);
                        break;
                    case 11:
                        setSorceressSpritePath(s_acolyte);
                        setMageAttack1(moves[7]);
                        setMageAttack2(moves[22]);
                        break;
                    case 12:
                        setSorceressSpritePath(s_priestess);
                        setMageAttack1(moves[26]);
                        setMageAttack2(moves[20]);
                        setMageAttack3(moves[6]);
                        setMageAttack4(moves[18]);
                        break;
                    case 13:
                        setSorceressSpritePath(s_mage);
                        setMageAttack1(moves[26]);
                        setMageAttack2(moves[19]);
                        setMageAttack3(moves[24]);
                        setMageAttack4(moves[18]);
                        break;
                    case 14:
                        setSorceressSpritePath(s_wizard);
                        setMageAttack1(moves[5]);
                        setMageAttack2(moves[29]);
                        setMageAttack3(moves[32]);
                        setMageAttack4(moves[30]);
                }

                // API call to ArmorDB to get stats for equipped armor sets
                const armorStatsF = await api.getArmor(feq.data[0].fighterEquipped+10);
                setFighterMaxHP(armorStatsF.data[0].HP);
                setFighterPA(armorStatsF.data[0].PA);
                setFighterMA(armorStatsF.data[0].MA);
                setFighterPD(armorStatsF.data[0].PD);
                setFighterMD(armorStatsF.data[0].MD);
                setFighterSPD(armorStatsF.data[0].SPD);
                setFighterHP(armorStatsF.data[0].HP);
                const armorStatsR = await api.getArmor(30+(req.data[0].rogueEquipped-5));
                setRogueMaxHP(armorStatsR.data[0].HP);
                setRoguePA(armorStatsR.data[0].SP);
                setRogueMA(armorStatsR.data[0].MA);
                setRoguePD(armorStatsR.data[0].PD);
                setRogueMD(armorStatsR.data[0].MD);
                setRogueSPD(armorStatsR.data[0].SPD);
                setRogueHP(armorStatsR.data[0].HP);
                const armorStatsS = await api.getArmor(seq.data[0].mageEquipped+10);
                setSorceressMaxHP(armorStatsS.data[0].HP);
                setSorceressPA(armorStatsS.data[0].SP);
                setSorceressMA(armorStatsS.data[0].MA);
                setSorceressPD(armorStatsS.data[0].PD);
                setSorceressMD(armorStatsS.data[0].MP);
                setSorceressSPD(armorStatsS.data[0].SPD);
                setSorceressHP(armorStatsS.data[0].HP);

                // API call to MonstersDB to get stats for first enemy
                const monsterStats = await api.getMonster(currEnemy)
                switch( monsterStats.data[0].monsterID )
                {
                    case 1:
                        setcurrEnemySpritePath(crow);
                        setEnemyAttack1(moves[2]);
                        setEnemyAttack2(moves[1]);
                        break;
                    case 2:
                        setcurrEnemySpritePath(rat);
                        setEnemyAttack1(moves[2]);
                        setEnemyAttack2(moves[1]);
                        break;
                    case 3:
                        setcurrEnemySpritePath(slime);
                        setEnemyAttack1(moves[2]);
                        setEnemyAttack2(moves[3]);
                        setEnemyAttack3(moves[4]);
                        break;
                    case 4:
                        setcurrEnemySpritePath(ghost);
                        setEnemyAttack1(moves[4]);
                        break;
                    case 5:
                        setcurrEnemySpritePath(spider);
                        setEnemyAttack1(moves[2]);
                        break;
                    case 6:
                        setcurrEnemySpritePath(zombie);
                        setEnemyAttack1(moves[2]);
                        setEnemyAttack2(moves[1]);
                        setEnemyAttack3(moves[3]);
                        break;
                    case 7:
                        setcurrEnemySpritePath(goblin);
                        setEnemyAttack1(moves[0]);
                        setEnemyAttack2(moves[12]);
                        setEnemyAttack3(moves[8]);
                        break;
                    case 8:
                        setcurrEnemySpritePath(orc);
                        setEnemyAttack1(moves[13]);
                        setEnemyAttack2(moves[9]);
                        setEnemyAttack3(moves[8]);
                        break;
                    case 9:
                        setcurrEnemySpritePath(worm);
                        setEnemyAttack1(moves[2]);
                        break;
                    case 10:
                        setcurrEnemySpritePath(bat);
                        setEnemyAttack1(moves[2]);
                        break;
                    case 11:
                        setcurrEnemySpritePath(cyclops);
                        setEnemyAttack1(moves[3]);
                        setEnemyAttack2(moves[9]);
                        break;
                    case 12:
                        setcurrEnemySpritePath(skeleton);
                        setEnemyAttack1(moves[12]);
                        setEnemyAttack2(moves[13]);
                        break;
                    case 13:
                        setcurrEnemySpritePath(beholder);
                        setEnemyAttack1(moves[31]);
                        setEnemyAttack2(moves[30]);
                        break;
                    case 14:
                        setcurrEnemySpritePath(demon);
                        setEnemyAttack1(moves[5]);
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

        handleCharacterDeath();

        if(enemyHP <= 0)
        {
            setEndOfRound(1);
            let goldRewardMin = 4;
            let goldRewardMax = 11;
            let goldReward = Math.floor(Math.random() * (goldRewardMax - goldRewardMin) + goldRewardMin) + (currEnemy * Math.floor(Math.random() * 2 + 1));
            const api = new API();
            api.updateGold( username, goldAmount+goldReward )
            setStatusBar(`You have received ${goldReward} gold!`);
            setGoldAmount(goldAmount+goldReward);
        }
        else setEndOfRound(0);
        return endOfRound;
        }, [fighterHP,rogueHP,sorceressHP,endOfRound,enemyHP]);

    // One function to handle all player attacks
    async function handleAttack( idx )  // idx = 0-3 for attack buttons
    {
        if(turn === 1 || endOfRound>0) return;

        setHasUsedMove(true);

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

        setStatusBar(`${className} uses ${idx.name}`)
        setAnimationStep(1);
        setVFXSprite(idx.sprite);
        setShowVFX(true);
        await sleep(1200);
        setShowVFX(false);

        // TODO: Calculate damage to deal using character & enemy stats
        /*
        if( moves[idx].type === 2 ) // if moveType === magic
        {
            // Use Magic Atk/Def for calculations
        }
        else    // strong and fast both use Physical Attack/Defense
        {

        }
        */

        setEnemyHP(enemyHP - idx.damage); // TODO: ^
        setEHealthPercent( ((enemyHP - idx.damage)/enemyMaxHP) * 100 );
        await sleep(800);
        setStatusBar(`${enemyName} takes ${idx.damage} damage!`); // TODO: ^
        setAnimationStep(0);
        await sleep(2200);
    }

    async function enemyAttack() {
        if (endOfRound > 0 || enemyHP <= 0) return;

        setStatusBar("ENEMY TURN");
        await sleep(2200);
        setEnemyAnimationStep(1);
        await sleep(200);

        let dmg = 0;
        if(enemyAttack2===moves[0] && enemyAttack3 ===moves[0])
        {
            setVFXSprite(enemyAttack1.sprite);
            setShowVFX(true);
            await sleep(1200);
            setShowVFX(false);
            dmg = enemyAttack1.damage;
            setStatusBar(`${enemyName} uses ${enemyAttack1.name}!`);
        }
        else if(enemyAttack3 === moves[0]) {
            let min = 1;
            let max = 2;
            let choice = Math.floor(Math.random() * (max - min) + min);
            if (choice === 1)
            {
                setStatusBar(`${enemyName} uses ${enemyAttack1.name}!`);
                setVFXSprite(enemyAttack1.sprite);
                setShowVFX(true);
                await sleep(1200);
                setShowVFX(false);
                dmg = enemyAttack1.damage;
            }
            else
            {
                setStatusBar(`${enemyName} uses ${enemyAttack2.name}!`);
                setVFXSprite(enemyAttack2.sprite);
                setShowVFX(true);
                await sleep(1200);
                setShowVFX(false);
                dmg = enemyAttack2.damage;
            }
        }
        else
        {
            let min = 1;
            let max = 3;
            let choice = Math.floor(Math.random() * (max - min) + min);
            if (choice === 1)
            {
                setStatusBar(`${enemyName} uses ${enemyAttack1.name}!`);
                setVFXSprite(enemyAttack1.sprite);
                setShowVFX(true);
                await sleep(1200);
                setShowVFX(false);
                dmg = enemyAttack1.damage;
            }
            else if(choice ===2)
            {
                setStatusBar(`${enemyName} uses ${enemyAttack2.name}!`);
                setVFXSprite(enemyAttack2.sprite);
                setShowVFX(true);
                await sleep(1200);
                setShowVFX(false);
                dmg = enemyAttack2.damage;
            }
            else if(choice ===3)
            {
                setStatusBar(`${enemyName} uses ${enemyAttack3.name}!`);
                setVFXSprite(enemyAttack3.sprite);
                setShowVFX(true);
                await sleep(1200);
                setShowVFX(false);
                dmg = enemyAttack3.damage;
            }
        }
        switch (currentCharacter) {
            case 0:
                setFighterHP(fighterHP - dmg);
                setFHealthPercent(( (fighterHP - dmg) / fighterMaxHP) * 100 );
                await sleep(1000);
                setStatusBar(`Fighter takes ${dmg} damage!`);
                break;
            case 1:
                setRogueHP(rogueHP - dmg);
                setRHealthPercent( ( (rogueHP - dmg) / rogueMaxHP) * 100 );
                await sleep(1000);
                setStatusBar(`Rogue takes ${dmg} damage!`);
                break;
            case 2:
                setSorceressHP(sorceressHP - dmg);
                setSHealthPercent( ( (sorceressHP - dmg) / sorceressMaxHP) * 100 );
                await sleep(1000);
                setStatusBar(`Sorceress takes ${dmg} damage!`);
        }

        // If party member dies, swap.
        // If all are dead, player is defeated!
        handleCharacterDeath();
        setEnemyAnimationStep(0);
        await sleep(2000);
        await handleEndOfRound();

        //if (fighterHP - dmg > 0) {
        switch (currentCharacter)
        {
            case 0:
            {
                if( fighterHP - dmg > 0 || rogueHP > 0 || sorceressHP > 0 )
                {
                    setTurn(0);
                    setStatusBar("Player Turn!");
                }
                break;
            }
            case 1:
            {
                if( fighterHP > 0 || rogueHP - dmg > 0 || sorceressHP > 0 )
                {
                    setTurn(0);
                    setStatusBar("Player Turn!");
                }
                break;
            }
            case 2:
            {
                if( fighterHP > 0 || rogueHP > 0 || sorceressHP - dmg > 0 )
                {
                    setTurn(0);
                    setStatusBar("Player Turn!");
                }
            }
        }
    }
    function handleCharacterDeath()
    {
        if( currentCharacter === 0 && fighterHP <= 0 )
        {
            if( rogueHP <= 0 && sorceressHP <= 0 )
            {
                setStatusBar("YOUR PARTY HAS BEEN DEFEATED!");
                setEndOfRound(2);
            }
            else
            {
                setStatusBar("Your fighter has been defeated!");
                handleSwapCharacter();
            }
        }
        else if( currentCharacter === 1 && rogueHP <= 0 )
        {
            if( fighterHP <= 0 && sorceressHP <= 0 )
            {
                setStatusBar("YOUR PARTY HAS BEEN DEFEATED!");
                setEndOfRound(2);
            }
            else
            {
                setStatusBar("Your rogue has been defeated!");
                handleSwapCharacter();
            }
        }
        else if( currentCharacter === 2 && sorceressHP <= 0 )
        {
            if( fighterHP <= 0 && rogueHP <= 0 )
            {
                setStatusBar("YOUR PARTY HAS BEEN DEFEATED!");
                setEndOfRound(2);
            }
            else
            {
                setStatusBar("Your sorceress has been defeated!");
                handleSwapCharacter();
            }
        }
    }
    async function handleEndOfRound()
    {
        setEndOfRound(3);
        setHasUsedMove(false);
        setHasSwappedCharacter(false);

        if(enemyHP <= 0)
        {
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
        await handleEndOfRound();
        if(endOfRound === 0 || enemyHP > 0) await enemyAttack();
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
        setTurn(0);
        setHasUsedMove(false);
        setHasSwappedCharacter(false);
        setEHealthPercent(100);
        if(currEnemy === 1) setCurrEnemy(2);
        else if(currEnemy<15)setCurrEnemy(currEnemy+1);
        else setCurrEnemy(1);
        setHasUsedMove(false);
        const api = new API();
        let newMonsterStats;
        if(currEnemy + 1 <15)
        {
             newMonsterStats = await api.getMonster(currEnemy+1);
        }
        else
        {
            setCurrEnemy(1);
             newMonsterStats = await api.getMonster(1);
        }
        switch( newMonsterStats.data[0].monsterID )
        {
            case 1:
                setcurrEnemySpritePath(crow);
                setEnemyAttack1(moves[2]);
                setEnemyAttack2(moves[1]);
                break;
            case 2:
                setcurrEnemySpritePath(rat);
                setEnemyAttack1(moves[2]);
                setEnemyAttack2(moves[1]);
                break;
            case 3:
                setcurrEnemySpritePath(slime);
                setEnemyAttack1(moves[2]);
                setEnemyAttack2(moves[3]);
                setEnemyAttack3(moves[4]);
                break;
            case 4:
                setcurrEnemySpritePath(ghost);
                setEnemyAttack1(moves[4]);
                break;
            case 5:
                setcurrEnemySpritePath(spider);
                setEnemyAttack1(moves[2]);
                break;
            case 6:
                setcurrEnemySpritePath(zombie);
                setEnemyAttack1(moves[2]);
                setEnemyAttack2(moves[1]);
                setEnemyAttack3(moves[3]);
                break;
            case 7:
                setcurrEnemySpritePath(goblin);
                setEnemyAttack1(moves[0]);
                setEnemyAttack2(moves[12]);
                setEnemyAttack3(moves[8]);
                break;
            case 8:
                setcurrEnemySpritePath(orc);
                setEnemyAttack1(moves[13]);
                setEnemyAttack2(moves[9]);
                setEnemyAttack3(moves[8]);
                break;
            case 9:
                setcurrEnemySpritePath(worm);
                setEnemyAttack1(moves[2]);
                break;
            case 10:
                setcurrEnemySpritePath(bat);
                setEnemyAttack1(moves[2]);
                break;
            case 11:
                setcurrEnemySpritePath(cyclops);
                setEnemyAttack1(moves[3]);
                setEnemyAttack2(moves[9]);
                break;
            case 12:
                setcurrEnemySpritePath(skeleton);
                setEnemyAttack1(moves[12]);
                setEnemyAttack2(moves[13]);
                break;
            case 13:
                setcurrEnemySpritePath(beholder);
                setEnemyAttack1(moves[31]);
                setEnemyAttack2(moves[30]);
                break;
            case 14:
                setcurrEnemySpritePath(demon);
                setEnemyAttack1(moves[5]);
        }
        setEnemyMaxHP(newMonsterStats.data[0].maxHP);
        setEnemyPA(newMonsterStats.data[0].physicalATK);
        setEnemyMA(newMonsterStats.data[0].physicalATK);
        setEnemyPD(newMonsterStats.data[0].physicalDEF);
        setEnemyMD(newMonsterStats.data[0].magicDEF);
        setEnemySPD(newMonsterStats.data[0].speed);
        setEnemyHP(newMonsterStats.data[0].maxHP);
        setEnemyName(newMonsterStats.data[0].monsterName);

    }

    function handleSwapCharacter()  // Rotate through active party members (fighter->rogue->sorceress)
    {
        setHasSwappedCharacter(true);

        switch(currentCharacter) {
            case 0:
            {
                if (rogueHP > 0) {
                    setCurrentCharacter(1);
                }
                else if (sorceressHP > 0)
                {
                    setCurrentCharacter(2);
                }
                break;
            }
            case 1:
            {
                if (sorceressHP > 0) {
                    setCurrentCharacter(2);
                }
                else if (fighterHP > 0)
                {
                    setCurrentCharacter(0);
                }
                break;
            }
            case 2:
            {
                if (fighterHP > 0) {
                    setCurrentCharacter(0);
                }
                else if (rogueHP > 0)
                {
                    setCurrentCharacter(1);
                }
            }
        }
    }

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
            <Box bgcolor={'#E1ECF7'} height={'666px'}>
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
                        top: 250,
                        left: 310
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
                    <div style={{position:'relative', top:'40%', left:'42%', display:"flex", justifyContent:'center', alignSelf:"flex-start"}}>
                        {
                            showVFX &&
                            <Actor sprite={VFXSprite} data={VFXSpriteData} step={0}/>
                        }
                    </div>
                    <div style={{
                        position: 'absolute',
                        top: 250,
                        left:790
                    }}>
                        <Actor sprite={currEnemySpritePath} data={spriteData} step={enemyAnimationStep} />
                    </div>

                        <div style={{
                            position: 'absolute',
                            top: 580,
                            left: 535
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
                            left:200
                        }}>
                            {
                                ( hasUsedMove || turn === 1 ) ? (
                                    <div>
                                        {(currentCharacter === 0) && (<Button onClick={() => handleAttack(fighterAttack1)} style={{width:'200px'}} variant="outlined" disabled>{fighterAttack1.name}</Button>)}
                                        {(currentCharacter === 1) && (<Button onClick={() => handleAttack(rogueAttack1)} style={{width:'200px'}} variant="outlined" disabled>{rogueAttack1.name}</Button>)}
                                        {(currentCharacter === 2) && (<Button onClick={() => handleAttack(mageAttack1)} style={{width:'200px'}} variant="outlined" disabled>{mageAttack1.name}</Button>)}
                                    </div>
                                ) : (
                                    <div>
                                        {(currentCharacter === 0 && <Button onClick={() => handleAttack(fighterAttack1)} style={{backgroundColor:"#212738", width:'200px'}} variant="contained">{fighterAttack1.name}</Button>)}
                                        {(currentCharacter === 1 && <Button onClick={() => handleAttack(rogueAttack1)} style={{backgroundColor:"#212738", width:'200px'}} variant="contained">{rogueAttack1.name}</Button>)}
                                        {(currentCharacter === 2 && <Button onClick={() => handleAttack(mageAttack1)} style={{backgroundColor:"#212738", width:'200px'}} variant="contained">{mageAttack1.name}</Button>)}
                                    </div>
                                )
                            }
                            {
                                ( hasUsedMove || turn === 1 ) ? (
                                    <div>
                                        {(currentCharacter === 0) && (<Button onClick={() => handleAttack(fighterAttack2)} style={{width:'200px'}} variant="outlined" disabled>{fighterAttack2.name}</Button>)}
                                        {(currentCharacter === 1) && (<Button onClick={() => handleAttack(rogueAttack2)} style={{width:'200px'}} variant="outlined" disabled>{rogueAttack2.name}</Button>)}
                                        {(currentCharacter === 2) && (<Button onClick={() => handleAttack(mageAttack2)} style={{width:'200px'}} variant="outlined" disabled>{mageAttack2.name}</Button>)}
                                    </div>
                                ) : (
                                    <div>
                                        {(currentCharacter === 0 &&
                                            (
                                                (fighterAttack2.name === "Quick Attack") ? (
                                                    <Button onClick={() => handleAttack(fighterAttack2)} style={{width:'200px'}} variant="outlined" disabled>LOCKED</Button>
                                                ) : (
                                                    <Button onClick={() => handleAttack(fighterAttack2)} style={{backgroundColor:"#212738", width:'200px'}} variant="contained">
                                                        {fighterAttack2.name}
                                                    </Button>
                                                )
                                            )
                                        )}
                                        {(currentCharacter === 1 &&
                                            (
                                                (rogueAttack2.name === "Quick Attack") ? (
                                                    <Button onClick={() => handleAttack(rogueAttack2)} style={{width:'200px'}} variant="outlined" disabled>LOCKED</Button>
                                                ) : (
                                                    <Button onClick={() => handleAttack(rogueAttack2)} style={{backgroundColor:"#212738", width:'200px'}} variant="contained">
                                                        {rogueAttack2.name}
                                                    </Button>
                                                )
                                            )
                                        )}
                                        {(currentCharacter === 2 &&
                                            (
                                                (mageAttack2.name === "Quick Attack") ? (
                                                    <Button onClick={() => handleAttack(mageAttack2)} style={{width:'200px'}} variant="outlined" disabled>LOCKED</Button>
                                                ) : (
                                                    <Button onClick={() => handleAttack(mageAttack2)} style={{backgroundColor:"#212738", width:'200px'}} variant="contained">
                                                        {mageAttack2.name}
                                                    </Button>
                                                )
                                            )
                                        )}
                                    </div>
                                )
                            }
                            <div />
                        </div>
                            <div style={{
                                position: 'absolute',
                                top: 620,
                                left:400
                            }}>
                            {
                                ( hasUsedMove || turn === 1 ) ? (
                                    <div>
                                        {(currentCharacter === 0) && (<Button onClick={() => handleAttack(fighterAttack3)} style={{width:'200px'}} variant="outlined" disabled>{fighterAttack3.name}</Button>)}
                                        {(currentCharacter === 1) && (<Button onClick={() => handleAttack(rogueAttack3)} style={{width:'200px'}} variant="outlined" disabled>{rogueAttack3.name}</Button>)}
                                        {(currentCharacter === 2) && (<Button onClick={() => handleAttack(mageAttack3)} style={{width:'200px'}} variant="outlined" disabled>{mageAttack3.name}</Button>)}
                                    </div>
                                ) : (
                                    <div>
                                        {(currentCharacter === 0 &&
                                            (
                                                (fighterAttack3.name === "Quick Attack") ? (
                                                    <Button onClick={() => handleAttack(fighterAttack3)} style={{width:'200px'}} variant="outlined" disabled>LOCKED</Button>
                                                ) : (
                                                    <Button onClick={() => handleAttack(fighterAttack3)} style={{backgroundColor:"#212738", width:'200px'}} variant="contained">
                                                        {fighterAttack3.name}
                                                    </Button>
                                                )
                                            )
                                        )}
                                        {(currentCharacter === 1 &&
                                            (
                                                (rogueAttack3.name === "Quick Attack") ? (
                                                    <Button onClick={() => handleAttack(rogueAttack3)} style={{width:'200px'}} variant="outlined" disabled>LOCKED</Button>
                                                ) : (
                                                    <Button onClick={() => handleAttack(rogueAttack3)} style={{backgroundColor:"#212738", width:'200px'}} variant="contained">
                                                        {rogueAttack3.name}
                                                    </Button>
                                                )
                                            )
                                        )}
                                        {(currentCharacter === 2 &&
                                            (
                                                (mageAttack3.name === "Quick Attack") ? (
                                                    <Button onClick={() => handleAttack(mageAttack3)} style={{width:'200px'}} variant="outlined" disabled>LOCKED</Button>
                                                ) : (
                                                    <Button onClick={() => handleAttack(mageAttack3)} style={{backgroundColor:"#212738", width:'200px'}} variant="contained">
                                                        {mageAttack3.name}
                                                    </Button>
                                                )
                                            )
                                        )}
                                    </div>
                                )
                            }
                            {
                                ( hasUsedMove || turn === 1 ) ? (
                                    <div>
                                        {(currentCharacter === 0) && (<Button onClick={() => handleAttack(fighterAttack4)} style={{width:'200px'}} variant="outlined" disabled>{fighterAttack4.name}</Button>)}
                                        {(currentCharacter === 1) && (<Button onClick={() => handleAttack(rogueAttack4)} style={{width:'200px'}} variant="outlined" disabled>{rogueAttack4.name}</Button>)}
                                        {(currentCharacter === 2) && (<Button onClick={() => handleAttack(mageAttack4)} style={{width:'200px'}} variant="outlined" disabled>{mageAttack4.name}</Button>)}
                                    </div>
                                ) : (
                                    <div>
                                        {(currentCharacter === 0 &&
                                            (
                                                (fighterAttack4.name === "Quick Attack") ? (
                                                    <Button onClick={() => handleAttack(fighterAttack4)} style={{width:'200px'}} variant="outlined" disabled>LOCKED</Button>
                                                ) : (
                                                    <Button onClick={() => handleAttack(fighterAttack4)} style={{backgroundColor:"#212738", width:'200px'}} variant="contained">
                                                        {fighterAttack4.name}
                                                    </Button>
                                                )
                                            )
                                        )}
                                        {(currentCharacter === 1 &&
                                            (
                                                (rogueAttack4.name === "Quick Attack") ? (
                                                    <Button onClick={() => handleAttack(rogueAttack4)} style={{width:'200px'}} variant="outlined" disabled>LOCKED</Button>
                                                ) : (
                                                    <Button onClick={() => handleAttack(rogueAttack4)} style={{backgroundColor:"#212738", width:'200px'}} variant="contained">
                                                        {rogueAttack4.name}
                                                    </Button>
                                                )
                                            )
                                        )}
                                        {(currentCharacter === 2 &&
                                            (
                                                (mageAttack4.name === "Quick Attack") ? (
                                                    <Button onClick={() => handleAttack(mageAttack4)} style={{width:'200px'}} variant="outlined" disabled>LOCKED</Button>
                                                ) : (
                                                    <Button onClick={() => handleAttack(mageAttack4)} style={{backgroundColor:"#212738", width:'200px'}} variant="contained">
                                                        {mageAttack4.name}
                                                    </Button>
                                                )
                                            )
                                        )}
                                    </div>
                                )
                            }
                        </div>
                        <div style={{
                            position: 'absolute',
                            top: 620,
                            left: 630
                        }}>
                            {
                                ( turn === 1 || endOfRound === 1 ) ? (
                                    <Button onClick={endTurn} style={{width:'200px'}} variant="outlined" disabled>End Turn</Button>
                                ) : (
                                    <Button onClick={endTurn} style={{backgroundColor:"#212738", width:'200px'}} variant="contained">End Turn</Button>
                                )
                            }
                            <div/>
                            {
                                ( turn === 1 || endOfRound !== 1 ) ? (
                                    <Button onClick={advance} style={{width:'200px'}} variant="outlined" disabled>Move Forward</Button>
                                ) : (
                                    <Button onClick={advance} style={{backgroundColor:"#212738", width:'200px'}} variant="contained">Move Forward</Button>
                                )
                            }
                        </div>
                        <div style={{
                            position: 'absolute',
                            top: 620,
                            left: 860
                        }}>
                            <Button style={{width:'200px'}} onClick={endTurn} startIcon={<Avatar src={inventoryIcon} sx={{width:24, height:24}}/>} variant="outlined" disabled>Inventory</Button>
                        </div>
                        <div style={{
                            position: 'absolute',
                            top: 657,
                            left: 860
                        }}>
                            {
                                ( hasSwappedCharacter || turn === 1 ) ? (
                                    <Button onClick={handleSwapCharacter} style={{width:'200px'}} variant="outlined" disabled>Swap Party Member</Button>
                                ) : (
                                    <Button onClick={handleSwapCharacter} style={{backgroundColor:"#212738", width:'200px'}} variant="contained">Swap Party Member</Button>
                                )
                            }
                        </div>
                </div>
            </Box>
        }
    </Fragment>
}
