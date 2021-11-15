import React, {Fragment} from "react";
import Actor from "./Actor";
import testFighter from "./sprites/player/test-fighter.png";
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
            <Actor sprite={folk} data={spriteData} />
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
            <Actor sprite={samurai} data={spriteData} />
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
            top: 250,
            left: 50
        }}>
            <Actor sprite={rFolk} data={spriteData} />
        </div>
        <div style={{
            position: 'absolute',
            top: 250,
            left: 250
        }}>
            <Actor sprite={socialist} data={spriteData} />
        </div>
        <div style={{
            position: 'absolute',
            top: 250,
            left: 450
        }}>
            <Actor sprite={archer} data={spriteData} />
        </div>
        <div style={{
            position: 'absolute',
            top: 250,
            left: 650
        }}>
            <Actor sprite={musketeer} data={spriteData} />
        </div>
        <div style={{
            position: 'absolute',
            top: 250,
            left: 850
        }}>
            <Actor sprite={ninja} data={spriteData} />
        </div>

        <div style={{
            position: 'absolute',
            top: 450,
            left: 50
        }}>
            <Actor sprite={sorcFolk} data={spriteData} />
        </div>
        <div style={{
            position: 'absolute',
            top: 450,
            left: 250
        }}>
            <Actor sprite={priest} data={spriteData} />
        </div>
        <div style={{
            position: 'absolute',
            top: 450,
            left: 450
        }}>
            <Actor sprite={acolyte} data={spriteData} />
        </div>
        <div style={{
            position: 'absolute',
            top: 450,
            left: 650
        }}>
            <Actor sprite={mage} data={spriteData} />
        </div>
        <div style={{
            position: 'absolute',
            top: 450,
            left: 850
        }}>
            <Actor sprite={wizard} data={spriteData} />
        </div>

    </Fragment>

}