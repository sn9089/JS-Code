window.addEventListener('load', function() {
    show = new display();
    show.add();
})
class book {
    constructor(bookName, author, type) {
        this.bookName = bookName;
        this.author = author;
        this.type = type;
    }

    setNameLocalStorage(lBname) {
        this.lBname = lBname;
        let bname;
        if (lBname == null) {
            bname = [];
        } else {
            bname = JSON.parse(lBname);
        }
        bname.push(this.bookName);
        localStorage.setItem("name", JSON.stringify(bname));
    }
    setAuthLocalStorage(lAuth) {
        this.lAuth = lAuth;
        let ath;
        if (lAuth == null) {
            ath = [];
        } else {
            ath = JSON.parse(lAuth);
        }
        ath.push(this.author);
        localStorage.setItem("auth", JSON.stringify(ath));
    }

    setTypeLocalStorage(lType) {
        this.lType = lType;
        let typ;
        if (lType == null) {
            typ = [];
        } else {
            typ = JSON.parse(lType);
        }
        typ.push(this.type);
        localStorage.setItem("type", JSON.stringify(typ));
    }

}


class display {
    validate(bLength, aLength) {
        if (bLength >= 2 && aLength >= 2) {
            return true;
        } else {
            return false;
        }

    }
    add() {
        let name = JSON.parse(localStorage.getItem("name"));
        let author = JSON.parse(localStorage.getItem("auth"));
        let value = JSON.parse(localStorage.getItem("type"));

        let tb = document.getElementById("tb");
        let str = "";
        for (let index = 0; index < name.length; index++) {
            str +=
                `<tr>
<td>${name[index]}</td>
<td>${author[index]}</td>
<td>${value[index]}</td>
<td><button type="button" class="btn btn-danger" id="${index}" onClick=dele(this.id)>Del</button>
</td>
</tr>`

        }
        tb.innerHTML = str;
    }

    clear() {
        document.getElementById("bookName").value = "";
        document.getElementById("author").value = "";
        document.getElementById("myst").checked = true;

    }
    message(msg) {

        if (msg == 'successful') {
            let alt = document.getElementById("alert");
            alt.innerHTML = `<div class="alert alert-success d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg>
        <div>
        Data uploaded successfully!
        </div>
    </div>`;
            setTimeout(function() {
                alt.innerHTML = "";

            }, 5000)
        } else {
            let alt = document.getElementById("alert");
            alt.innerHTML = `
        <div class="alert alert-danger d-flex align-items-center" role="alert">
  <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
  <div>
    Data is not uploaded because all feilds are mandatory.
  </div>
</div>
`
            setTimeout(function() {
                alt.innerHTML = "";

            }, 5000)
        }
    }


}



let addBook = document.getElementById("addBook");
addBook.addEventListener('click', bookData);

function bookData(e) {
    let bookName = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;
    let myst = document.getElementById("myst").checked;
    let act = document.getElementById("act").checked;
    let comic = document.getElementById("comic").checked;
    let value;
    if (myst == true) {
        value = "Mystery";
    } else if (act == true) {
        value = "Action and adventure";
    } else {
        value = "Comic book";
    }

    let lBname1 = localStorage.getItem("name");
    let lAuth1 = localStorage.getItem("auth");
    let lType1 = localStorage.getItem("type");

    let book1 = new book(bookName, author, value);
    let bln = book1.bookName.length;
    let aut = book1.author.length;
    let display1 = new display();


    if (display1.validate(bln, aut) == true) {
        book1.setNameLocalStorage(lBname1);
        book1.setAuthLocalStorage(lAuth1);
        book1.setTypeLocalStorage(lType1)
        display1.add();
        display1.clear();
        display1.message("successful");
    } else {
        console.log("data not added")
        display1.message("Unsuccessful");

    }
}
let del = document.getElementById("del");
del.addEventListene('click', dele(index));

function dele(index) {
    let dBname1 = JSON.parse(localStorage.getItem("name"));
    let dAuth1 = JSON.parse(localStorage.getItem("auth"));
    let dType1 = JSON.parse(localStorage.getItem("type"));
    dBname1.splice(index, 1);
    dAuth1.splice(index, 1);
    dType1.splice(index, 1);

    localStorage.setItem("name", JSON.stringify(dBname1));
    localStorage.setItem("auth", JSON.stringify(dAuth1));
    localStorage.setItem("type", JSON.stringify(dType1));

    let display2 = new display();
    display2.add();

}