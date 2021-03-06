/*EnemyList --> Provides master functions that make enemies based on type, frame etc
 * and give them basic attributes.  This is going to be something you change a lot
 */
function EnemyList() {}

/*This function is the master function for creating an enemy
 * @param {String} type The type of enemy
 * @param {Integer} The current frame
 * @param {Path} The monster's path
 * @param {Number} distanceTravelled (used for spawning monsters during split)
 * @return {Enemy} The enemy created
 */
EnemyList.createEnemy = function (type, frame, path, distanceTravelled) {
  //Basic enemies that gradually get stronger

  //basic Enemy that has 100 health, 0 armor, 0.8 speed, 1 damage, and may split
  if (type == "basic") {
    return EnemyList.createBasicEnemy(type, frame, path, distanceTravelled);
  }
  //Easy Enemy that has 300 health, 50 armor, 0.8speed, 2 damage, and may split
  else if (type == "easy") {
    return EnemyList.createEasyEnemy(type, frame, path, distanceTravelled);
  }
  //Normal Enemy that has 500 health, 100 armor, 1.0 speed, 3 damage, and may split
  else if (type == "normal") {
    return EnemyList.createNormalEnemy(type, frame, path, distanceTravelled);
  }
  //Difficult Enemy that has 700 health, 200 armor, 1.0 speed, 4 damage, and may split
  else if (type == "difficult") {
    return EnemyList.createDifficultEnemy(type, frame, path, distanceTravelled);
  }
  //Hard Enemy that has 900 health, 300 armor, 2.0 speed, 5 damage, and may split
  else if (type == "hard") {
    return EnemyList.createHardEnemy(type, frame, path, distanceTravelled);
  }
  //Extreme Enemy that has 1500 health, 450 armor, 3.0 speed, 8 damage, and may split
  else if (type == "extreme") {
    return EnemyList.createExtremeEnemy(type, frame, path, distanceTravelled);
  }

  //Fast enemies that gradually get faster and stronger
  //Fast Enemy that has 200 health, 0 armor, 2.5 speed, 1 damage, and may split
  else if (type == "fast") {
    return EnemyList.createFastEnemy(type, frame, path, distanceTravelled);
  }
  //Fast Enemy that has 400 health, 100 armor, 5.0 speed, 5 damage, and may split
  else if (type == "athleat") {
    return EnemyList.createAthleatEnemy(type, frame, path, distanceTravelled);
  }
  //Fast Enemy that has 600 health, 100 armor, 10.0 speed, 10 damage, and may split
  else if (type == "shark") {
    return EnemyList.createSharkEnemy(type, frame, path, distanceTravelled);
  }
  //Fast Enemy that has 800 health, 0 armor, 20.0 speed, 25 damage, and may split
  else if (type == "lightning") {
    return EnemyList.createLightingEnemy(type, frame, path, distanceTravelled);
  }
  //Fast Enemy that has 1000 health, 200 armor, 45.0 speed, 45 damage, and may split
  else if (type == "flash") {
    return EnemyList.createFlashEnemy(type, frame, path, distanceTravelled);
  }
  //Fast Enemy that has 1500 health, 200 armor, 65.0 speed, 50 damage, and may split
  else if (type == "LiSpeed") {
    return EnemyList.createLightSpeedEnemy(
      type,
      frame,
      path,
      distanceTravelled
    );
  }

  //Armored enemies that gradually get slower but stronger
  //Armored Enemy that has 350 health, 500 armor, 2.5 speed, 10 damage, and may split
  else if (type == "armored") {
    return EnemyList.createArmoredEnemy(type, frame, path, distanceTravelled);
  }
  //Sheilded Enemy that has 550 health, 600 armor, 2.0 speed, 5 damage, and may split
  else if (type == "shield") {
    return EnemyList.createSheildedEnemy(type, frame, path, distanceTravelled);
  }
  //Bariar Enemy that has 700 health, 700 armor, 1.5 speed, 5 damage, and may split
  else if (type == "barrier") {
    return EnemyList.createBarrieredEnemy(type, frame, path, distanceTravelled);
  }
  //Wall Enemy that has 900 health, 800 armor, 1.5 speed, 5 damage, and may split
  else if (type == "wall") {
    return EnemyList.createWalledEnemy(type, frame, path, distanceTravelled);
  }
  //Tank Enemy that has 1200 health, 1150 armor, 1.0 speed, 15 damage, and may split
  else if (type == "tank") {
    return EnemyList.createTankEnemy(type, frame, path, distanceTravelled);
  }

  //Slow enemies that gradually get slower and weeker
  //Fast Enemy that has 600 health, 200 armor, 3.0 speed, 5 damage, and may split
  else if (type == "slow") {
    return EnemyList.createSlowEnemy(type, frame, path, distanceTravelled);
  }
  //Fast Enemy that has 650 health, 50 armor, 4.0 speed, 3 damage, and may split
  else if (type == "sleepy") {
    return EnemyList.createSleepyEnemy(type, frame, path, distanceTravelled);
  }
  //Fast Enemy that has 700 health, 0 armor, 5.0 speed, 1 damage, and may split
  else if (type == "frozen") {
    return EnemyList.createFrozenEnemy(type, frame, path, distanceTravelled);
  }

  //default back to basic if no others are picked
  else {
    return EnemyList.createBasicEnemy(type, frame, path, distanceTravelled);
  }
};

