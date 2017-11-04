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

h0.style.top=h0l1.style.top=clamp(hph0.offsetTop-window.pageYOffset-1,0, window.innerHeight-70)+window.pageYOffset+"px";
h1.style.top=h1l1.style.top=h1l2.style.top=clamp(hph1.offsetTop-window.pageYOffset-1,0, window.innerHeight-70)+window.pageYOffset+"px";
h2.style.top=h2l2.style.top=h2l3.style.top=clamp(hph2.offsetTop-window.pageYOffset-1,0, window.innerHeight-70)+window.pageYOffset+"px";
h3.style.top=h3l3.style.top=clamp(hph3.offsetTop-window.pageYOffset-1,0, window.innerHeight-70)+window.pageYOffset+"px";

function clamp(a, b, c)
{
  if(a < b)
    return b;
  if(a > c)
    return c;
  return a;
}

window.onscroll = window.onresize = function(e) 
{
  h0.style.top=h0l1.style.top=clamp(hph0.offsetTop-window.pageYOffset-1,0, window.innerHeight-70)+window.pageYOffset+"px";
  h1.style.top=h1l1.style.top=h1l2.style.top=clamp(hph1.offsetTop-window.pageYOffset-1,0, window.innerHeight-70)+window.pageYOffset+"px";
  h2.style.top=h2l2.style.top=h2l3.style.top=clamp(hph2.offsetTop-window.pageYOffset-1,0, window.innerHeight-70)+window.pageYOffset+"px";
  h3.style.top=h3l3.style.top=clamp(hph3.offsetTop-window.pageYOffset-1,0, window.innerHeight-70)+window.pageYOffset+"px";
}