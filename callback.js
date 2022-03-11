const students=
[
    {name :"swapnil" , subject:"Java"},
    {name :"Amar" , subject:"JS"},
]


function enrollStudents(student,callBack)
{
    setTimeout(function()
    {
        students.push(student);
        callBack();
        console.log("Insert");
    },1000
    )
  
}

function getStudents()
{
    setTimeout(function()
    {
let str='';
students.forEach(function(student) {
    str +=  `<li> ${student.name}</li>`;
    document.getElementById("text1").innerHTML=str;
    let code=document.querySelectorAll("li");
    code.forEach((element)=> {element.style.color="Green";}

    )
    console.log("Fetch");
})
    },1000


    )
}

let newStudent=[{name:"pdhya",subject:"pthon"},{name:"suyog",subject:"pthon"},{name:"suyog",subject:"pthon"}];

console.log("function call");
newStudent.forEach(function(element) {
    enrollStudents(element,getStudents);
});



let cd=document.querySelector("ul");
cd.addEventListener("click",function(){
    location.href="https://www.google.com";
})
