var h0 = document.getElementById("header0");
var h1 = document.getElementById("header1");
var h2 = document.getElementById("header2");

var hph0 = document.getElementById("hph0");
var hph1 = document.getElementById("hph1");
var hph2 = document.getElementById("hph2");

var h0p0 = document.getElementById("h0p0");
var h0p1 = document.getElementById("h0p1");

var h1p0 = document.getElementById("h1p0");
var h1p1 = document.getElementById("h1p1");

function clamp(el, tar) {
	var a = tar.offsetTop-window.pageYOffset-1;
	if(a < 0)
	{
		el.style.top="-1px";
		el.style.position="fixed";
	}
	else if(a > window.innerHeight - 70)
	{
		el.style.top = window.innerHeight - 70 +"px";
		el.style.position="fixed";
	}
	else
	{
		el.style.top = tar.offsetTop - 1 + "px";
		el.style.position="absolute";
	}
}
function matchSPos(el, to) {
	el.style.position = to.style.position;
	el.style.top = to.style.top;
}
function snapHeader() {
  clamp(h0, hph0);
  clamp(h1, hph1);
  clamp(h2, hph2);

  matchSPos(h0p0, h0);
  matchSPos(h0p1, h1);
  matchSPos(h1p0, h1);
  matchSPos(h1p1, h2);
}

snapHeader();

window.onscroll = window.onresize = function(e) {
  snapHeader();
}