/* Defines a Basic enemy
 @param {String} type The type of enemy
* @param {Integer} The current frame
* @param {Path} The monster's path
* @param {Number} distanceTravelled (used for spawning monsters during split) 
* @return {Enemy} The enemy created
*/
EnemyList.createBasicEnemy = function (type, frame, path, distanceTravelled) {
  var health = 100;
  var armor = 0;
  var money = 1;
  var speed = 0.8;
  var damage = 1;
  var color1 = "#cc0000"; //dark red
  var color2 = "#000000"; //black
  var color3 = "#cccc00"; //yellow
  var color4 = "#0000cc"; //dark blue
  var drawingFunction = 7;
  var deathSplit = new Array();

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
};

/* Defines a Easy enemy
 @param {String} type The type of enemy
* @param {Integer} The current frame
* @param {Path} The monster's path
* @param {Number} distanceTravelled (used for spawning monsters during split) 
* @return {Enemy} The enemy created
*/
EnemyList.createEasyEnemy = function (type, frame, path, distanceTravelled) {
  var health = 300;
  var armor = 50;
  var money = 2;
  var speed = 0.8;
  var damage = 2;
  var color1 = "#1b4692";
  var color2 = "#000000";
  var color3 = "#af6ae7";
  var color4 = "#5f4af4";
  var drawingFunction = 7;
  var deathSplit = new Array();

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
};

/* Defines a Normal enemy
 @param {String} type The type of enemy
* @param {Integer} The current frame
* @param {Path} The monster's path
* @param {Number} distanceTravelled (used for spawning monsters during split) 
* @return {Enemy} The enemy created
*/
EnemyList.createNormalEnemy = function (type, frame, path, distanceTravelled) {
  var health = 500;
  var armor = 100;
  var money = 5;
  var speed = 1;
  var damage = 3;
  var color1 = "#d9237f";
  var color2 = "#7d9be2";
  var color3 = "#067ce8";
  var color4 = "#cf1f52";
  var drawingFunction = 8;
  var deathSplit = new Array();

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
};

/* Defines a Difficult enemy
 @param {String} type The type of enemy
* @param {Integer} The current frame
* @param {Path} The monster's path
* @param {Number} distanceTravelled (used for spawning monsters during split) 
* @return {Enemy} The enemy created
*/
EnemyList.createDifficultEnemy = function (
  type,
  frame,
  path,
  distanceTravelled
) {
  var health = 700;
  var armor = 200;
  var money = 10;
  var speed = 1.5;
  var damage = 4;
  var color1 = "#227190";
  var color2 = "#7b128e";
  var color3 = "#39da05";
  var color4 = "#b6e945";
  var drawingFunction = 8;
  var deathSplit = new Array();

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
};

