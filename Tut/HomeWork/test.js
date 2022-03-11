let fName = document.getElementById("fName");
let cName = document.getElementById("colleage");
let aName = document.getElementById("address");
let button = document.getElementById("button")
let nFName = document.createElement("div");
let nCName = document.createElement("div");
let nAName = document.createElement("div");


fName.addEventListener('blur', function() {
    localStorage.setItem("name", JSON.stringify(fName.value))
})

cName.addEventListener('blur', function() {
    localStorage.setItem("Colleage", JSON.stringify(cName.value));
})

aName.addEventListener('blur', function() {
    localStorage.setItem("address", JSON.stringify(aName.value))
})


button.addEventListener('click', function() {
    let lname = JSON.parse(localStorage.getItem("name"));
    nFName.innerHTML = `<div class="input-group my-3 mx-2" style="width: 40%;">
<span class="input-group-text ">Full Name </span>
<span class="form-control">${lname} </span> 
</div>`

    let lcolleage = JSON.parse(localStorage.getItem("Colleage"));
    nCName.innerHTML = `<div class="input-group my-3 mx-2" style="width: 40%;">
<span class="input-group-text ">Colleage </span>
<span class="form-control">${lcolleage} </span>
</div>`

    let laddress = JSON.parse(localStorage.getItem("address"));
    nAName.innerHTML = `<div class="input-group my-3 mx-2" style="width: 40%;">
<span class="input-group-text ">Address </span>
<span class="form-control">${laddress} </span>
</div>`
    document.getElementById("container").appendChild(nFName);
    document.getElementById("container").appendChild(nCName);
    document.getElementById("container").appendChild(nAName);
})