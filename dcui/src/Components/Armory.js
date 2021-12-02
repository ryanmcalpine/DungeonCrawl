import React, {Fragment, useEffect} from "react";
import {Box, Button, Table, TableCell, TableRow} from "@mui/material/";

import API from "../API_Interface/API_Interface";
import Actor from "./Actor";
import goldIcon from '../Components/sprites/ui/GoldenCoin.png';
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
import {Avatar} from "@mui/material";

 /*
const armoryTableAttributes = [
    {
        attributeName: 'Total Transactions',
        attributeDBName: 'totalTransactions',
        align: 'left'
    }
];
 */

export default function Armory(user)
{
    const [username,setusername] = React.useState(user.user);
    const [fighterEquipped, setFighterEquipped] = React.useState(0);
    const [f1Purchased, setF1Purchased] = React.useState(false);
    const [f2Purchased, setF2Purchased] = React.useState(false);
    const [f3Purchased, setF3Purchased] = React.useState(false);
    const [f4Purchased, setF4Purchased] = React.useState(false);

    const [rogueEquipped, setRogueEquipped] = React.useState(5);
    const [r1Purchased, setR1Purchased] = React.useState(false);
    const [r2Purchased, setR2Purchased] = React.useState(false);
    const [r3Purchased, setR3Purchased] = React.useState(false);
    const [r4Purchased, setR4Purchased] = React.useState(false);

    const [sorceressEquipped, setSorceressEquipped] = React.useState(10);
    const [s1Purchased, setS1Purchased] = React.useState(false);
    const [s2Purchased, setS2Purchased] = React.useState(false);
    const [s3Purchased, setS3Purchased] = React.useState(false);
    const [s4Purchased, setS4Purchased] = React.useState(false);

    const [goldAmount, setGoldAmount] = React.useState(0);

    useEffect(() => {
        const api = new API();

        async function getUserInfo() {
            const goldJSONString = await api.getGold(username);
            setGoldAmount(goldJSONString.data[0].gold);

            const f1u = await api.getF1Unlocked(username);
            setF1Purchased(f1u.data[0].fighter1Unlocked);
            const f2u = await api.getF2Unlocked(username);
            setF2Purchased(f2u.data[0].fighter2Unlocked);
            const f3u = await api.getF3Unlocked(username);
            setF3Purchased(f3u.data[0].fighter3Unlocked);
            const f4u = await api.getF4Unlocked(username);
            setF4Purchased(f4u.data[0].fighter4Unlocked);
            const r1u = await api.getR1Unlocked(username);
            setR1Purchased(r1u.data[0].rogue1Unlocked);
            const r2u = await api.getR2Unlocked(username);
            setR2Purchased(r2u.data[0].rogue2Unlocked);
            const r3u = await api.getR3Unlocked(username);
            setR3Purchased(r3u.data[0].rogue3Unlocked);
            const r4u = await api.getR4Unlocked(username);
            setR4Purchased(r4u.data[0].rogue4Unlocked);
            const m1u = await api.getM1Unlocked(username);
            setS1Purchased(m1u.data[0].mage1Unlocked);
            const m2u = await api.getM2Unlocked(username);
            setS2Purchased(m2u.data[0].mage2Unlocked);
            const m3u = await api.getM3Unlocked(username);
            setS3Purchased(m3u.data[0].mage3Unlocked);
            const m4u = await api.getM4Unlocked(username);
            setS4Purchased(m4u.data[0].mage4Unlocked);
            
            const feq = await api.getFighterEquipped(username);
            setFighterEquipped(feq.data[0].fighterEquipped)
            const req = await api.getRogueEquipped(username);
            setRogueEquipped(req.data[0].rogueEquipped)
            const meq = await api.getMageEquipped(username);
            setSorceressEquipped(meq.data[0].mageEquipped)
        }

        getUserInfo();
    }, [goldAmount]);

    function handleEquip( idx ) {
        const api = new API();

        if( idx < 5 )
        {
            setFighterEquipped(idx);
            api.setFighterEquipped( idx, username );
        }
        else if( idx < 10 )
        {
            setRogueEquipped(idx);
            api.setRogueEquipped( idx, username );
        }
        else
        {
            setSorceressEquipped(idx);
            api.setMageEquipped( idx, username );
        }
    }

    function handlePurchase( idx ) {
        const api = new API();
        switch( idx )
        {
            // cases for 1-4, 6-9, 11-14
            case 1:
                if( goldAmount >= 50 )
                {
                    setF1Purchased(true);
                    setGoldAmount( goldAmount - 50 )
                    api.updateGold( username, (goldAmount - 50) );
                    api.setF1Unlocked(1, username);
                }
                break;
            case 2:
                if( goldAmount >= 110 )
                {
                    setF2Purchased(true);
                    setGoldAmount( goldAmount - 110);
                    api.updateGold( username, (goldAmount - 110) );
                    api.setF2Unlocked(1, username);
                }
                break;
            case 3:
                if( goldAmount >= 180 )
                {
                    setF3Purchased(true);
                    setGoldAmount( goldAmount - 180);
                    api.updateGold( username, (goldAmount - 180) );
                    api.setF3Unlocked(1, username);
                }
                break;
            case 4:
                if( goldAmount >= 260 )
                {
                    setF4Purchased(true);
                    setGoldAmount( goldAmount - 260);
                    api.updateGold( username, (goldAmount - 260) );
                    api.setF4Unlocked(1, username);
                }
                break;
            case 6:
                if( goldAmount >= 50 )
                {
                    setR1Purchased(true);
                    setGoldAmount( goldAmount - 50);
                    api.updateGold( username, (goldAmount - 50) );
                    api.setR1Unlocked(1, username);
                }
                break;
            case 7:
                if( goldAmount >= 110 )
                {
                    setR2Purchased(true);
                    setGoldAmount( goldAmount - 110);
                    api.updateGold( username, (goldAmount - 110) );
                    api.setR2Unlocked(1, username);
                }
                break;
            case 8:
                if( goldAmount >= 180 )
                {
                    setR3Purchased(true);
                    setGoldAmount( goldAmount - 180);
                    api.updateGold( username, (goldAmount - 180) );
                    api.setR3Unlocked(1, username);
                }
                break;
            case 9:
                if( goldAmount >= 260 )
                {
                    setR4Purchased(true);
                    setGoldAmount( goldAmount - 260);
                    api.updateGold( username, (goldAmount - 260) );
                    api.setR4Unlocked(1, username);
                }
                break;
            case 11:
                if( goldAmount >= 50 )
                {
                    setS1Purchased(true);
                    setGoldAmount( goldAmount - 50);
                    api.updateGold( username, (goldAmount - 50) );
                    api.setM1Unlocked(1, username);
                }
                break;
            case 12:
                if( goldAmount >= 110 )
                {
                    setS2Purchased(true);
                    setGoldAmount( goldAmount - 110);
                    api.updateGold( username, (goldAmount - 110) );
                    api.setM2Unlocked(1, username);
                }
                break;
            case 13:
                if( goldAmount >= 180 )
                {
                    setS3Purchased(true);
                    setGoldAmount( goldAmount - 180);
                    api.updateGold( username, (goldAmount - 180) );
                    api.setM3Unlocked(1, username);
                }
                break;
            case 14:
                if( goldAmount >= 260 )
                {
                    setS4Purchased(true);
                    setGoldAmount( goldAmount - 260);
                    api.updateGold( username, (goldAmount - 260) );
                    api.setM4Unlocked(1, username);
                }
        }
    }

    const spriteData = {
        w: 160,
        h: 200
    }
    return<Fragment>
        <div style={{padding:'6%'}}>
            <div style={{position:'absolute', left:'91%', top:'3%', display:'flex', alignItems:'center', backgroundColor:'#E1ECF7', borderRadius:'6px', paddingRight:'6px'}}>
                <Avatar src={goldIcon} />
                <span>{goldAmount}</span>
            </div>
            <Table sx={{border:'5px ridge #F4B860'}}>
                <text style={{position:'relative', left:'2%', color:'white', fontSize:'18px', fontWeight:'bold'}}>FIGHTER</text>
                <TableRow>
                    <TableCell component={"div"} align={'center'} style={{width: '20%'}}>
                        <Actor sprite={f_folk} data={spriteData} />
                        <div />
                        <b style={{color:'white', fontSize:'20px'}}>Folk</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'5px'} borderRadius={'6px'} sx={{border:'3px ridge #F4B860'}}>
                            <text style={{fontWeight:'bold', textDecoration:'underline'}}>Moves</text>
                            <div />
                            <span>Quick Attack</span>
                            <div style={{padding:'4px'}}/>
                            <div style={{padding:'5px', textAlign:'center', backgroundColor:'#212738', outlineStyle:'outset', outlineColor:'#F4B860', borderRadius:'5px'}}>
                                <body>
                                    <text style={{fontWeight:'bold', textDecoration:'underline', color:'#F4B860'}}>Stats</text>
                                    <div />
                                    <span style={{color:'#E1ECF7'}}>HP: 20</span>
                                    <div />
                                    <span style={{color:'#E1ECF7'}}>Physical Attack: 12</span>
                                    <div />
                                    <span style={{color:'#E1ECF7'}}>Magical Attack: 3</span>
                                    <div />
                                    <span style={{color:'#E1ECF7'}}>Physical Defense: 8</span>
                                    <div />
                                    <span style={{color:'#E1ECF7'}}>Magical Defense: 2</span>
                                    <div />
                                    <span style={{color:'#E1ECF7'}}>Speed: 8</span>
                                </body>
                            </div>
                            <div style={{padding:'4px'}}/>
                            {
                                (fighterEquipped === 0) ? (
                                    <Button variant={"contained"} style={{backgroundColor:"#F4B860"}} onClick={''}>Equipped</Button>
                                ) : (
                                    <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={ () => handleEquip(0) }>Equip</Button>
                                )
                            }
                        </Box>
                    </TableCell>
                    <TableCell component={"div"} align={'center'} style={{width: '20%'}}>
                        <Actor sprite={f_barbarian} data={spriteData} />
                        <div />
                        <b style={{color:'white', fontSize:'20px'}}>Barbarian</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'5px'} borderRadius={'6px'} sx={{border:'3px ridge #F4B860'}}>
                            <div bgcolor={'#E1ECF7'} padding={'5px'} borderRadius={'6px'} sx={{border:'3px ridge #F4B860'}}>
                                <text style={{fontWeight:'bold', textDecoration:'underline'}}>Moves</text>
                                <div />
                                <span>Quick Attack | Heavy Strike</span>
                                <div style={{padding:'4px'}}/>
                                <div style={{padding:'5px', textAlign:'center', backgroundColor:'#212738', outlineStyle:'outset', outlineColor:'#F4B860', borderRadius:'5px'}}>
                                    <body>
                                    <text style={{fontWeight:'bold', textDecoration:'underline', color:'#F4B860'}}>Stats</text>
                                    <div />
                                    <span style={{color:'#E1ECF7'}}>HP: 25</span>
                                    <div />
                                    <span style={{color:'#E1ECF7'}}>Physical Attack: 15</span>
                                    <div />
                                    <span style={{color:'#E1ECF7'}}>Magical Attack: 5</span>
                                    <div />
                                    <span style={{color:'#E1ECF7'}}>Physical Defense: 11</span>
                                    <div />
                                    <span style={{color:'#E1ECF7'}}>Magical Defense: 4</span>
                                    <div />
                                    <span style={{color:'#E1ECF7'}}>Speed: 10</span>
                                    </body>
                                </div>
                                <div style={{padding:'4px'}}/>
                            {
                                (f1Purchased) ? (
                                    (fighterEquipped === 1) ? (
                                        <Button variant={"contained"} style={{backgroundColor:"#F4B860"}} onClick={''}>
                                            Equipped
                                        </Button>
                                    ) : (
                                        <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={ () => handleEquip(1) }>
                                            Equip
                                        </Button>
                                    )
                                ) : (
                                    <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={ () => handlePurchase(1)}>
                                        <Avatar src={goldIcon} sx={{height:'24px', width:'24px'}} />
                                        50
                                    </Button>
                                )
                            }
                            </div>
                        </Box>
                    </TableCell>
                    <TableCell component={"div"} align={'center'} style={{width: '20%'}}>
                        <Actor sprite={f_crusader} data={spriteData} />
                        <div />
                        <b style={{color:'white', fontSize:'20px'}}>Crusader</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'5px'} borderRadius={'6px'} sx={{border:'3px ridge #F4B860'}}>
                            <div bgcolor={'#E1ECF7'} padding={'5px'} borderRadius={'6px'} sx={{border:'3px ridge #F4B860'}}>
                                <text style={{fontWeight:'bold', textDecoration:'underline'}}>Moves</text>
                                <div />
                                <span>Quick Attack | Flurry | Frenzy</span>
                                <div style={{padding:'4px'}}/>
                                <div style={{padding:'5px', textAlign:'center', backgroundColor:'#212738', outlineStyle:'outset', outlineColor:'#F4B860', borderRadius:'5px'}}>
                                    <body>
                                    <text style={{fontWeight:'bold', textDecoration:'underline', color:'#F4B860'}}>Stats</text>
                                    <div />
                                    <span style={{color:'#E1ECF7'}}>HP: 32</span>
                                    <div />
                                    <span style={{color:'#E1ECF7'}}>Physical Attack: 18</span>
                                    <div />
                                    <span style={{color:'#E1ECF7'}}>Magical Attack: 7</span>
                                    <div />
                                    <span style={{color:'#E1ECF7'}}>Physical Defense: 14</span>
                                    <div />
                                    <span style={{color:'#E1ECF7'}}>Magical Defense: 7</span>
                                    <div />
                                    <span style={{color:'#E1ECF7'}}>Speed: 11</span>
                                    </body>
                                </div>
                                <div style={{padding:'4px'}}/>
                                {
                                    (f2Purchased) ? (
                                        (fighterEquipped === 2) ? (
                                            <Button variant={"contained"} style={{backgroundColor:"#F4B860"}} onClick={''}>
                                                Equipped
                                            </Button>
                                        ) : (
                                            <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={ () => handleEquip(2) }>
                                                Equip
                                            </Button>
                                        )
                                    ) : (
                                        <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={ () => handlePurchase(2)}>
                                            <Avatar src={goldIcon} sx={{height:'24px', width:'24px'}} />
                                            110
                                        </Button>
                                    )
                                }
                            </div>
                        </Box>
                    </TableCell>
                    <TableCell component={"div"} align={'center'} style={{width: '20%'}}>
                        <Actor sprite={f_samurai} data={spriteData} />
                        <div />
                        <b style={{color:'white', fontSize:'20px'}}>Samurai</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'5px'} borderRadius={'6px'} sx={{border:'3px ridge #F4B860'}}>
                            <text style={{fontWeight:'bold', textDecoration:'underline'}}>Moves</text>
                            <div />
                            <span>Tornado Slash | Dashing Strike | Ground Pound | Critical Hit</span>
                            <div style={{padding:'4px'}}/>
                            <div style={{padding:'5px', textAlign:'center', backgroundColor:'#212738', outlineStyle:'outset', outlineColor:'#F4B860', borderRadius:'5px'}}>
                                <body>
                                <text style={{fontWeight:'bold', textDecoration:'underline', color:'#F4B860'}}>Stats</text>
                                <div />
                                <span style={{color:'#E1ECF7'}}>HP: 40</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Attack: 20</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Attack: 9</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Defense: 16</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Defense: 10</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Speed: 13</span>
                                </body>
                            </div>
                            <div style={{padding:'4px'}}/>
                            {
                                (f3Purchased) ? (
                                    (fighterEquipped === 3) ? (
                                        <Button variant={"contained"} style={{backgroundColor:"#F4B860"}} onClick={''}>
                                            Equipped
                                        </Button>
                                    ) : (
                                        <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={ () => handleEquip(3) }>
                                            Equip
                                        </Button>
                                    )
                                ) : (
                                    <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={ () => handlePurchase(3)}>
                                        <Avatar src={goldIcon} sx={{height:'24px', width:'24px'}} />
                                        180
                                    </Button>
                                )
                            }
                        </Box>
                    </TableCell>
                    <TableCell component={"div"} align={'center'} style={{width: '20%'}}>
                        <Actor sprite={f_knight} data={spriteData} />
                        <div />
                        <b style={{color:'white', fontSize:'20px'}}>Knight</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'5px'} borderRadius={'6px'} sx={{border:'3px ridge #F4B860'}}>
                            <text style={{fontWeight:'bold', textDecoration:'underline'}}>Moves</text>
                            <div />
                            <span>Shield Bash | Tornado Slash | Ground Pound | Astronomical Hit</span>
                            <div style={{padding:'4px'}}/>
                            <div style={{padding:'5px', textAlign:'center', backgroundColor:'#212738', outlineStyle:'outset', outlineColor:'#F4B860', borderRadius:'5px'}}>
                                <body>
                                <text style={{fontWeight:'bold', textDecoration:'underline', color:'#F4B860'}}>Stats</text>
                                <div />
                                <span style={{color:'#E1ECF7'}}>HP: 50</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Attack: 23</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Attack: 13</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Defense: 19</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Defense: 13</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Speed: 14</span>
                                </body>
                            </div>
                            <div style={{padding:'4px'}}/>
                            {
                                (f4Purchased) ? (
                                    (fighterEquipped === 4) ? (
                                        <Button variant={"contained"} style={{backgroundColor:"#F4B860"}} onClick={''}>
                                            Equipped
                                        </Button>
                                    ) : (
                                        <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={ () => handleEquip(4) }>
                                            Equip
                                        </Button>
                                    )
                                ) : (
                                    <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={ () => handlePurchase(4)}>
                                        <Avatar src={goldIcon} sx={{height:'24px', width:'24px'}} />
                                        260
                                    </Button>
                                )
                            }
                        </Box>
                    </TableCell>
                </TableRow>
                <text style={{position:'relative', left:'2%', color:'white', fontSize:'18px', fontWeight:'bold'}}>ROGUE</text>
                <TableRow>
                    <TableCell component={"div"} align={'center'} >
                        <Actor sprite={r_folk} data={spriteData} />
                        <div />
                        <b style={{color:'white', fontSize:'20px'}}>Folk</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'5px'} borderRadius={'6px'} sx={{border:'3px ridge #F4B860'}}>
                            <text style={{fontWeight:'bold', textDecoration:'underline'}}>Moves</text>
                            <div />
                            <span>Quick Attack</span>
                            <div style={{padding:'4px'}}/>
                            <div style={{padding:'5px', textAlign:'center', backgroundColor:'#212738', outlineStyle:'outset', outlineColor:'#F4B860', borderRadius:'5px'}}>
                                <body>
                                <text style={{fontWeight:'bold', textDecoration:'underline', color:'#F4B860'}}>Stats</text>
                                <div />
                                <span style={{color:'#E1ECF7'}}>HP: 18</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Attack: 9</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Attack: 6</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Defense: 6</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Defense: 4</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Speed: 14</span>
                                </body>
                            </div>
                            <div style={{padding:'4px'}}/>
                            {
                                (rogueEquipped === 5) ? (
                                    <Button variant={"contained"} style={{backgroundColor:"#F4B860"}} onClick={''}>Equipped</Button>
                                ) : (
                                    <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={ () => handleEquip(5) }>Equip</Button>
                                )
                            }
                        </Box>
                    </TableCell>
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={r_thief} data={spriteData} />
                        <div />
                        <b style={{color:'white', fontSize:'20px'}}>Thief</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'5px'} borderRadius={'6px'} sx={{border:'3px ridge #F4B860'}}>
                            <text style={{fontWeight:'bold', textDecoration:'underline'}}>Moves</text>
                            <div />
                            <span>Quick Attack | Thrown Bomb</span>
                            <div style={{padding:'4px'}}/>
                            <div style={{padding:'5px', textAlign:'center', backgroundColor:'#212738', outlineStyle:'outset', outlineColor:'#F4B860', borderRadius:'5px'}}>
                                <body>
                                <text style={{fontWeight:'bold', textDecoration:'underline', color:'#F4B860'}}>Stats</text>
                                <div />
                                <span style={{color:'#E1ECF7'}}>HP: 23</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Attack: 11</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Attack: 9</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Defense: 9</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Defense: 6</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Speed: 15</span>
                                </body>
                            </div>
                            <div style={{padding:'4px'}}/>
                            {
                                (r1Purchased) ? (
                                    (rogueEquipped === 6) ? (
                                        <Button variant={"contained"} style={{backgroundColor:"#F4B860"}} onClick={''}>
                                            Equipped
                                        </Button>
                                    ) : (
                                        <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={ () => handleEquip(6) }>
                                            Equip
                                        </Button>
                                    )
                                ) : (
                                    <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={ () => handlePurchase(6)}>
                                        <Avatar src={goldIcon} sx={{height:'24px', width:'24px'}} />
                                        50
                                    </Button>
                                )
                            }
                        </Box>
                    </TableCell>
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={r_archer} data={spriteData} />
                        <div />
                        <b style={{color:'white', fontSize:'20px'}}>Archer</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'5px'} borderRadius={'6px'} sx={{border:'3px ridge #F4B860'}}>
                            <text style={{fontWeight:'bold', textDecoration:'underline'}}>Moves</text>
                            <div />
                            <span>Acid Shot | Thrown Bomb | Fire Bolt</span>
                            <div style={{padding:'4px'}}/>
                            <div style={{padding:'5px', textAlign:'center', backgroundColor:'#212738', outlineStyle:'outset', outlineColor:'#F4B860', borderRadius:'5px'}}>
                                <body>
                                <text style={{fontWeight:'bold', textDecoration:'underline', color:'#F4B860'}}>Stats</text>
                                <div />
                                <span style={{color:'#E1ECF7'}}>HP: 29</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Attack: 14</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Attack: 11</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Defense: 12</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Defense: 9</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Speed: 17</span>
                                </body>
                            </div>
                            <div style={{padding:'4px'}}/>
                            {
                                (r2Purchased) ? (
                                    (rogueEquipped === 7) ? (
                                        <Button variant={"contained"} style={{backgroundColor:"#F4B860"}} onClick={''}>
                                            Equipped
                                        </Button>
                                    ) : (
                                        <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={ () => handleEquip(7) }>
                                            Equip
                                        </Button>
                                    )
                                ) : (
                                    <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={ () => handlePurchase(7)}>
                                        <Avatar src={goldIcon} sx={{height:'24px', width:'24px'}} />
                                        110
                                    </Button>
                                )
                            }
                        </Box>
                    </TableCell>
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={r_witchhunter} data={spriteData} />
                        <div />
                        <b style={{color:'white', fontSize:'20px'}}>Witch Hunter</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'5px'} borderRadius={'6px'} sx={{border:'3px ridge #F4B860'}}>
                            <text style={{fontWeight:'bold', textDecoration:'underline'}}>Moves</text>
                            <div />
                            <span>Explosive Force | Thrown Bomb | Star Fall | Nether Bolt</span>
                            <div style={{padding:'4px'}}/>
                            <div style={{padding:'5px', textAlign:'center', backgroundColor:'#212738', outlineStyle:'outset', outlineColor:'#F4B860', borderRadius:'5px'}}>
                                <body>
                                <text style={{fontWeight:'bold', textDecoration:'underline', color:'#F4B860'}}>Stats</text>
                                <div />
                                <span style={{color:'#E1ECF7'}}>HP: 36</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Attack: 16</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Attack: 13</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Defense: 14</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Defense: 12</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Speed: 18</span>
                                </body>
                            </div>
                            <div style={{padding:'4px'}}/>
                            {
                                (r3Purchased) ? (
                                    (rogueEquipped === 8) ? (
                                        <Button variant={"contained"} style={{backgroundColor:"#F4B860"}} onClick={''}>
                                            Equipped
                                        </Button>
                                    ) : (
                                        <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={ () => handleEquip(8) }>
                                            Equip
                                        </Button>
                                    )
                                ) : (
                                    <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={ () => handlePurchase(8)}>
                                        <Avatar src={goldIcon} sx={{height:'24px', width:'24px'}} />
                                        180
                                    </Button>
                                )
                            }
                        </Box>
                    </TableCell>
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={r_ninja} data={spriteData} />
                        <div />
                        <b style={{color:'white', fontSize:'20px'}}>Ninja</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'5px'} borderRadius={'6px'} sx={{border:'3px ridge #F4B860'}}>
                            <text style={{fontWeight:'bold', textDecoration:'underline'}}>Moves</text>
                            <div />
                            <span>Dashing Strike | Explosive Force | Ground Pound | Critical Hit</span>
                            <div style={{padding:'4px'}}/>
                            <div style={{padding:'5px', textAlign:'center', backgroundColor:'#212738', outlineStyle:'outset', outlineColor:'#F4B860', borderRadius:'5px'}}>
                                <body>
                                <text style={{fontWeight:'bold', textDecoration:'underline', color:'#F4B860'}}>Stats</text>
                                <div />
                                <span style={{color:'#E1ECF7'}}>HP: 42</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Attack: 20</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Attack: 17</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Defense: 17</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Defense: 15</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Speed: 20</span>
                                </body>
                            </div>
                            <div style={{padding:'4px'}}/>
                            {
                                (r4Purchased) ? (
                                    (rogueEquipped === 9) ? (
                                        <Button variant={"contained"} style={{backgroundColor:"#F4B860"}} onClick={''}>
                                            Equipped
                                        </Button>
                                    ) : (
                                        <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={ () => handleEquip(9) }>
                                            Equip
                                        </Button>
                                    )
                                ) : (
                                    <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={ () => handlePurchase(9)}>
                                        <Avatar src={goldIcon} sx={{height:'24px', width:'24px'}} />
                                        260
                                    </Button>
                                )
                            }
                        </Box>
                    </TableCell>
                </TableRow>
                <text style={{position:'relative', left:'2%', color:'white', fontSize:'18px', fontWeight:'bold'}}>SORCERESS</text>
                <TableRow>
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={s_folk} data={spriteData} />
                        <div />
                        <b style={{color:'white', fontSize:'20px'}}>Folk</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'5px'} borderRadius={'6px'} sx={{border:'3px ridge #F4B860'}}>
                            <text style={{fontWeight:'bold', textDecoration:'underline'}}>Moves</text>
                            <div />
                            <span>Quick Attack</span>
                            <div style={{padding:'4px'}}/>
                            <div style={{padding:'5px', textAlign:'center', backgroundColor:'#212738', outlineStyle:'outset', outlineColor:'#F4B860', borderRadius:'5px'}}>
                                <body>
                                <text style={{fontWeight:'bold', textDecoration:'underline', color:'#F4B860'}}>Stats</text>
                                <div />
                                <span style={{color:'#E1ECF7'}}>HP: 16</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Attack: 3</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Attack: 12</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Defense: 2</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Defense: 8</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Speed: 11</span>
                                </body>
                            </div>
                            <div style={{padding:'4px'}}/>
                            {
                                (sorceressEquipped === 10) ? (
                                    <Button variant={"contained"} style={{backgroundColor:"#F4B860"}} onClick={''}>Equipped</Button>
                                ) : (
                                    <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={ () => handleEquip(10) }>Equip</Button>
                                )
                            }
                        </Box>
                    </TableCell>
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={s_acolyte} data={spriteData} />
                        <div />
                        <b style={{color:'white', fontSize:'20px'}}>Acolyte</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'5px'} borderRadius={'6px'} sx={{border:'3px ridge #F4B860'}}>
                            <text style={{fontWeight:'bold', textDecoration:'underline'}}>Moves</text>
                            <div />
                            <span>Firebolt | Fire Fountain</span>
                            <div style={{padding:'4px'}}/>
                            <div style={{padding:'5px', textAlign:'center', backgroundColor:'#212738', outlineStyle:'outset', outlineColor:'#F4B860', borderRadius:'5px'}}>
                                <body>
                                <text style={{fontWeight:'bold', textDecoration:'underline', color:'#F4B860'}}>Stats</text>
                                <div />
                                <span style={{color:'#E1ECF7'}}>HP: 21</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Attack: 5</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Attack: 15</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Defense: 5</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Defense: 10</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Speed: 12</span>
                                </body>
                            </div>
                            <div style={{padding:'4px'}}/>
                            {
                                (s1Purchased) ? (
                                    (sorceressEquipped === 11) ? (
                                        <Button variant={"contained"} style={{backgroundColor:"#F4B860"}} onClick={''}>
                                            Equipped
                                        </Button>
                                    ) : (
                                        <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={ () => handleEquip(11) }>
                                            Equip
                                        </Button>
                                    )
                                ) : (
                                    <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={ () => handlePurchase(11)}>
                                        <Avatar src={goldIcon} sx={{height:'24px', width:'24px'}} />
                                        50
                                    </Button>
                                )
                            }
                        </Box>
                    </TableCell>
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={s_priestess} data={spriteData} />
                        <div />
                        <b style={{color:'white', fontSize:'20px'}}>Priestess</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'5px'} borderRadius={'6px'} sx={{border:'3px ridge #F4B860'}}>
                            <text style={{fontWeight:'bold', textDecoration:'underline'}}>Moves</text>
                            <div />
                            <span>Aura Blast | Explosive Force | Fire Flare | Magic Missile</span>
                            <div style={{padding:'4px'}}/>
                            <div style={{padding:'5px', textAlign:'center', backgroundColor:'#212738', outlineStyle:'outset', outlineColor:'#F4B860', borderRadius:'5px'}}>
                                <body>
                                <text style={{fontWeight:'bold', textDecoration:'underline', color:'#F4B860'}}>Stats</text>
                                <div />
                                <span style={{color:'#E1ECF7'}}>HP: 26</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Attack: 7</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Attack: 18</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Defense: 8</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Defense: 13</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Speed: 14</span>
                                </body>
                            </div>
                            <div style={{padding:'4px'}}/>
                            {
                                (s2Purchased) ? (
                                    (sorceressEquipped === 12) ? (
                                        <Button variant={"contained"} style={{backgroundColor:"#F4B860"}} onClick={''}>
                                            Equipped
                                        </Button>
                                    ) : (
                                        <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={ () => handleEquip(12) }>
                                            Equip
                                        </Button>
                                    )
                                ) : (
                                    <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={ () => handlePurchase(12)}>
                                        <Avatar src={goldIcon} sx={{height:'24px', width:'24px'}} />
                                        110
                                    </Button>
                                )
                            }
                        </Box>
                    </TableCell>
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={s_mage} data={spriteData} />
                        <div />
                        <b style={{color:'white', fontSize:'20px'}}>Mage</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'5px'} borderRadius={'6px'} sx={{border:'3px ridge #F4B860'}}>
                            <text style={{fontWeight:'bold', textDecoration:'underline'}}>Moves</text>
                            <div />
                            <span>Aura Blast | Nether Bolt | Star Fall | Tornado Slash</span>
                            <div style={{padding:'4px'}}/>
                            <div style={{padding:'5px', textAlign:'center', backgroundColor:'#212738', outlineStyle:'outset', outlineColor:'#F4B860', borderRadius:'5px'}}>
                                <body>
                                <text style={{fontWeight:'bold', textDecoration:'underline', color:'#F4B860'}}>Stats</text>
                                <div />
                                <span style={{color:'#E1ECF7'}}>HP: 32</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Attack: 9</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Attack: 20</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Defense: 10</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Defense: 16</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Speed: 15</span>
                                </body>
                            </div>
                            <div style={{padding:'4px'}}/>
                            {
                                (s3Purchased) ? (
                                    (sorceressEquipped === 13) ? (
                                        <Button variant={"contained"} style={{backgroundColor:"#F4B860"}} onClick={''}>
                                            Equipped
                                        </Button>
                                    ) : (
                                        <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={ () => handleEquip(13) }>
                                            Equip
                                        </Button>
                                    )
                                ) : (
                                    <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={ () => handlePurchase(13)}>
                                        <Avatar src={goldIcon} sx={{height:'24px', width:'24px'}} />
                                        180
                                    </Button>
                                )
                            }
                        </Box>
                    </TableCell>
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={s_wizard} data={spriteData} />
                        <div />
                        <b style={{color:'white', fontSize:'20px'}}>Dark Wizard</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'5px'} borderRadius={'6px'} sx={{border:'3px ridge #F4B860'}}>
                            <text style={{fontWeight:'bold', textDecoration:'underline'}}>Moves</text>
                            <div />
                            <span>Supernova | Dark Aether | Black Hole | Black Atom</span>
                            <div style={{padding:'4px'}}/>
                            <div style={{padding:'5px', textAlign:'center', backgroundColor:'#212738', outlineStyle:'outset', outlineColor:'#F4B860', borderRadius:'5px'}}>
                                <body>
                                <text style={{fontWeight:'bold', textDecoration:'underline', color:'#F4B860'}}>Stats</text>
                                <div />
                                <span style={{color:'#E1ECF7'}}>HP: 38</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Attack: 12</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Attack: 24</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Defense: 13</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Defense: 19</span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Speed: 17</span>
                                </body>
                            </div>
                            <div style={{padding:'4px'}}/>
                            {
                                (s4Purchased) ? (
                                    (sorceressEquipped === 14) ? (
                                        <Button variant={"contained"} style={{backgroundColor:"#F4B860"}} onClick={''}>
                                            Equipped
                                        </Button>
                                    ) : (
                                        <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={ () => handleEquip(14) }>
                                            Equip
                                        </Button>
                                    )
                                ) : (
                                    <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={ () => handlePurchase(14)}>
                                        <Avatar src={goldIcon} sx={{height:'24px', width:'24px'}} />
                                        260
                                    </Button>
                                )
                            }
                        </Box>
                    </TableCell>
                </TableRow>
            </Table>
        </div>
    </Fragment>
}