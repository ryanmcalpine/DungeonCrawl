import React, {Fragment} from "react";
import Actor from "./Actor";
import testFighter from "./sprites/player/test-fighter.png";
import barb from "./sprites/player/fighter_barbarian.png";
import crusader from "./sprites/player/fighter_crusader.png";
import folk from "./sprites/player/fighter_folk.png";
import knight from "./sprites/player/fighter_knight.png";
import samurai from "./sprites/player/fighter_samurai.png";

export default function Armory()
{
    const spriteData = {
        w: 160,
        h: 200
    }
    return<Fragment>
        <div style={{
            position: 'absolute',
            top: 50,
            left: 50
        }}>
            <Actor sprite={testFighter} data={spriteData} />
        </div>
        <div style={{
            position: 'absolute',
            top: 50,
            left: 250
        }}>
            <Actor sprite={barb} data={spriteData} />
        </div>
        <div style={{
            position: 'absolute',
            top: 50,
            left: 450
        }}>
            <Actor sprite={crusader} data={spriteData} />
        </div>
        <div style={{
            position: 'absolute',
            top: 50,
            left: 650
        }}>
            <Actor sprite={folk} data={spriteData} />
        </div>
        <div style={{
            position: 'absolute',
            top: 50,
            left: 850
        }}>
            <Actor sprite={knight} data={spriteData} />
        </div>
        <div style={{
            position: 'absolute',
            top: 50,
            left: 1050
        }}>
            <Actor sprite={samurai} data={spriteData} />
        </div>

    </Fragment>

}