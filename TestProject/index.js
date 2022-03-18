 async function getapi() {

     var requestOptions = {
         method: 'GET',
         redirect: 'follow'
     };

     let test = await fetch("https://jsonplaceholder.typicode.com/users", requestOptions);
     console.log("test", test)
     const data = await test.json();
     let test1 = "";
     data.forEach(element => {

         test1 += (element.name) + "\n"
         document.getElementById("test").innerHTML = test1;
     });


     // .then(response => response.text())
     // .then(result => { document.getElementById("test").innerHTML = result; })
     // .catch(error => console.log('error', error));
 }

 getapi();