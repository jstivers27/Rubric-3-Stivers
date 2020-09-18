// JavaScript Document
alert ("Welcome");

console.log ("How many childNodes are in the demoparent array?");
var myDemo=document.getElementById("demoparent");
console.log(myDemo.childNodes.length);
var myDemoTags=document.getElementsByTagName("li");
console.log("Number of li links: "+myDemoTags.length);
var linksInMenu=myDemo.getElementsByTagName("li");
console.log("Number of li items in Menu: "+ linksInMenu.length);
var myList=document.getElementById("demoparent");
myList.setAttribute("style", "color: purple");
var newItem=document.createElement("li");
var newText= document.createTextNode("This one was created using the appendChild Method!");
myDemo.appendChild(newItem);
newItem.appendChild(newText);


function myFunction1() {
	var a = document.createElement("H3");
	var b = document.createTextNode("This uses the createTextNode Method, that's me!");
	a.appendChild(b);
	document.body.appendChild(a);
}

function myFunction2() {
  var h1 = document.getElementsByTagName("H1")[0];
  var att = document.createAttribute("class");
  att.value = "democlass";
  h1.setAttributeNode(att);
  var h1 = document.createElement("H3");
  var c = document.createTextNode("This uses the createAttribute Method, notice how the title changed?");
  h1.appendChild(c);
  document.body.appendChild(h1);
}

function myFunction3() {
  var c = document.createComment("My personal comments");
  document.body.appendChild(c);
  var x = document.getElementById("demo");
  x.innerHTML = "This uses the createComment Method, that's me!.";
}


