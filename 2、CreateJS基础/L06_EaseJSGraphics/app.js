/**
 * Create CreateJS基础-EaselJS绘图-app.js by dpp on 2016/1/4
 * @authors Your Name (you@example.org)
 * @date    2016-01-04 23:32:21
 * @version $Id$
 */

var stage = new createjs.Stage('gameView');
var gameView = new createjs.Container();
stage.addChild(gameView);

/*
var Rect = new createjs.Shape();
Rect.graphics.beginFill('#ff00ff');
Rect.graphics.drawRect(0,0,100,50);
gameView.addChild(Rect);

var Ellipse = new createjs.Shape();
Ellipse.graphics.beginFill('#ff0000');
Ellipse.graphics.drawEllipse(100,100,100,80);
gameView.addChild(Ellipse);
*/

gameView.x = 100;
gameView.y = 100;

var c = new Circle();
c.setCircleType(Circle.TYPE_GREEN);
gameView.addChild(c);

stage.update();
