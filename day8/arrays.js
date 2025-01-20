//let user1="Mahesh";

let users=["Mahesh","Sandy","Pranav","Sanyu paul","Rajiumer","Akhilendra"];
console.log(users[0]);
console.log(users[1]);
console.log(users[2]);
console.log(users[3]);
console.log(users[4]);
console.log(users[5]);

for(let i=0;i<users.length;i++){
    console.log(users[i]);
}

users.map((user,i)=>{
    console.log(user)
})

users.forEach((user,i)=>{
    console.log(user)
})

let userdetails={
    name: "Sam",
    age:23,
    city:"Hyderabad"
}
console.log(userdetails)
console.log(userdetails.name)
console.log(userdetails.city)

let userdetails2={
    name: "Mahesh",
    age:23,
    address:{
        city:"Hyderabad",
        area:"Bahadurpally",
        StreetNo:123,
        pincode:{
            pin1:123456,
            pin2:567889
        }
    }
};
console.log(userdetails2.name)
console.log(userdetails2.address.pincode)
console.log(userdetails2.address.pincode.pin1)

//create array of objects
let user1={
    name:"Mahesh",
    city:"Hyderabad"
}
let user2={
    name:"Rahul",
    city:"Hyderabad"
}
let user3={
    name:"varun",
    city:"Hyderabad"
}
let user4={
    name:"sandeep",
    city:"Hyderabad"
}

let userdetails3=[
    {
        name:"Mahesh",
        city:"Hyderabad"
    },
    {
        name:"Rahul",
        city:"Hyderabad"
    },
    {
        name:"varun",
        city:"Hyderabad"
    },
    {
        name:"sandeep",
        city:"Hyderabad"
    }
    
];
console.log(userdetails3)