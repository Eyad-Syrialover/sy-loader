
/*
sy-loader.js Designed By Eyad Syria-lover And Moved To The Folder 1.0 On 30/7/2016
*/
/*
DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                    Version 2, December 2004

 Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>

 Everyone is permitted to copy and distribute verbatim or modified
 copies of this license document, and changing it is allowed as long
 as the name is changed.

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  0. You just DO WHAT THE FUCK YOU WANT TO.

*/

window.onload=function() {
var loader=document.querySelectorAll("[data-sy-loader=true]");
var i;
for (i=0;i<loader.length;i++)
{



var syStyleCreating=document.createElement("STYLE");
var syStyleInfo=document.createTextNode("@keyframes loaderSpin {from {transform:rotate(0deg);} to {transform:rotate(360deg);}} @-webkit-keyframes loaderSpin {from {-webkit-transform:rotate(0deg);} to {-webkit-transform:rotate(360deg);}} @-moz-keyframes loaderSpin {from {-moz-transform:rotate(0deg);} to {-moz-transform:rotate(360deg);}} @-ms-keyframes loaderSpin {from {-ms-transform:rotate(0deg);} to {-ms-transform:rotate(360deg);}} [data-sy-loader=true] {border-radius:50%;animation-name:loaderSpin;-webkit-animation-name:loaderSpin;-moz-animation-name:loaderSpin;-ms-animation-name:loaderSpin;animation-iteration-count:infinite;-webkit-animation-iteration-count:infinite;-moz-animation-iteration-count:infinite;-ms-animation-iteration-count:infinite;animation-duration:2s;-webkit-animation-duration:2s;-moz-animation-duration:2s;-ms-animation-duration:2s;}");
syStyleCreating.appendChild(syStyleInfo);
document.body.appendChild(syStyleCreating);



if (loader[i].getAttribute("data-sy-loader-border-type")=="solid")
{
loader[i].style.borderStyle="solid";
loader[i].style.borderTopStyle="solid";
}
else if (loader[i].getAttribute("data-sy-loader-border-type")=="dotted")
{
loader[i].style.borderStyle="dotted";
 loader[i].style.borderTopStyle="dotted"; 
}
 
else if (loader[i].getAttribute("data-sy-loader-border-type")=="dashed")
{
loader[i].style.borderStyle="dashed";
 loader[i].style.borderTopStyle="dashed"; }
else if (loader[i].getAttribute("data-sy-loader-border-type")=="double")
{
loader[i].style.borderStyle="double";
 loader[i].style.borderTopStyle="double"; 
}
 
else if (loader[i].getAttribute("data-sy-loader-border-type")=="groove")
{
loader[i].style.borderStyle="groove";
 loader[i].style.borderTopStyle="groove"; 
}
else if (loader[i].getAttribute("data-sy-loader-border-type")=="inset")
{
loader[i].style.borderStyle="inset";
 loader[i].style.borderTopStyle="inset"; 
}
 
else if (loader[i].getAttribute("data-sy-loader-border-type")=="outset")
{
loader[i].style.borderStyle="outset";
 loader[i].style.borderTopStyle="outset"; 
}
 
else if (loader[i].getAttribute("data-sy-loader-border-type")=="ridge")
{
loader[i].style.borderStyle="ridge";
 loader[i].style.borderTopStyle="ridge"; 
}
else if (loader[i].getAttribute("data-sy-loader-border-type")=="hidden")
{
loader[i].style.borderStyle="hidden";
 loader[i].style.borderTopStyle="hidden"; 
}
 
else if (loader[i].getAttribute("data-sy-loader-border-type")=="none")
{
loader[i].style.borderStyle="none";
 loader[i].style.borderTopStyle="none"; 
}
 
else
{
window.alert("The Value For The Property (data-sy-loader-border-type) Isn't Supported Right Now. \n Please Use One Of These Values: \n solid,dotted,dashed,inset,outset,double,groove,hidden,none,ridge.");
}




if (loader[i].getAttribute("data-sy-loader-duration")=="default" || loader[i].getAttribute("data-sy-loader-duration")==="")
{
loader[i].style["animation-duration"]="2s";
loader[i].style["-moz-animation-duration"]="2s";
loader[i].style["-webkit-animation-duration"]="2s";
loader[i].style["-ms-animation-duration"]="2s";
}
else
{
loader[i].style["animation-duration"]=loader[i].getAttribute("data-sy-loader-duration");
 loader[i].style["-moz-animation-duration"]=loader[i].getAttribute("data-sy-loader-duration"); 
 loader[i].style["-webkit-animation-duration"]=loader[i].getAttribute("data-sy-loader-duration"); 
 loader[i].style["-ms-animation-duration"]=loader[i].getAttribute("data-sy-loader-duration"); 
}

if (loader[i].getAttribute("data-sy-loader-border-width")!=="")
{
loader[i].style["border-width"]=loader[i].getAttribute("data-sy-loader-border-width");
 loader[i].style["border-top-width"]=loader[i].getAttribute("data-sy-loader-border-width"); 
}
else if (loader[i].getAttribute("data-sy-loader-border-width")==="" || loader[i].getAttribute("data-sy-loader-border-width")=="default")
{
loader[i].style["border-width"]="10px";
 loader[i].style["border-top-width"]="10px";
}

if (loader[i].getAttribute("data-sy-loader-border-color")!=="")
{
 loader[i].style["border-color"]= loader[i].getAttribute("data-sy-loader-border-color");
}
else if (loader[i] .getAttribute("data-sy-loader-border-color")==="" || loader[i].getAttribute("data-sy-loader-border-color")=="default")
{
 loader[i].style["border-color"]="black";
}



if (loader[i].getAttribute("data-sy-loader-spinner-color") !=="")
{
 loader[i].style["border-top-color"]=loader[i].getAttribute("data-sy-loader-spinner-color");
}
else if (loader[i].getAttribute("data-sy-loader-spinner-color") ==="" || loader[i].getAttribute("data-sy-loader-spinner-color") !=="default")
{
 loader[i].style["border-top-color"]="silver";
}


if (loader[i].getAttribute("data-sy-loader-radius") !=="")
{
 loader[i].style.width=loader[i].getAttribute("data-sy-loader-radius");
 loader[i].style.height=loader[i].getAttribute("data-sy-loader-radius"); 
}

else if (loader[i].getAttribute("data-sy-loader-radius")==="" || loader[i].getAttribute("data-sy-loader-radius")=="default")
{
loader[i].style.width="15px";
 loader[i].style.height="15px";
}



}
}
