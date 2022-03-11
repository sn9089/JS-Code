console.log("Hello");
showNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index) {
        html += ` <div class="card my-2 mx-2" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title"> ${index+1}</h5>
        <p class="card-text">${element}.</p>
        <button id="${index}" class="btn btn-primary" onClick=delNotes(this.id)>Delete Button </button>
    </div>
</div>`
    })

    let data = document.getElementById("notes");
    if (notesObj.length != 0) {
        data.innerHTML = html;
    } else {
        data.innerHTML = `Please "add note" from above section "Add Note"`;
    }

}

function delNotes(index) {
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();


}