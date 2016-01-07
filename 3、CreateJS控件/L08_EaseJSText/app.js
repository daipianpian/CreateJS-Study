/**
 *Created 1、CreateJS控件-Text-app.js by dpp on 2016/1/6
 * @authors Your Name (you@example.org)
 * @date    2016-01-06 22:32:24
 * @version $Id$
 */

var canvas;
var stage;
var text;
var rect;
var count = 0;

canvas = document.getElementById('gameView');
stage = new createjs.Stage(canvas);

text = new createjs.Text('text on the canvas ... 0!','36px Arial' , '#fff');
text.x = 100;
text.y = 100;
text.rotation = 20;
stage.addChild(text);

rect = new createjs.Shape();
rect.x = text.x;
rect.y = text.y;
rect.rotation = text.rotation;
stage.addChildAt(rect,0);

createjs.Ticker.setFPS(100);
createjs.Ticker.addEventListener('tick' , handlertick);

function handlertick(e){
	count++;
	text.text = 'text on the canvas...' + count + '!';
	rect.graphics.clear().beginFill('#f00').drawRect(-10,-10,text.getMeasuredWidth()+20,50);
	stage.update(e);
}