/* Defines a Hard enemy
 @param {String} type The type of enemy
* @param {Integer} The current frame
* @param {Path} The monster's path
* @param {Number} distanceTravelled (used for spawning monsters during split) 
* @return {Enemy} The enemy created
*/
EnemyList.createHardEnemy = function (type, frame, path, distanceTravelled) {
  var health = 900;
  var armor = 300;
  var money = 15;
  var speed = 2;
  var damage = 5;
  var color1 = "#3b2f37";
  var color2 = "#3d295a";
  var color3 = "#a54b4b";
  var color4 = "#071b7c";
  var drawingFunction = 10;
  var deathSplit = new Array();

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
};

/* Defines a Extreme enemy
 @param {String} type The type of enemy
* @param {Integer} The current frame
* @param {Path} The monster's path
* @param {Number} distanceTravelled (used for spawning monsters during split) 
* @return {Enemy} The enemy created
*/
EnemyList.createExtremeEnemy = function (type, frame, path, distanceTravelled) {
  var health = 1500;
  var armor = 450;
  var money = 35;
  var speed = 2.3;
  var damage = 8;
  var color1 = "#2e8aa2";
  var color2 = "#a1b507";
  var color3 = "#0e7e7b";
  var color4 = "#edc931";
  var drawingFunction = 10;
  var deathSplit = new Array();

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
};

/* Defines a Fast enemy
 @param {String} type The type of enemy
* @param {Integer} The current frame
* @param {Path} The monster's path
* @param {Number} distanceTravelled (used for spawning monsters during split) 
* @return {Enemy} The enemy created
*/
EnemyList.createFastEnemy = function (type, frame, path, distanceTravelled) {
  var health = 200;
  var armor = 0;
  var money = 2;
  var speed = 2.5;
  var damage = 1;
  var color1 = "#005500"; //dark green
  var color2 = "#000000"; //black
  var color3 = "#cccc00"; //yellow
  var color4 = "#0000cc"; //dark blue
  var drawingFunction = 2;
  var deathSplit = new Array();

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
};

/* Defines a Athleat enemy
 @param {String} type The type of enemy
* @param {Integer} The current frame
* @param {Path} The monster's path
* @param {Number} distanceTravelled (used for spawning monsters during split) 
* @return {Enemy} The enemy created
*/
EnemyList.createAthleatEnemy = function (type, frame, path, distanceTravelled) {
  var health = 400;
  var armor = 100;
  var money = 5;
  var speed = 5;
  var damage = 5;
  var color1 = "#e3562f";
  var color2 = "#57dbca";
  var color3 = "#5577e4";
  var color4 = "#e4cb6d";
  var drawingFunction = 2;
  var deathSplit = new Array();

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
};

/* Defines a shark enemy
 * @param {String} type The type of enemy
 * @param {Integer} The current frame
 * @param {Path} The monster's path
 * @param {Number} distanceTravelled (used for spawning monsters during split)
 * @return {Enemy} The enemy created
 */
EnemyList.createSharkEnemy = function (type, frame, path, distanceTravelled) {
  var health = 600;
  var armor = 100;
  var money = 10;
  var speed = 7;
  var damage = 10;
  var color1 = "#594963";
  var color2 = "#79b3ee";
  var color3 = "#5613bd";
  var color4 = "#6c6bfb";
  var drawingFunction = 5;
  var deathSplit = new Array();

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
};

/* Defines a Lighting enemy
 * @param {String} type The type of enemy
 * @param {Integer} The current frame
 * @param {Path} The monster's path
 * @param {Number} distanceTravelled (used for spawning monsters during split)
 * @return {Enemy} The enemy created
 */
