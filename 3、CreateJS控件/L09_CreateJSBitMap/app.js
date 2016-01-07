/**
 * Created 2、CreateJS控件-BitMap-app.js by dpp on 2016/1/6
 * @authors Your Name (you@example.org)
 * @date    2016-01-06 22:57:34
 * @version $Id$
 */

var stage = new createjs.Stage('gameView');
var gameView = new createjs.Container();
stage.addChild(gameView);

var bitmap = new createjs.Bitmap('9.jpg');
gameView.addChild(bitmap);

createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener('tick' , function(){
	stage.update();
});