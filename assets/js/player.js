const player=document.getElementById("streamflixPlayer");
const source=document.getElementById("videoSource");

document.querySelectorAll(".server").forEach(button=>{

button.onclick=()=>{

document.querySelector(".server.active")
?.classList.remove("active");

button.classList.add("active");

const type=button.dataset.type;

switch(type){

case "mp4":

source.src="";

player.load();

break;

case "m3u8":

console.log("HLS");

break;

case "iframe":

console.log("Iframe");

break;

}

};

});
