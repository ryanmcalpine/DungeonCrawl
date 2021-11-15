import React, {Fragment, useState} from "react";
import Battle from "./Battle";
import {render} from "react-dom";


export default function Dungeon(props)
{
   const [fighterHP,setFighterHP] = useState(50);
   while(fighterHP>50)
   {
       render(<Battle/>);
   }

}