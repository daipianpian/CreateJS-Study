/**
 * Created 2、CreateJS TweenJS-Ease.js by dpp on 2016/1/6
 * @authors Your Name (you@example.org)
 * @date    2016-01-07 22:59:40
 * @version $Id$
 */

var stage = new createjs.Stage('gameView');

var circle = new createjs.Shape();
circle.graphics.beginFill('#ff0000').drawCircle(50,50,50);

stage.addChild(circle);

createjs.Tween.get(circle,{loop:false},true)
	.to({x:500,y:0,alpha:0.1},1000,createjs.Ease.elasticInOut)
	.to({x:0},1000,createjs.Ease.backIn)
	.wait(1000)
	.to({alpha:1},100)

createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener('tick',stage);