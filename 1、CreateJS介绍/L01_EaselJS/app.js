/**
 * create 1、CreateJS介绍-EaselJS-app.js by dpp on 2016/1/4
 * @authors Your Name (you@example.org)
 * @date    2016-01-04 01:06:54
 * @version $Id$
 */

var stage = new createjs.Stage('gameView');

var text = new createjs.Text('Hello easeljs' , '36px Arial' , '#777');

stage.addChild(text);

stage.update();