//  Creating canvas
var ctx = document.getElementById('canvasGame').getContext('2d');  


/* more info: http://stackoverflow.com/questions/7381041/url-of-images-in-javascript-code-using-rails-3-1-asset-pipeline */

var update = function(dt)
{
	input(dt);
};

// Old and new keyboard states
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);


var input = function(dt)
{

};

//  TODO: Wrap image in class that knows if its loaded

var render = function()
{
	//  Check if images is ready
	//		Dislay image, ctx.drawImage();
	ctx.rect(20,20,150,100);
	ctx.stroke();
}


//**********************  Move to utility js
var toMilliseconds = function(seconds)
{
	return seconds/1000;
};
//**********************


var main = function()
{
	var now = Date.now();
	var dt = now-then;

	//  Pass in a fixed timestep to our update function
	//  Warning this does not work with spring like physics
	update(toMilliseconds(dt));
	render();

	//  Update old time
	then = now;

	requestAnimationFrame(main);
};

//  Ensuring cross platform support
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

//  Starting game loop
var then = Date.now();
main();
