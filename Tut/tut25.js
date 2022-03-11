//create DIV Element
let dv = document.createElement("div");
dv.setAttribute("id", "txt");
dv.setAttribute("class", "txt");
dv.setAttribute("style", "border:2px solid black; width:154px; margine:34px; padding:23px");
let cnt = document.querySelector(".container");
cnt.appendChild(dv);
let val = localStorage.getItem('text');
let text;
if (val == undefined) {
    text = document.createTextNode('This is my element. click to edit it');
} else {
    text = document.createTextNode(val);
}
dv.appendChild(text);


dv.addEventListener('click', function() {

    let txt = document.getElementsByClassName("textarea").length;
    if (val == null) {
        val = "Please enter Text";
    }
    if (txt == 0) {
        dv.innerHTML = `<textarea class="textarea form-control" id="textarea" rows="3">${val}</textarea>`;
    }
    let texta = document.getElementById("textarea");
    textarea.addEventListener('blur', function() {
        txt.innerHTML = textarea.Value;
        localStorage.setItem("text", textarea.value)

    })

})