import React, {Fragment} from "react";
import {Box, Table, TableCell, TableRow} from "@mui/material/";

import Actor from "./Actor";
import barb from "./sprites/player/fighter_barbarian.png";
import crusader from "./sprites/player/fighter_crusader.png";
import folk from "./sprites/player/fighter_folk.png";
import knight from "./sprites/player/fighter_knight.png";
import samurai from "./sprites/player/fighter_samurai.png";
import archer from "./sprites/player/rogue_archer.png";
import rFolk from "./sprites/player/rogue_folk.png";
import musketeer from "./sprites/player/rogue_musketeer.png";
import ninja from "./sprites/player/rogue_ninja.png";
import socialist from "./sprites/player/rogue_thief.png";
import sorcFolk from "./sprites/player/sorceress_folk.png";
import priest from "./sprites/player/sorceress_priest.png";
import acolyte from "./sprites/player/sorceress_acolyte.png";
import mage from "./sprites/player/sorceress_mage.png";
import wizard from "./sprites/player/sorceress_wizard.png";
import Button from "@mui/material/Button";

export default function Armory()
{
    // TODO: useEffect to get data on unlocked armor from user account ?

    // TODO: onClick functions for purchasing & equipping armor sets

    const spriteData = {
        w: 160,
        h: 200
    }
    return<Fragment>
        <div style={{padding:'6%'}}>
            <Table sx={{border:'5px outset #E1ECF7'}}>
                <text style={{position:'relative', left:'2%', color:'white', fontSize:'18px', fontWeight:'bold'}}>FIGHTER</text>
                <TableRow>
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={folk} data={spriteData} />
                        <div />
                        <b style={{color:'white', fontSize:'20px'}}>Folk</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'5px'} borderRadius={'6px'} sx={{border:'3px inset #F4B860'}}>
                            <text style={{fontWeight:'bold', textDecoration:'underline'}}>Moves</text>
                            <div />
                            [List all four moves here]
                            <div style={{padding:'4px'}}/>
                            <div style={{padding:'5px', textAlign:'center', backgroundColor:'#E1ECF7', outlineStyle:'outset', outlineColor:'#F4B860', borderRadius:'5px'}}>
                                <body>
                                    <text style={{fontWeight:'bold', textDecoration:'underline'}}>Stats</text>
                                    <div />
                                    <span>HP: </span>
                                    <div />
                                    <span>Physical Defense: </span>
                                    <div />
                                    <span>Magical Defense: </span>
                                    <div />
                                    <span>Speed: </span>
                                </body>
                            </div>
                            <div style={{padding:'4px'}}/>
                            <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={''}>Equip</Button>
                        </Box>
                    </TableCell>
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={barb} data={spriteData} />
                        <div />
                        <b style={{color:'white'}}>Barbarian</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'3px'} borderRadius={'6px'}>
                            <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={''}>Equip</Button>
                        </Box>
                    </TableCell>
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={crusader} data={spriteData} />
                        <div />
                        <b style={{color:'white'}}>Crusader</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'3px'} borderRadius={'6px'}>
                            <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={''}>Equip</Button>
                        </Box>
                    </TableCell>
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={samurai} data={spriteData} />
                        <div />
                        <b style={{color:'white'}}>Samurai</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'3px'} borderRadius={'6px'}>
                            <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={''}>Equip</Button>
                        </Box>
                    </TableCell>
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={knight} data={spriteData} />
                        <div />
                        <b style={{color:'white'}}>Knight</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'3px'} borderRadius={'6px'}>
                            <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={''}>Equip</Button>
                        </Box>
                    </TableCell>
                </TableRow>
                <text style={{position:'relative', left:'2%', color:'white', fontSize:'18px', fontWeight:'bold'}}>ROGUE</text>
                <TableRow>
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={rFolk} data={spriteData} />
                        <div />
                        <b style={{color:'white'}}>Folk</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'3px'} borderRadius={'6px'}>
                            <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={''}>Equip</Button>
                        </Box>
                    </TableCell>
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={socialist} data={spriteData} />
                        <div />
                        <b style={{color:'white'}}>Thief</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'3px'} borderRadius={'6px'}>
                            <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={''}>Equip</Button>
                        </Box>
                    </TableCell>
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={archer} data={spriteData} />
                        <div />
                        <b style={{color:'white'}}>Archer</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'3px'} borderRadius={'6px'}>
                            <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={''}>Equip</Button>
                        </Box>
                    </TableCell>
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={musketeer} data={spriteData} />
                        <div />
                        <b style={{color:'white'}}>Witch Hunter</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'3px'} borderRadius={'6px'}>
                            <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={''}>Equip</Button>
                        </Box>
                    </TableCell>
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={ninja} data={spriteData} />
                        <div />
                        <b style={{color:'white'}}>Ninja</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'3px'} borderRadius={'6px'}>
                            <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={''}>Equip</Button>
                        </Box>
                    </TableCell>
                </TableRow>
                <text style={{position:'relative', left:'2%', color:'white', fontSize:'18px', fontWeight:'bold'}}>SORCERESS</text>
                <TableRow>
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={sorcFolk} data={spriteData} />
                        <div />
                        <b style={{color:'white'}}>Folk</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'3px'} borderRadius={'6px'}>
                            <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={''}>Equip</Button>
                        </Box>
                    </TableCell>
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={priest} data={spriteData} />
                        <div />
                        <b style={{color:'white'}}>Acolyte</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'3px'} borderRadius={'6px'}>
                            <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={''}>Equip</Button>
                        </Box>
                    </TableCell>
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={acolyte} data={spriteData} />
                        <div />
                        <b style={{color:'white'}}>Priestess</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'3px'} borderRadius={'6px'}>
                            <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={''}>Equip</Button>
                        </Box>
                    </TableCell>
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={mage} data={spriteData} />
                        <div />
                        <b style={{color:'white'}}>Mage</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'3px'} borderRadius={'6px'}>
                            <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={''}>Equip</Button>
                        </Box>
                    </TableCell>
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={wizard} data={spriteData} />
                        <div />
                        <b style={{color:'white'}}>Dark Wizard</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'3px'} borderRadius={'6px'}>
                            <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={''}>Equip</Button>
                        </Box>
                    </TableCell>
                </TableRow>
            </Table>
        </div>
    </Fragment>

}