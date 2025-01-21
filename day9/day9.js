let userData={
    name:"Mahesh",
    age:20,
    city:"Karimnager"
};
console.log(userData.name,typeof(userData));

let x=JSON.stringify(userData)
console.log(x,typeof(x))

let y=JSON.parse(x);
console.log(y);