EnemyList.createLightingEnemy = function (
  type,
  frame,
  path,
  distanceTravelled
) {
  var health = 800;
  var armor = 0;
  var money = 25;
  var speed = 8.5;
  var damage = 25;
  var color1 = "#c0d61a";
  var color2 = "#c88c33";
  var color3 = "#017757";
  var color4 = "#847f70";
  var drawingFunction = 5;
  var deathSplit = new Array();

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
};

/* Defines a Flash enemy
 @param {String} type The type of enemy
* @param {Integer} The current frame
* @param {Path} The monster's path
* @param {Number} distanceTravelled (used for spawning monsters during split) 
* @return {Enemy} The enemy created
*/
EnemyList.createFlashEnemy = function (type, frame, path, distanceTravelled) {
  var health = 1000;
  var armor = 200;
  var money = 30;
  var speed = 10;
  var damage = 45;
  var color1 = "#138ecb";
  var color2 = "#faa33d";
  var color3 = "#937724";
  var color4 = "#84fd54";
  var drawingFunction = 3;
  var deathSplit = new Array();

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
};

/* Defines a Light enemy
 @param {String} type The type of enemy
* @param {Integer} The current frame
* @param {Path} The monster's path
* @param {Number} distanceTravelled (used for spawning monsters during split) 
* @return {Enemy} The enemy created
*/
EnemyList.createLightSpeedEnemy = function (
  type,
  frame,
  path,
  distanceTravelled
) {
  var health = 1500;
  var armor = 200;
  var money = 50;
  var speed = 12.5;
  var damage = 50;
  var color1 = "#a3f8c3";
  var color2 = "#e57da1";
  var color3 = "#1b8f6b";
  var color4 = "#9a53ac";
  var drawingFunction = 3;
  var deathSplit = new Array();

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
};

/* Defines a Armored enemy
 * @param {String} type The type of enemy
 * @param {Integer} The current frame
 * @param {Path} The monster's path
 * @param {Number} distanceTravelled (used for spawning monsters during split)
 * @return {Enemy} The enemy created
 */
EnemyList.createArmoredEnemy = function (type, frame, path, distanceTravelled) {
  var health = 350;
  var armor = 500;
  var money = 10;
  var speed = 0.6;
  var damage = 10;
  var color1 = "#555555"; //grey
  var color2 = "#000000"; //black
  var color3 = "#005555"; //dark purple
  var color4 = "#0000cc"; //dark blue
  var drawingFunction = 1;
  var deathSplit = new Array();
  deathSplit.push("basic");
  deathSplit.push("basic");
  deathSplit.push("basic");
  deathSplit.push("basic");
  deathSplit.push("basic");

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
};

/* Defines a Shielded enemy
 @param {String} type The type of enemy
* @param {Integer} The current frame
* @param {Path} The monster's path
* @param {Number} distanceTravelled (used for spawning monsters during split) 
* @return {Enemy} The enemy created
*/
EnemyList.createSheildedEnemy = function (
  type,
  frame,
  path,
  distanceTravelled
) {
  var health = 550;
  var armor = 600;
  var money = 25;
  var speed = 0.8;
  var damage = 5;
  var color1 = "#4eae52";
  var color2 = "#cd9a5b";
  var color3 = "#7f553c";
  var color4 = "#2f1e63";
  var drawingFunction = 1;
  var deathSplit = new Array();
  deathSplit.push("basic");
  deathSplit.push("basic");

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
};

/* Defines a Barrier enemy
 @param {String} type The type of enemy
* @param {Integer} The current frame
* @param {Path} The monster's path
* @param {Number} distanceTravelled (used for spawning monsters during split) 
* @return {Enemy} The enemy created
*/
EnemyList.createBarrieredEnemy = function (
  type,
  frame,
  path,
  distanceTravelled
) {
  var health = 700;
  var armor = 700;
  var money = 35;
  var speed = 0.7;
  var damage = 5;
  var color1 = "#c9b872";
  var color2 = "#587487";
  var color3 = "#7d0309";
  var color4 = "#1c1c30";
  var drawingFunction = 9;
  var deathSplit = new Array();
  deathSplit.push("basic");
  deathSplit.push("basic");

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
};

