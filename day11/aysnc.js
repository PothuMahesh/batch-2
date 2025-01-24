// function demo(){
//     console.log('start');
//     console.log(10);
//     console.log(20);
//     return;
//     console.log(40)
// }
// demo();

let p= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("success");
    },4000);
});

async function demo(){
    console.log('start');
    console.log(10);
    console.log(20);
    let x=await p;
    console.log(x);
    console.log(40);
    console.log("end");
}
demo()

async function fetchUsers(){
    let response=await fetch("https://api.github.com/users");
    let data=await response.json();
    console.log(data);
}
fetchUsers();