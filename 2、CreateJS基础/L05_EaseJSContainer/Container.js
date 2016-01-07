/**
 * Create CreateJS基础-EaselJS容器-Contaniner.js by dpp on 2016/1/4
 * @authors Your Name (you@example.org)
 * @date    2016-01-04 22:56:27
 * @version $Id$
 */

var stage = new createjs.Stage('gameView');
var gameView = new createjs.Container();
stage.addChild(gameView);

/*
var Rect = new createjs.Shape();
Rect.graphics.beginFill('#ff0000');
Rect.graphics.drawRect(5,5,50,50);
gameView.addChild(Rect);
*/

gameView.x = 100;
gameView.y = 100;

var c = new ChildContainer();
gameView.addChild(c);

stage.update();