/**
 * create CreateJS介绍-PreLoadJS-app.js by dpp on 2016/1/4
 * @authors Your Name (you@example.org)
 * @date    2016-01-04 01:32:58
 * @version $Id$
 */

var preload;
preload = new createjs.LoadQueue(false , 'images/');

var plugin = {
	getPreloadHandlers:function(){
		return{
			type:['image'],
			callback:function(src){
				var id = src.toLowerCase().split('/').pop().split('.')[0];
				var img = document.getElementById(id);
				return {tag:img};
			}
		}
	}
}

preload.installPlugin(plugin);
	preload.loadManifest([
			'banner.gif',
			'spring.jpg',
			'summer.jpg',
			'winter.jpg'
		]);