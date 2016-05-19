/**
 * create 2、CreateJS介绍-TweenJS-app.js by dpp on 2016/1/4
 * @authors Your Name (you@example.org)
 * @date    2016-01-04 01:13:34
 * @version $Id$
 */

var stage = new createjs.Stage('gameView');

stage.x = 100;

stage.y = 100;

var circle = new createjs.Shape();

circle.graphics.beginFill('red').drawCircle(0,0,50);

stage.addChild(circle);

createjs.Tween.get(circle,{loop:true})
	.wait(1000)
	.to({scaleX:0.2,scaleY:0.2})
	.wait(1000)
	.to({scaleX:1,scaleY:1},1000,createjs.Ease.bounceInout)

createjs.Ticker.setFPS(20);
createjs.Ticker.addEventListener('tick',stage);