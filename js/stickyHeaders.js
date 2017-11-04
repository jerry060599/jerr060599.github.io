var h0 = document.getElementById("header0");
var h1 = document.getElementById("header1");
var h2 = document.getElementById("header2");
var h3 = document.getElementById("header3");

var hph0 = document.getElementById("hph0");
var hph1 = document.getElementById("hph1");
var hph2 = document.getElementById("hph2");
var hph3 = document.getElementById("hph3");

var h1l1 = document.getElementById("h1l1");
var h0l1 = document.getElementById("h0l1");

var h2l2 = document.getElementById("h2l2");
var h1l2 = document.getElementById("h1l2");

var h3l3 = document.getElementById("h3l3");
var h2l3 = document.getElementById("h2l3");

function clamp(el, tar)
{
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
function matchSPos(el, to)
{
	el.style.position = to.style.position;
	el.style.top = to.style.top;
}

clamp(h0, hph0);
  matchSPos(h0l1, h0);
  clamp(h1, hph1);
  matchSPos(h1l1, h1);
  matchSPos(h1l2, h1);
  clamp(h2, hph2);
  matchSPos(h2l2, h2);
  matchSPos(h2l3, h2);
  clamp(h3, hph3);
  matchSPos(h3l3, h3);

window.onscroll = window.onresize = function(e) 
{
  clamp(h0, hph0);
  matchSPos(h0l1, h0);
  clamp(h1, hph1);
  matchSPos(h1l1, h1);
  matchSPos(h1l2, h1);
  clamp(h2, hph2);
  matchSPos(h2l2, h2);
  matchSPos(h2l3, h2);
  clamp(h3, hph3);
  matchSPos(h3l3, h3);
}