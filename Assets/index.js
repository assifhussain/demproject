let btn1=document.getElementById("btn1");
let para1=document.getElementById("para1");

btn1.addEventListener("click",
function(){
para1.innerHTML="current datetime is"+new Date();
}
)