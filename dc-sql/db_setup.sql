use dungeon_crawler;#replace with whatever db name

drop table if exists consumables;
create table consumables(
itemID int unsigned not null auto_increment,
spritePath varchar(100),
consumeEffect smallint unsigned not null,
primary key(itemID)
);
drop table if exists weapons;
create table weapons(
itemID int unsigned not null auto_increment,
spritePath varchar(100),
weaponName varchar(100) default "we forgot to name this one lol",
damage bigint unsigned default 0,
critChance smallint unsigned default 0,
primary key(itemID)
);
drop table if exists armor;
create table armor(
itemID int unsigned not null auto_increment,
spritePath varchar(100),
armorName varchar(100) default "we forgot to name this one lol",
armorType int unsigned default 0,
physicalDEF int unsigned default 0,
magicDEF int unsigned default 0,
passiveEffect bigint unsigned default 0,
primary key(itemID)
);
drop table if exists moves;
create table moves(
moveName varchar(40) not null,
damageType  smallint unsigned default 0,
damageValue bigint unsigned default 0,
selfStatusEffects smallint unsigned default 0,
targetStatusEffects smallint unsigned default 0,
primary key(moveName)
);
drop table if exists users;
create table users(
userName varchar(40) not null,
highScore int unsigned default 0,
gold bigint unsigned default 0,
fighterMaxHP bigint unsigned default 50,
fighterPhysicalAttack bigint unsigned default 10,
fighterMagicalAttack bigint unsigned default 1,
fighterPhysicalDefense bigint unsigned default 10,
fighterMagicDefense bigint unsigned default 5,
mageMaxHP bigint unsigned default 30,
magePhysicalAttack bigint unsigned default 1,
mageMagicalAttack bigint unsigned default 10,
magePhysicalDefense bigint unsigned default 5,
mageMagicDefense bigint unsigned default 7,
rogueMaxHP bigint unsigned default 40,
roguePhysicalAttack bigint unsigned default 5,
rogueMagicalAttack bigint unsigned default 5,
roguePhysicalDefense bigint unsigned default 7,
rogueMagicDefense bigint unsigned default 7,
primary key(userName)
);
insert into users values("testAcct",default,default,default,default,default,default,default,
default,default,default,default,default,default,default,default,default,default);
insert into users values("Thiccy_Niccy_Dev",50,99999,999999,999,999,999,999,
999999,999,999,999,999,999999,999,999,999,999);
insert into users values("Jay_The_Bae_Dev",49,99999,999999,999,999,999,999,
999999,999,999,999,999,999999,999,999,999,999);
insert into users values("Ryan_Aint_Lion_Dev",48,99999,999999,999,999,999,999,
999999,999,999,999,999,999999,999,999,999,999);
drop table if exists inventory;
create table inventory(
itemID int unsigned not null,
userID int unsigned not null
);
drop table if exists monsters;
create table monsters(
monsterID int unsigned not null auto_increment,
monsterName  varchar(40) not null,
spritePath varchar(100),
monsterType tinyint(2) unsigned  not null,
maxHP bigint unsigned default 50,
physicalATK int unsigned not null,
magicATK int unsigned not null,
physicalDEF int unsigned not null,
magicDEF int unsigned not null,
speed int unsigned not null,
primary key(monsterID)
);
insert into monsters values(0,"Crow","./sprites/enemy/crow.png",0,12,8,4,6,6,12);
insert into monsters values(0,"Rat","./sprites/enemy/rat.png",0,13,9,3,7,5,14);
insert into monsters values(0,"Slime","./sprites/enemy/test-slime.png",1,18,6,6,8,6,9);
insert into monsters values(0,"Ghost","./sprites/enemy/ghost.png",2,22,7,13,13,7,10);
insert into monsters values(0,"Spider","./sprites/enemy/spider.png",0,21,16,8,11,9,13);
insert into monsters values(0,"Zombie","./sprites/enemy/zombie.png",1,25,16,4,15,8,11);
insert into monsters values(0,"Goblin","./sprites/enemy/goblin.png",0,27,18,12,18,12,16);
insert into monsters values(0,"Orc","./sprites/enemy/orc.png",1,34,22,8,20,10,10);
insert into monsters values(0,"Tundra Worm","./sprites/enemy/worm.png",1,25,15,15,15,15,15);
insert into monsters values(0,"Bat","./sprites/enemy/bat.png",0,28,18,17,15,20,19);
insert into monsters values(0,"Cyclops","./sprites/enemy/cyclops.png",1,38,25,10,20,15,13);
insert into monsters values(0,"Skeleton","./sprites/enemy/skeleton.png",2,32,21,14,23,12,15);
insert into monsters values(0,"Beholder","./sprites/enemy/beholder.png",2,42,10,30,14,26,14);
insert into monsters values(0,"Lava Demon","./sprites/enemy/demon.png",1,45,26,14,25,15,14);