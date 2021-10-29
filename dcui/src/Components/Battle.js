import React, {useState, useEffect, Fragment} from 'react';
import forest from './Sprites/Backgrounds/Forest.png';
export default function Battle(props)
{
    return <Fragment>
        {
            <div style={{
                backgroundImage: forest`url(${forest})`
            }}>
                Battle Time :)
            </div>
        }
    </Fragment>
}
