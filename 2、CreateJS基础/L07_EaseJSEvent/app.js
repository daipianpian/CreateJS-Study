/**
 * Create CreateJS基础-EaselJS事件-app.js by dpp on 2016/1/4
 * @authors Your Name (you@example.org)
 * @date    2016-01-05 00:34:09
 * @version $Id$
 */

var stage = new createjs.Stage('gameView');
var gameView = new createjs.Container();
stage.addChild(gameView);

var Rect = new createjs.Shape();
Rect.graphics.beginFill('#ff0000');
Rect.graphics.drawRect(0,0,100,100);
gameView.addChild(Rect);

stage.update();

// Rect.addEventListener('click',function(){
// 	alert('点了图形');
// });

// Rect.addEventListener('click',function(e){
// 	alert('X='+e.localX+'--Y='+e.localY);
// });

// Rect.addEventListener('dblclick',function(){
// 	alert('点了图形');
// });

createjs.Ticker.setFPS(5);

createjs.Ticker.addEventListener('tick',handlerTicker);
var speedX = 10;
function handlerTicker(){
	if(Rect.x <= 0){
		speedX = Math.abs(speedX);
	}
	if(Rect.x >= 300){
		speedX = -Math.abs(speedX)
	}
	Rect.x += speedX;
	stage.update();
}