import React, {useState, useEffect, Fragment} from 'react';
import forest from './Sprites/Backgrounds/Forest.png';
import color from "color";
export default function Battle(props)
{
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

            </div>
        }
    </Fragment>
}
