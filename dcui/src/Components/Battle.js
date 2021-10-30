import React, {useState, useEffect, Fragment} from 'react';
import Actor from "./Actor";
import forest from './sprites/backgrounds/Forest.png';
import testFighter from './sprites/player/test-fighter.png';
import testSlime from './sprites/enemy/test-slime.png';
import color from "color";

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
                <Actor sprite={testFighter} data={spriteData} />
                <Actor sprite={testSlime} data={spriteData} />
            </div>
        }
    </Fragment>
}
