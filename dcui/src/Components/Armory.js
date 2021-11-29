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

    const [rogueEquipped, setRogueEquipped] = React.useState(0);
    const [r1Purchased, setR1Purchased] = React.useState(false);
    const [r2Purchased, setR2Purchased] = React.useState(false);
    const [r3Purchased, setR3Purchased] = React.useState(false);
    const [r4Purchased, setR4Purchased] = React.useState(false);

    const [sorceressEquipped, setSorceressEquipped] = React.useState(0);
    const [s1Purchased, setS1Purchased] = React.useState(false);
    const [s2Purchased, setS2Purchased] = React.useState(false);
    const [s3Purchased, setS3Purchased] = React.useState(false);
    const [s4Purchased, setS4Purchased] = React.useState(false);

    // TODO: useEffect to get data on unlocked armor from user account ?
    const [goldAmount, setGoldAmount] = React.useState(0);

    useEffect(() => {
        const api = new API();

        async function getUserInfo() {
            console.log(`user: ${JSON.stringify(user)}`);
            const goldJSONString = await api.getGold(username);
            console.log(`Armory.js:: current gold amount from the DB ${JSON.stringify(goldJSONString)}`);
            setGoldAmount(goldJSONString.data[0].gold);

            console.log(`Armory.js:: Fighter set 1 unlocked?  ->  ${JSON.stringify(await api.getF1Unlocked(username))}`);
            console.log(`Armory.js:: Currently Equipped Fighter = ${JSON.stringify(await api.getFighterEquipped(username))}`);

            // TODO: get f/r/s1-4 purchased

            // TODO: get f/r/s equipped
        }

        getUserInfo();
    }, [goldAmount]);

    function handleEquip( idx ) {
        const api = new API();

        if( idx < 5 )
        {
            setFighterEquipped(idx);
            console.log("Armory.js:: Fighter set changed to index " + idx);
            api.setFighterEquipped( idx, user );
        }
        else if( idx < 10 )
        {
            setRogueEquipped(idx);
            console.log("Armory.js:: Rogue set changed to index " + idx);
            api.setRogueEquipped( idx, user );
        }
        else
        {
            setSorceressEquipped(idx);
            console.log("Armory.js:: Sorceress set changed to index " + idx);
            api.setMageEquipped( idx, user );
        }
    }

    /*
    function handleEquipFighter( idx ) {
        setFighterEquipped(idx);
        console.log("Armory.js:: Fighter set changed to index " + idx);
        // TODO: update Users DB entry for equipped fighter set
    }
    function handleEquipRogue( idx ) {
        setRogueEquipped(idx);
        console.log("Armory.js:: Rogue set changed to index " + idx);
        // TODO: update Users DB entry for equipped fighter set
    }
    function handleEquipSorceress( idx ) {
        setSorceressEquipped(idx);
        console.log("Armory.js:: Sorceress set changed to index " + idx);
        // TODO: update Users DB entry for equipped fighter set
    }
    */

    // TODO: onClick functions for purchasing armor sets
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
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={f_folk} data={spriteData} />
                        <div />
                        <b style={{color:'white', fontSize:'20px'}}>Folk</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'5px'} borderRadius={'6px'} sx={{border:'3px ridge #F4B860'}}>
                            <text style={{fontWeight:'bold', textDecoration:'underline'}}>Moves</text>
                            <div />
                            [List all four moves here]
                            <div style={{padding:'4px'}}/>
                            <div style={{padding:'5px', textAlign:'center', backgroundColor:'#212738', outlineStyle:'outset', outlineColor:'#F4B860', borderRadius:'5px'}}>
                                <body>
                                    <text style={{fontWeight:'bold', textDecoration:'underline', color:'#F4B860'}}>Stats</text>
                                    <div />
                                    <span style={{color:'#E1ECF7'}}>HP: </span>
                                    <div />
                                    <span style={{color:'#E1ECF7'}}>Physical Attack: </span>
                                    <div />
                                    <span style={{color:'#E1ECF7'}}>Magical Attack: </span>
                                    <div />
                                    <span style={{color:'#E1ECF7'}}>Physical Defense: </span>
                                    <div />
                                    <span style={{color:'#E1ECF7'}}>Magical Defense: </span>
                                    <div />
                                    <span style={{color:'#E1ECF7'}}>Speed: </span>
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
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={f_barbarian} data={spriteData} />
                        <div />
                        <b style={{color:'white', fontSize:'20px'}}>Barbarian</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'5px'} borderRadius={'6px'} sx={{border:'3px ridge #F4B860'}}>
                            <div bgcolor={'#E1ECF7'} padding={'5px'} borderRadius={'6px'} sx={{border:'3px ridge #F4B860'}}>
                                <text style={{fontWeight:'bold', textDecoration:'underline'}}>Moves</text>
                                <div />
                                [List all four moves here]
                                <div style={{padding:'4px'}}/>
                                <div style={{padding:'5px', textAlign:'center', backgroundColor:'#212738', outlineStyle:'outset', outlineColor:'#F4B860', borderRadius:'5px'}}>
                                    <body>
                                    <text style={{fontWeight:'bold', textDecoration:'underline', color:'#F4B860'}}>Stats</text>
                                    <div />
                                    <span style={{color:'#E1ECF7'}}>HP: </span>
                                    <div />
                                    <span style={{color:'#E1ECF7'}}>Physical Attack: </span>
                                    <div />
                                    <span style={{color:'#E1ECF7'}}>Magical Attack: </span>
                                    <div />
                                    <span style={{color:'#E1ECF7'}}>Physical Defense: </span>
                                    <div />
                                    <span style={{color:'#E1ECF7'}}>Magical Defense: </span>
                                    <div />
                                    <span style={{color:'#E1ECF7'}}>Speed: </span>
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
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={f_crusader} data={spriteData} />
                        <div />
                        <b style={{color:'white'}}>Crusader</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'5px'} borderRadius={'6px'} sx={{border:'3px ridge #F4B860'}}>
                            <div bgcolor={'#E1ECF7'} padding={'5px'} borderRadius={'6px'} sx={{border:'3px ridge #F4B860'}}>
                                <text style={{fontWeight:'bold', textDecoration:'underline'}}>Moves</text>
                                <div />
                                [List all four moves here]
                                <div style={{padding:'4px'}}/>
                                <div style={{padding:'5px', textAlign:'center', backgroundColor:'#212738', outlineStyle:'outset', outlineColor:'#F4B860', borderRadius:'5px'}}>
                                    <body>
                                    <text style={{fontWeight:'bold', textDecoration:'underline', color:'#F4B860'}}>Stats</text>
                                    <div />
                                    <span style={{color:'#E1ECF7'}}>HP: </span>
                                    <div />
                                    <span style={{color:'#E1ECF7'}}>Physical Attack: </span>
                                    <div />
                                    <span style={{color:'#E1ECF7'}}>Magical Attack: </span>
                                    <div />
                                    <span style={{color:'#E1ECF7'}}>Physical Defense: </span>
                                    <div />
                                    <span style={{color:'#E1ECF7'}}>Magical Defense: </span>
                                    <div />
                                    <span style={{color:'#E1ECF7'}}>Speed: </span>
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
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={f_samurai} data={spriteData} />
                        <div />
                        <b style={{color:'white', fontSize:'20px'}}>Samurai</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'5px'} borderRadius={'6px'} sx={{border:'3px ridge #F4B860'}}>
                            <text style={{fontWeight:'bold', textDecoration:'underline'}}>Moves</text>
                            <div />
                            [List all four moves here]
                            <div style={{padding:'4px'}}/>
                            <div style={{padding:'5px', textAlign:'center', backgroundColor:'#212738', outlineStyle:'outset', outlineColor:'#F4B860', borderRadius:'5px'}}>
                                <body>
                                <text style={{fontWeight:'bold', textDecoration:'underline', color:'#F4B860'}}>Stats</text>
                                <div />
                                <span style={{color:'#E1ECF7'}}>HP: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Attack: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Attack: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Defense: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Defense: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Speed: </span>
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
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={f_knight} data={spriteData} />
                        <div />
                        <b style={{color:'white', fontSize:'20px'}}>Knight</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'5px'} borderRadius={'6px'} sx={{border:'3px ridge #F4B860'}}>
                            <text style={{fontWeight:'bold', textDecoration:'underline'}}>Moves</text>
                            <div />
                            [List all four moves here]
                            <div style={{padding:'4px'}}/>
                            <div style={{padding:'5px', textAlign:'center', backgroundColor:'#212738', outlineStyle:'outset', outlineColor:'#F4B860', borderRadius:'5px'}}>
                                <body>
                                <text style={{fontWeight:'bold', textDecoration:'underline', color:'#F4B860'}}>Stats</text>
                                <div />
                                <span style={{color:'#E1ECF7'}}>HP: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Attack: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Attack: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Defense: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Defense: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Speed: </span>
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
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={r_folk} data={spriteData} />
                        <div />
                        <b style={{color:'white', fontSize:'20px'}}>Folk</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'5px'} borderRadius={'6px'} sx={{border:'3px ridge #F4B860'}}>
                            <text style={{fontWeight:'bold', textDecoration:'underline'}}>Moves</text>
                            <div />
                            [List all four moves here]
                            <div style={{padding:'4px'}}/>
                            <div style={{padding:'5px', textAlign:'center', backgroundColor:'#212738', outlineStyle:'outset', outlineColor:'#F4B860', borderRadius:'5px'}}>
                                <body>
                                <text style={{fontWeight:'bold', textDecoration:'underline', color:'#F4B860'}}>Stats</text>
                                <div />
                                <span style={{color:'#E1ECF7'}}>HP: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Attack: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Attack: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Defense: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Defense: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Speed: </span>
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
                            [List all four moves here]
                            <div style={{padding:'4px'}}/>
                            <div style={{padding:'5px', textAlign:'center', backgroundColor:'#212738', outlineStyle:'outset', outlineColor:'#F4B860', borderRadius:'5px'}}>
                                <body>
                                <text style={{fontWeight:'bold', textDecoration:'underline', color:'#F4B860'}}>Stats</text>
                                <div />
                                <span style={{color:'#E1ECF7'}}>HP: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Attack: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Attack: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Defense: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Defense: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Speed: </span>
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
                            [List all four moves here]
                            <div style={{padding:'4px'}}/>
                            <div style={{padding:'5px', textAlign:'center', backgroundColor:'#212738', outlineStyle:'outset', outlineColor:'#F4B860', borderRadius:'5px'}}>
                                <body>
                                <text style={{fontWeight:'bold', textDecoration:'underline', color:'#F4B860'}}>Stats</text>
                                <div />
                                <span style={{color:'#E1ECF7'}}>HP: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Attack: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Attack: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Defense: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Defense: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Speed: </span>
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
                            [List all four moves here]
                            <div style={{padding:'4px'}}/>
                            <div style={{padding:'5px', textAlign:'center', backgroundColor:'#212738', outlineStyle:'outset', outlineColor:'#F4B860', borderRadius:'5px'}}>
                                <body>
                                <text style={{fontWeight:'bold', textDecoration:'underline', color:'#F4B860'}}>Stats</text>
                                <div />
                                <span style={{color:'#E1ECF7'}}>HP: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Attack: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Attack: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Defense: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Defense: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Speed: </span>
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
                            [List all four moves here]
                            <div style={{padding:'4px'}}/>
                            <div style={{padding:'5px', textAlign:'center', backgroundColor:'#212738', outlineStyle:'outset', outlineColor:'#F4B860', borderRadius:'5px'}}>
                                <body>
                                <text style={{fontWeight:'bold', textDecoration:'underline', color:'#F4B860'}}>Stats</text>
                                <div />
                                <span style={{color:'#E1ECF7'}}>HP: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Attack: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Attack: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Defense: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Defense: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Speed: </span>
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
                            [List all four moves here]
                            <div style={{padding:'4px'}}/>
                            <div style={{padding:'5px', textAlign:'center', backgroundColor:'#212738', outlineStyle:'outset', outlineColor:'#F4B860', borderRadius:'5px'}}>
                                <body>
                                <text style={{fontWeight:'bold', textDecoration:'underline', color:'#F4B860'}}>Stats</text>
                                <div />
                                <span style={{color:'#E1ECF7'}}>HP: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Attack: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Attack: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Defense: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Defense: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Speed: </span>
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
                            [List all four moves here]
                            <div style={{padding:'4px'}}/>
                            <div style={{padding:'5px', textAlign:'center', backgroundColor:'#212738', outlineStyle:'outset', outlineColor:'#F4B860', borderRadius:'5px'}}>
                                <body>
                                <text style={{fontWeight:'bold', textDecoration:'underline', color:'#F4B860'}}>Stats</text>
                                <div />
                                <span style={{color:'#E1ECF7'}}>HP: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Attack: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Attack: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Defense: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Defense: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Speed: </span>
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
                            [List all four moves here]
                            <div style={{padding:'4px'}}/>
                            <div style={{padding:'5px', textAlign:'center', backgroundColor:'#212738', outlineStyle:'outset', outlineColor:'#F4B860', borderRadius:'5px'}}>
                                <body>
                                <text style={{fontWeight:'bold', textDecoration:'underline', color:'#F4B860'}}>Stats</text>
                                <div />
                                <span style={{color:'#E1ECF7'}}>HP: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Attack: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Attack: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Defense: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Defense: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Speed: </span>
                                </body>
                            </div>
                            <div style={{padding:'4px'}}/>
                            {
                                (s2Purchased) ? (
                                    (sorceressEquipped === 11) ? (
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
                            [List all four moves here]
                            <div style={{padding:'4px'}}/>
                            <div style={{padding:'5px', textAlign:'center', backgroundColor:'#212738', outlineStyle:'outset', outlineColor:'#F4B860', borderRadius:'5px'}}>
                                <body>
                                <text style={{fontWeight:'bold', textDecoration:'underline', color:'#F4B860'}}>Stats</text>
                                <div />
                                <span style={{color:'#E1ECF7'}}>HP: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Attack: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Attack: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Defense: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Defense: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Speed: </span>
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
                            [List all four moves here]
                            <div style={{padding:'4px'}}/>
                            <div style={{padding:'5px', textAlign:'center', backgroundColor:'#212738', outlineStyle:'outset', outlineColor:'#F4B860', borderRadius:'5px'}}>
                                <body>
                                <text style={{fontWeight:'bold', textDecoration:'underline', color:'#F4B860'}}>Stats</text>
                                <div />
                                <span style={{color:'#E1ECF7'}}>HP: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Attack: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Attack: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Physical Defense: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Magical Defense: </span>
                                <div />
                                <span style={{color:'#E1ECF7'}}>Speed: </span>
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