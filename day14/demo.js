let mainEle=document.createElement("div");
mainEle.setAttribute("id","mainBlock");

console.log(mainEle);

let topEle=document.createElement("div");
topEle.setAttribute("class","topBlock");

let image=document.createElement("img");
image.src="https://cdn.pixabay.com/photo/2024/11/11/17/39/dog-9190504_1280.jpg";
image.width="300";
image.height="300";
image.style.objectFit="cover";

let bottomEle=document.createElement("div");
bottomEle.setAttribute("class","bottemBlock");

let h1=document.createElement("h1");
h1.innerText="IMAGE";

let btn=document.createElement("button");
btn.innerText="View More";

bottomEle.appendChild(h1);
bottomEle.appendChild(btn);
topEle.appendChild(image);
mainEle.appendChild(topEle);
mainEle.appendChild(bottomEle);

document.body.appendChild(mainEle);