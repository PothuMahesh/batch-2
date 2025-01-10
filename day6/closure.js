var a=10
let b=40
function x(){
    var user="Mahesh";
    let company="Google";
    const sal=12334455;
    console.log(user);
    console.log(company);
    console.log(sal);
    console.log(a  ,  b);
}
x();


for(let i=1; i<=5; i++){
    for(let j=1;j<=5;j++){
        document.write("* ")
    }
    document.writeln("<br>")
}

for(let i=1; i<=5; i++){
    for(let j=1;j<=i;j++){
        document.write("* ")
    }
    document.writeln("<br>")
}

for(let i=1; i<=5; i++){
    for(let j=1;j<=5;j++){
        if(i==j || i+j==6){
            document.write("* ")
        }else{
            document.write("&nbsp;&nbsp;&nbsp;&nbsp;")
        }
        
    }
    document.writeln("<br>")
}