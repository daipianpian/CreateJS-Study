/**
 * Create CreateJS基础-EaselJS容器-ChildContainer.js by dpp on 2016/1/4
 * @authors Your Name (you@example.org)
 * @date    2016-01-04 22:56:27
 * @version $Id$
 */

function ChildContainer(){
	var Rect = new createjs.Shape();
	Rect.graphics.beginFill('#ff0000');
	Rect.graphics.drawRect(0,0,50,50);
	Rect.graphics.endFill();
	var Text = new createjs.Text('哇' , '30px Arial' , '#ffffff');
	this.addChild(Rect);
	this.addChild(Text);
}

ChildContainer.prototype = new createjs.Container();