use rmcalpin_cs470_fall21;#replace with whatever db name

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
drop table if exists monsterMoves;
create table monsterMoves(
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
fighterData JSON not null,
mageData JSON not null,
rogueData JSON not null,
inventory JSON,
primary key(userName)
);
drop table if exists monsters;
create table monsters(
monsterID int unsigned not null auto_increment,
monsterName  varchar(40) not null,
spritePath varchar(100),
monsterType tinyint(1) unsigned  not null,
maxHP bigint unsigned default 50,
physicalATK int unsigned not null,
magicATK int unsigned not null,
physicalDEF int unsigned not null,
magicDEF int unsigned not null,
speed int unsigned not null,
moves JSON not null,
primary key(monsterID)
);