const menuButton=document.querySelector("#menuButton");
const menu=document.querySelector(".menu");

if(menuButton){

menuButton.onclick=()=>{

menu.classList.toggle("open");

};

}