/* Defines a Wall enemy 
 @param {String} type The type of enemy
* @param {Integer} The current frame
* @param {Path} The monster's path
* @param {Number} distanceTravelled (used for spawning monsters during split) 
* @return {Enemy} The enemy created
*/
EnemyList.createWalledEnemy = function (type, frame, path, distanceTravelled) {
  var health = 900;
  var armor = 800;
  var money = 40;
  var speed = 0.6;
  var damage = 5;
  var color1 = "#72c474";
  var color2 = "#4a5bf2";
  var color3 = "#e8a06f";
  var color4 = "#08041e";
  var drawingFunction = 9;
  var deathSplit = new Array();
  deathSplit.push("basic");
  deathSplit.push("basic");

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
};

/* Defines a tank enemy
 * @param {String} type The type of enemy
 * @param {Integer} The current frame
 * @param {Path} The monster's path
 * @param {Number} distanceTravelled (used for spawning monsters during split)
 * @return {Enemy} The enemy created
 */
EnemyList.createTankEnemy = function (type, frame, path, distanceTravelled) {
  var health = 1200;
  var armor = 1150;
  var money = 55;
  var speed = 0.5;
  var damage = 15;
  var color1 = "#f1191f";
  var color2 = "#21dff4";
  var color3 = "#24e941";
  var color4 = "#d4cf13";
  var drawingFunction = 4;
  var deathSplit = new Array();
  deathSplit.push("armored");
  deathSplit.push("armored");
  deathSplit.push("basic");
  deathSplit.push("basic");

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
};

/* Defines a Slow enemy
 @param {String} type The type of enemy
* @param {Integer} The current frame
* @param {Path} The monster's path
* @param {Number} distanceTravelled (used for spawning monsters during split) 
* @return {Enemy} The enemy created
*/
EnemyList.createSlowEnemy = function (type, frame, path, distanceTravelled) {
  var health = 600;
  var armor = 200;
  var money = 10;
  var speed = 0.65;
  var damage = 5;
  var color1 = "#486a3b";
  var color2 = "#db72d8";
  var color3 = "#01bad7";
  var color4 = "#c8410e";
  var drawingFunction = 6;
  var deathSplit = new Array();
  deathSplit.push("basic");
  deathSplit.push("basic");

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
};

/* Defines a Sleepy enemy
 @param {String} type The type of enemy
* @param {Integer} The current frame
* @param {Path} The monster's path
* @param {Number} distanceTravelled (used for spawning monsters during split) 
* @return {Enemy} The enemy created
*/
EnemyList.createSleepyEnemy = function (type, frame, path, distanceTravelled) {
  var health = 650;
  var armor = 50;
  var money = 10;
  var speed = 0.45;
  var damage = 3;
  var color1 = "#cd674c";
  var color2 = "#8900ef";
  var color3 = "#71d009";
  var color4 = "#156da7";
  var drawingFunction = 6;
  var deathSplit = new Array();
  deathSplit.push("basic");
  deathSplit.push("basic");

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
};

/* Defines a Frozen enemy
 @param {String} type The type of enemy
* @param {Integer} The current frame
* @param {Path} The monster's path
* @param {Number} distanceTravelled (used for spawning monsters during split) 
* @return {Enemy} The enemy created
*/
EnemyList.createFrozenEnemy = function (type, frame, path, distanceTravelled) {
  var health = 700;
  var armor = 0;
  var money = 10;
  var speed = 0.28;
  var damage = 1;
  var color1 = "#9c47c8";
  var color2 = "#089abf";
  var color3 = "#e63a68";
  var color4 = "#938e7a";
  var drawingFunction = 6;
  var deathSplit = new Array();
  deathSplit.push("basic");
  deathSplit.push("basic");

  var curEnemy = new Enemy(
    type,
    health,
    armor,
    money,
    speed,
    damage,
    color1,
    color2,
    color3,
    color4,
    drawingFunction,
    frame,
    path,
    deathSplit,
    distanceTravelled
  );
  return curEnemy;
};
