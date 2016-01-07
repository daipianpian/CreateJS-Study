/**
 * Created 4、CreateJS控件-Sprite-app.js by dpp on 2016/1/6
 * @authors Your Name (you@example.org)
 * @date    2016-01-07 00:24:21
 * @version $Id$
 */

var stage;
stage = new createjs.Stage('gameView');
var ss = new createjs.SpriteSheet({
	'images' : {'runningGrant.png'},
	'frames' : {
		'height' : 292.5 ,
		'width' : 165.75 ,
		'count' : 64
	},
	'animations' : {
		'run' : [ 0 , 25 , 'jump'];
		'jump' : [26 ,63 , 'run'];
	}
});

var s = new createjs.Sprite(ss , 'run');
s.x = 100;
s.y = 100;

stage.addChild(s);
createjs.Ticker.setFPS(60);
createjs.Ticker.addEventListener('tick' , stage);