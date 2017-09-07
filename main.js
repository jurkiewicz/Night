document.addEventListener("DOMContentLoaded", function(){
	var canvas = document.getElementById('Canvas');
	var c = canvas.getContext('2d');

	function staring(i){
		c.fillStyle = "#ffffff";
		if (i < 0 && stan) return;
		setTimeout(function(){
			var x = Math.floor(Math.random()*window.innerWidth);
	    	var y = Math.floor(Math.random()*window.innerHeight);
	    	var w = Math.random()+0.1;
	    	c.fillRect(x,y,w,w);
	    	staring(i--);
		}, 5);
	}
	function errasing(){
		c.fillStyle = "#00b7ff";
		c.fillRect(0,0,window.innerWidth,window.innerHeight);
	}

	canvas.onmouseover = function(){
		if (canvas.getContext) {
		    staring(1000);
		}
	}
	canvas.onclick = function(){
		if (canvas.getContext) {
		    errasing();
		}
	}
});
