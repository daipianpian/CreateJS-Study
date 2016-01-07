/**
 * Created 4、CreateJSTweenJS-Tween.js by dpp on 2016/1/6
 * @authors Your Name (you@example.org)
 * @date    2016-01-07 23:03:21
 * @version $Id$
 */
	var canvas;
	var stage;
	var tweens;
	var circleCount = 25;
	var activeCount;

canvas = document.getElementById("gameView");
stage = new createjs.Stage(canvas);

tweens = [];
		for (var i = 0; i < circleCount; i++) {
			var circle = new createjs.Shape();
			circle.graphics.setStrokeStyle(15);
			circle.graphics.beginStroke("#113355");
			circle.graphics.drawCircle(0, 0, (i + 1) * 4);
			circle.compositeOperation = "lighter";

			var tween = createjs.Tween.get(circle).to({x: 300, y: 200}, (0.5 + i * 0.04) * 1500, createjs.Ease.bounceOut).call(tweenComplete);
			tweens.push({tween: tween, ref: circle});
			stage.addChild(circle);
		}

		activeCount = circleCount;
		stage.addEventListener("stagemouseup", handleMouseUp);

		createjs.Ticker.addEventListener("tick", stage);

		function handleMouseUp(event) {
		for (var i = 0; i < circleCount; i++) {
			var ref = tweens[i].ref;
			createjs.Tween.get(ref, {override: true}).to({x: stage.mouseX, y: stage.mouseY}, (0.5 + i * 0.04) * 1500, createjs.Ease.bounceOut).call(tweenComplete);
		}
		activeCount = circleCount;
	}

	function tweenComplete() {
		activeCount--;
	}
