// !promise

let p3=new Promise((resolve,reject)=>{
    reject("Failure");
});

p3
.then(res=>console.log(res))
.catch(err=>console.log(err))
.finally(()=>console.log("final"))



// ! API fetching

function fetchUsers(){
    let response=fetch("https://jsonplaceholder.typicode.com/users");
    //console.log(response);
    response.then(res=>{
        //console.log(res)
        //onsole.log(res.json());
        return res.json().then(data=>{
            console.log(data);
        })
    })
    .catch(err=>console.log(err))
}
fetchUsers();