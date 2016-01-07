/**
 * Create CreateJS基础-EaselJS绘图-circle.js by dpp on 2016/1/4
 * @authors Your Name (you@example.org)
 * @date    2016-01-05 00:04:18
 * @version $Id$
 */

function Circle(){
	createjs.Shape.call(this);
	this.setCircleType = function(type){
		this._circleType = type;
		switch (type){
			case Circle.TYPE_RED:
				this.setColor('#ff0000');
				break;
			case Circle.TYPE_GREEN:
				this.setColor('#00ff00');
				break;
		}
	}

	this.setColor = function(color){
		this.graphics.beginFill(color);
		this.graphics.drawCircle(0,0,50);
		this.graphics.endFill();
	}

	this.setCircleType(Circle.TYPE_RED);
}

Circle.prototype = new createjs.Shape();
Circle.TYPE_RED = 1;
Circle.TYPE_GREEN = 2;

