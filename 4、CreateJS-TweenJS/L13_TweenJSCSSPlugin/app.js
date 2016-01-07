/**
 * Created 1、CreateJS TweenJS-CSSPlugin.js by dpp on 2016/1/6
 * @authors Your Name (you@example.org)
 * @date    2016-01-07 22:57:23
 * @version $Id$
 */

createjs.CSSPlugin.install(createjs.Tween);

var box = document.createElement('div');
box.style.width = '400px';
box.style.height = '400px';
box.style.position = 'absolute';
box.style.backgroundColor = '#ff0000';
document.body.appendChild(box);