var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    //6A
    function createSawBlade(x, y) {

      var hitZoneSize = 25;
      var damageFromObstacle = 10;
      var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);

      sawBladeHitZone.x = x;
      sawBladeHitZone.y = y;
      game.addGameItem(sawBladeHitZone);
      //5C
      var obstacleImage = draw.bitmap("img/sawblade.png");
      sawBladeHitZone.addChild(obstacleImage);
      obstacleImage.x = -25
      obstacleImage.y = -25
    }

    createSawBlade(300, 300)
    createSawBlade(400, 400)
    createSawBlade(200, 200)
    ////////////////////////////////////////////////////////////////
    //7A
    var enemy = game.createGameItem("enemy", 25);
    var redSquare = draw.rect(50, 50, "red");
    redSquare.x = -25;
    redSquare.y = -25;
    enemy.addChild(redSquare);
    //7B
    enemy.x = 400;
    enemy.y = groundY - 50;
    //7C
    game.addGameItem(enemy);
    /////////////////////////////////////////////////////////////////////////
    //8A
    enemy.velocityX = 20
    enemy.rotationalVelocity = 30
    //8B
    enemy.onPlayerCollision = function (onPlayerCollision) {
      game.changeIntegrity(-10)
    };
    function startLevel() {
      /////////////////////////////////////////////////////
      //8C
      enemy.onProjectileCollision = function eightC() {
        game.increaseScore(100);
        enemy.shrink();
      }
      /////////////////////////////////////////////////////////////////////////////////////////
      //TODO 9
      function createEnemy(x, y) {
        var enemy = game.createGameItem("enemy", 25);
        var redSquare = draw.rect(50, 50, "red");
        redSquare.x = -x;
        redSquare.y = -y;
        enemy.addChild(redSquare);

        enemy.x = x;
        enemy.y = groundY - y;

        game.addGameItem(enemy);

        enemy.velocityX = 20
        enemy.rotationalVelocity = 30

        enemy.onPlayerCollision = function (onPlayerCollision) {
          game.changeIntegrity(-10)
        };
        function startLevel() {

          enemy.onProjectileCollision = function eightC() {
            game.increaseScore(100);
            enemy.shrink();
          }

        }
      }
      createEnemy(400, groundY - 10);
      createEnemy(800, groundY - 100);
      createEnemy(1200, groundY - 50);

      //////////////////////////////////////
      //TODO 10
      function createReward(x, y) {
        var rewardItem = game.createGameItem("reward", 25);
        var rewardItem = draw.rect(50, 50, "blue");
        rewardItem.x = +x;
        rewardItem.y = +y;
        rewardItem.addChild(blueSquare);

        rewardItem.x = x;
        rewardItem.y = groundY - y;

        game.addGameItem(rewardItem);

        rewardItem.velocityX = 20
        rewardItem.rotationalVelocity = 30

        rewardItem.onPlayerCollision = function (onPlayerCollision) {
          game.changeIntegrity(+10)
        };
        function startLevel() {

          rewardItem.onProjectileCollision = function eightC() {
            game.increaseScore(100);
            rewardItem.shrink();
          }
        }
      }
    ///////////////////////////////////////////////////////////////////////////
    //TODO 11
    function createMarker(){
      startLevel.onProjectileCollision
      startLevel.onPlayerCollision
    }


// TODO 13 goes below here



//////////////////////////////////////////////
// DO NOT EDIT CODE BELOW HERE
//////////////////////////////////////////////
if (++currentLevel === levelData.length) {
  startLevel = () => {
    console.log("Congratulations!");
  };
}
        }
startLevel();
      };
    };

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
