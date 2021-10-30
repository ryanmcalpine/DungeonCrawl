import React, {useState, useEffect, Fragment} from 'react';
import Button from '@mui/material/Button';
import color from "color";

import Actor from "./Actor";
import forest from './sprites/backgrounds/Forest.png';
import testFighter from './sprites/player/test-fighter.png';
import testSlime from './sprites/enemy/test-slime.png';


export default function Battle(props)
{
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
                    top: 600,
                    left:180
                }}>
                    <Button variant="outlined">Attack 1</Button>
                    <Button variant="outlined">Attack 2</Button>
                    <div />
                    <Button variant="outlined">Attack 3</Button>
                    <Button variant="outlined">Attack 4</Button>
                </div>
            </div>
        }
    </Fragment>
}
