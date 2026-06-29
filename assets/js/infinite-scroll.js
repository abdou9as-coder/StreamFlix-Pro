window.addEventListener("scroll",()=>{

const end=document.documentElement.scrollHeight-window.innerHeight;

if(window.scrollY>=end-200){

console.log("Load next page...");

}

});
