/**
 * create CreateJS介绍-SoundJS-app.js by dpp on 2016/1/4
 * @authors Your Name (you@example.org)
 * @date    2016-01-04 01:30:25
 * @version $Id$
 */

var displayStatus;
displayStatus = document.getElementById('status');
var src = '1.mp3';
createjs.Sound.alternateExtensions=['mp3'];
createjs.Sound.addEventListener('fileload',playSound);
createjs.Sound.registerSound(src);

displayStatus.innerHTML = 'Waiting for load to complete';

function playSound(event){
	soundIntance = createjs.Sound.play(event.src);
	displayStatus.innerHTML = 'playing source:' + event.src;
}