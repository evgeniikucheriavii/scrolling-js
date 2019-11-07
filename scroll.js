var progressBar = document.getElementById("progress__bar");

window.addEventListener("scroll", function (e) { Scroll(e); });

function Scroll(e)
{
	var percent = window.scrollY / window.scrollMaxY * 100;

	progressBar.setAttribute("style", "width: " + percent + "%;");	
}