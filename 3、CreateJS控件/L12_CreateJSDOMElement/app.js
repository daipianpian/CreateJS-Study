/**
 * Created 5、CreateJS控件之DOMElement-app.js by dpp on 2016/1/6
 * @authors Your Name (you@example.org)
 * @date    2016-01-07 00:25:34
 * @version $Id$
 */

var stage,container,canvas;
canvas = document.getElementById('gameView');
stage = new createjs.Stage(canvas);
container = new createjs.Container();

stage.addChild(container);
container.x = 100;
container.y = 100;

var content = new createjs.DOMElement('div');
container.addChild(content);

stage.update();