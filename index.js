 let element=document.createElement("ul");
 element.className="newUL";
let child0=document.createElement("li");
child0.className="Text";
child0.innerHTML="Try";
child0.style.color="#B1114B";

let ul=document.querySelector('ul');
ul.appendChild(child0);
let childnd=ul.childNodes[3];
childnd.style.color="#0FE0EE";
//console.log(childnd);


let body=document.querySelector('body');


let img=document.createElement("img");
img.src=".vscode/images/img.png"
img.width="1000";
img.height=400;
body.appendChild(img);


body.appendChild(element);

let child=document.createElement("li");
child.className="text1";
child.innerHTML="new";
child.style.color="#F31212";
let child1=document.createElement("li");
child1.className="text2";
child1.innerHTML="new1";
child1.style.color="#1FF50A";
let child2=document.createElement("li");
child2.className="text3";
child2.innerHTML="new2";
child2.style.color="#780AF5";
let child3=document.createElement("li");
child3.className="text4";
child3.innerHTML="new3";
child3.style.color="#0AF57C";

element.appendChild(child);
element.appendChild(child1);
element.appendChild(child2);
element.appendChild(child3);


document.getElementById("text1").addEventListener("click",function(e){
console.log(e.target);

location.href="https://www.google.com";


}
)






