import React, {Fragment} from "react";
import {Box, Button, Table, TableCell, TableRow} from "@mui/material/";

import Actor from "./Actor";
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
            <Table sx={{border:'5px ridge #F4B860'}}>
                <text style={{position:'relative', left:'2%', color:'white', fontSize:'18px', fontWeight:'bold'}}>FIGHTER</text>

                <TableRow>
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={f_folk} data={spriteData} />
                        <div />
                        <b style={{color:'white', fontSize:'20px'}}>Folk</b>
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
                                    <span style={{color:'#E1ECF7'}}>Physical Defense: </span>
                                    <div />
                                    <span style={{color:'#E1ECF7'}}>Magical Defense: </span>
                                    <div />
                                    <span style={{color:'#E1ECF7'}}>Speed: </span>
                                </body>
                            </div>
                            <div style={{padding:'4px'}}/>
                            <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={''}>Equip</Button>
                        </Box>
                    </TableCell>
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={f_barbarian} data={spriteData} />
                        <div />
                        <b style={{color:'white'}}>Barbarian</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'3px'} borderRadius={'6px'}>
                            <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={''}>Equip</Button>
                        </Box>
                    </TableCell>
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={f_crusader} data={spriteData} />
                        <div />
                        <b style={{color:'white'}}>Crusader</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'3px'} borderRadius={'6px'}>
                            <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={''}>Equip</Button>
                        </Box>
                    </TableCell>
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={f_samurai} data={spriteData} />
                        <div />
                        <b style={{color:'white'}}>Samurai</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'3px'} borderRadius={'6px'}>
                            <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={''}>Equip</Button>
                        </Box>
                    </TableCell>
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={f_knight} data={spriteData} />
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
                        <Actor sprite={r_folk} data={spriteData} />
                        <div />
                        <b style={{color:'white'}}>Folk</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'3px'} borderRadius={'6px'}>
                            <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={''}>Equip</Button>
                        </Box>
                    </TableCell>
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={r_thief} data={spriteData} />
                        <div />
                        <b style={{color:'white'}}>Thief</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'3px'} borderRadius={'6px'}>
                            <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={''}>Equip</Button>
                        </Box>
                    </TableCell>
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={r_archer} data={spriteData} />
                        <div />
                        <b style={{color:'white'}}>Archer</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'3px'} borderRadius={'6px'}>
                            <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={''}>Equip</Button>
                        </Box>
                    </TableCell>
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={r_witchhunter} data={spriteData} />
                        <div />
                        <b style={{color:'white'}}>Witch Hunter</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'3px'} borderRadius={'6px'}>
                            <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={''}>Equip</Button>
                        </Box>
                    </TableCell>
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={r_ninja} data={spriteData} />
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
                        <Actor sprite={s_folk} data={spriteData} />
                        <div />
                        <b style={{color:'white'}}>Folk</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'3px'} borderRadius={'6px'}>
                            <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={''}>Equip</Button>
                        </Box>
                    </TableCell>
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={s_acolyte} data={spriteData} />
                        <div />
                        <b style={{color:'white'}}>Acolyte</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'3px'} borderRadius={'6px'}>
                            <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={''}>Equip</Button>
                        </Box>
                    </TableCell>
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={s_priestess} data={spriteData} />
                        <div />
                        <b style={{color:'white'}}>Priestess</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'3px'} borderRadius={'6px'}>
                            <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={''}>Equip</Button>
                        </Box>
                    </TableCell>
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={s_mage} data={spriteData} />
                        <div />
                        <b style={{color:'white'}}>Mage</b>
                        <div />
                        <Box bgcolor={'#E1ECF7'} padding={'3px'} borderRadius={'6px'}>
                            <Button variant={"contained"} style={{backgroundColor:"#212738"}} onClick={''}>Equip</Button>
                        </Box>
                    </TableCell>
                    <TableCell component={"div"} align={'center'}>
                        <Actor sprite={s_wizard} data={spriteData} />
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