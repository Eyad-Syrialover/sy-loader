



window.onload=function() {
var loader=document.querySelectorAll("[data-sy-loader=true]");
var i;
for (i=0;i<loader.length;i++)
{



var syStyleCreating=document.createElement("STYLE");
var syStyleInfo=document.createTextNode("@keyframes loaderSpin {from {transform:rotate(0deg);} to {transform:rotate(360deg);}} @-webkit-keyframes loaderSpin {from {-webkit-transform:rotate(0deg);} to {-webkit-transform:rotate(360deg);}} @-moz-keyframes loaderSpin {from {-moz-transform:rotate(0deg);} to {-moz-transform:rotate(360deg);}} @-ms-keyframes loaderSpin {from {-ms-transform:rotate(0deg);} to {-ms-transform:rotate(360deg);}} [data-sy-loader=true] {border-radius:50%;animation-name:loaderSpin;-webkit-animation-name:loaderSpin;-moz-animation-name:loaderSpin;-ms-animation-name:loaderSpin;animation-iteration-count:infinite;-webkit-animation-iteration-count:infinite;-moz-animation-iteration-count:infinite;-ms-animation-iteration-count:infinite;animation-duration:2s;-webkit-animation-duration:2s;-moz-animation-duration:2s;-ms-animation-duration:2s;}[data-sy-loader-mode=],[data-sy-loader-mode=default],[data-sy-loader-mode=ease]{animation-timing-function:ease;-webkit-animation-timing-function:ease;-moz-animation-timing-function:ease;-ms-animation-timing-function:ease;-o-animation-timing-function:ease;}[data-sy-loader-mode=linear]{animation-timing-function:linear;-webkit-animation-timing-function:linear;-moz-animation-timing-function:linear;-ms-animation-timing-function:linear;-o-animation-timing-function:linear;}[data-sy-loader-mode=ease-in]{animation-timing-function:ease-in;-webkit-animation-timing-function:ease-in;-moz-animation-timing-function:ease-in;-ms-animation-timing-function:ease-in;-o-animation-timing-function:ease-in;}[data-sy-loader-mode=ease-out]{animation-timing-function:ease-out;-webkit-animation-timing-function:ease-out;-moz-animation-timing-function:ease-out;-ms-animation-timing-function:ease-out;-o-animation-timing-function:ease-out;}[data-sy-loader-mode=ease-in-out]{animation-timing-function:ease-in-out;-webkit-animation-timing-function:ease-in-out;-moz-animation-timing-function:ease-in-out;-ms-animation-timing-function:ease-in-out;-o-animation-timing-function:ease-in-out;}[data-sy-loader-duration=],[data-sy-loader-duration=default]{animation-delay:500ms;-webkit-animation-delay:500ms;-moz-animation-delay:500ms;-ms-animation-delay:500ms;-o-animation-delay:500ms;}[data-sy-loader-direction=],[data-sy-loader-direction=default],[data-sy-loader-direction=normal]{animation-direction:normal;-webkit-animation-direction:normal;-moz-animation-direction:normal;-ms-animation-direction:normal;-o-animation-direction:normal;}[data-sy-loader-direction=reverse]{animation-direction:reverse;-webkit-animation-direction:reverse;-moz-animation-direction:reverse;-ms-animation-direction:reverse;-o-animation-direction:reverse;}[data-sy-loader-direction=alternate]{animation-direction:alternate;-webkit-animation-direction:alternate;-moz-animation-direction:reverse;-ms-animation-direction:alternate;-o-animation-direction:alternate;}[data-sy-loader-direction=alternate-reverse]{animation-direction:alternate-reverse;-webkit-animation-direction:alternate-reverse;-moz-animation-direction:alternate-reverse;-ms-animation-direction:alternate-reverse;-o-animation-direction:alternate-reverse;}");
syStyleCreating.appendChild(syStyleInfo);
document.body.appendChild(syStyleCreating);


if (loader[i].getAttribute("data-sy-loader-delay")!=="")
{
loader[i].style["animation-delay"]=loader[i].getAttribute("data-sy-loader-delay");
loader[i].style["-webkit-animation-delay"]=loader[i].getAttribute("data-sy-loader-delay");
loader[i].style["-moz-animation-delay"]=loader[i].getAttribute("data-sy-loader-delay");
loader[i].style["-ms-animation-delay"]=loader[i].getAttribute("data-sy-loader-delay");
loader[i].style["-o-animation-delay"]=loader[i].getAttribute("data-sy-loader-delay");
}
else if (loader[i].getAttribute("data-sy-loader-delay")==="" || loader[i].getAttribute("data-sy-loader-delay")=="default")
{
loader[i].style["animation-delay"]="500ms";
loader[i].style["-webkit-animation-delay"]="500ms";
loader[i].style["-moz-animation-delay"]="500ms";
loader[i].style["-ms-animation-delay"]="500ms";
loader[i].style["-o-animation-delay"]="500ms";
}


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
