### CS-470 Final Project:  *Dungeon Crawl*
 #### by Nick Ivanov, Jason Juarez, and Ryan McAlpine
---
 ### Description
 A turn-based RPG battler where you control a party of three and battle a relentless gauntlet of
 increasingly difficult monsters while gathering loot from victorious battles. When the player’s
 party is defeated, they retain the new gold they have earned, so that better equipment can be
 purchased from the Armory and equipped to their party members. Then, next time they start a
 playthrough, their party will be stronger and ready to push deeper into the dungeon! 
 
 Will you be
 able to guide your party members all the way from being simple townsfolk to mighty adventurers?

---
 ### Setup Instructions
 #### Database:
 1. prepare a local database (we suggest using MySQL Workbench)
 2. edit db_setup.sql in the dc-sql directory to use the name of your database
 3. run db_setup.sql in your database
 #### API:
 1. open dc-api folder as project in WebStorm
 2. edit .env file to contain info for your database
 3. edit mySQLconnect.js to contain info for your database
 4. run npm i node
 5. run npm i koa
 6. run node api_server.js
 #### Front End:
 1. open dcui folder as project in WebStorm
 2. run npm install
 3. run npm i axios
 4. run npm start

---
 ### Known Issues
 - The game will crash if you input an invalid username in login
   - To create an account, enter your desired username -> press create account -> press sign in
 - Armory takes a second to render what is equipped and purchased due to the number of API calls
 - Battle takes a second to render due to the number of initial API calls
 - In Battle, Locked move buttons say "Quick Attack" during enemy turn
 - In Battle, some of the vfx sprites, such as for Tornado Slash, do not appear in the proper orientation

---
 ### Unimplemented Features
 - Due to time constraints, we have yet to decide on balanced logic for incorporating character stats into damage calculations.
 - The Inventory button in Battle remains disabled as consumable items have yet to be implemented.
 - Updating high scores at the end of each play session is not yet implemented properly.
 - Music & Sound Effects

---
 ### Assets Used
 - Cainos - "Pixel Art Icon Pack - RPG"
   - https://assetstore.unity.com/packages/2d/gui/icons/pixel-art-icon-pack-rpg-158343
 - Crunchpix - "2D Sprite Effects Bundle"
   - https://itch.io/s/55322/2d-sprite-effects-bundle
     - https://crunchpix.itch.io/38-2d-magic-effects-collection
     - https://crunchpix.itch.io/68-2d-sprite-effects-collection
 - Danil Chernyaev - "Simple 2D Background Pack"
   - https://assetstore.unity.com/packages/2d/environments/simple-2d-background-pack-179115
 - MiMU STUDIO - "2D SD Character Packs V.1 & V.2"
   - https://assetstore.unity.com/packages/2d/characters/2d-sd-character-pack-v-1-62141
   - https://assetstore.unity.com/packages/2d/characters/2d-sd-character-pack-v-2-66822
 - MiMU STUDIO - "2D SD Monster Pack"
   - https://assetstore.unity.com/packages/2d/characters/2d-sd-monster-pack-75733

---
 ### References
 - Javascript Documentation
   - https://devdocs.io/javascript/
 - Koa Documentation
   - https://devdocs.io/koa/
 - Material UI Documentation
   - https://mui.com/getting-started/usage/
 - ReactJS Documentation
   - https://reactjs.org/docs/getting-started.html
 - YouTube - devmentorlive - "Build an RPG using ReactJS and React Hooks API"
   - https://www.youtube.com/playlist?list=PL7LIfgWox4loxGOszvM9XUOIzdYRT3LYY
 - Youtube - techie-ray - "Building Pokemon Game ... (plain browser Javascript)"
   - https://www.youtube.com/watch?v=lfRsC5xJGeg&t=939s
