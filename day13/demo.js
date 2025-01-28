 let bgColor=document.querySelectorAll(".bgColor");
[...bgColor].map(element=>{
    // console.log(element);
    element.addEventListener("mouseover",()=>{
        // console.log(element.innerText);
        element.style.backgroundColor=element.innerText;
    })
    element.addEventListener("mouseleave",()=>{
        // console.log(element.innerText);
        element.style.backgroundColor="transparent";
    })
})

//dynamic creation of html elements

let ele=document.createElement("h1");
ele.innerText="dynamic creation of html element";
//ele.id="demo"
ele.setAttribute("id","demo");
console.log(ele)

document.body.appendChild(ele);

let image=document.createElement("img");
image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjF1IfhCow0wKT_fNiFzuftNIy7ANa_VFCAg&s"
console.log(image)

document.body.appendChild(image);