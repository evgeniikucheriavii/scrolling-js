var progressBar = document.getElementById("progress__bar");
var topButton = document.getElementById("top");

var timer = null;

window.addEventListener("scroll", function (e) { Scroll(e); CheckScroll(e); });
topButton.addEventListener("click", function (e) { ScrollToTop(400); });

function Scroll(e)
{
	var percent = window.scrollY / window.scrollMaxY * 100;
	
	progressBar.setAttribute("style", "width: " + percent + "%;");	
}

function CheckScroll(e)
{
	if(window.scrollY > 150)
	{
		topButton.className = "top";
	}
	else
	{
		topButton.className = "top top_hidden";
	}
}

function ScrollToTop(length)
{
	var updateRate = 1000 / 60;

	var frames = length / updateRate;

	var val = window.scrollY / frames;

	timer = setInterval(function (e) { UpdateScroll(val); }, updateRate);
}

function UpdateScroll(val)
{
	window.scroll(0, window.scrollY - val);
	
	if(window.scrollY <= 0)
	{
		clearInterval(timer);
	}
}