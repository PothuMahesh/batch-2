//global scope
var a=10;
console.log(a);


//local scope
let b=20;
console.log(b);

const v=30;
console.log(v);

//block scope
{
    var m=100;
    console.log(m);

    let n=200;
    console.log(n);

    const t=300;
    console.log(t);
}