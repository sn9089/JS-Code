/* function getData()
{
 fetch("https://api.kanye.rest/")
.then(res => res.json())
.then(data=> console.log("Result",data))
}
getData()
 */

/* function getData(user) {
    {
    fetch("https://api.github.com/users")
   .then(function(res){
       return res.json()
    })
    
   .then(data=> {
     console.log("Result",data)
   } )
   }
}

   getData(1) */


   function postData() {
    {

 url="http://dummy.restapiexample.com/api/v1/create"
 data= '{"name":"swapnil123","salary":"123","age":"23"}'
 const param ={ 
method:'post',
headers : {
'Content-Type':'application/json'
},
body:data
}

fetch(url,param)
.then(res=>res.json())
.then(data=>console.log(data))
   }
}

postData()









