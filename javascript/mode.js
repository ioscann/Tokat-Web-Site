const navbar = document.querySelector('.navbar');
const footer = document.querySelector('.footer');
const mode = document.querySelector('.darklightmode');
if (mode == null || mode == undefined) {
   mode = 0;
}
function kontrol(){
if (localStorage.getItem("mode") == 0) {
    mode.style.color = 'white';
   footer.style.background = 'black';
   navbar.style.background = 'black';

}
else if (localStorage.getItem("mode") == 1) {
   mode.style.color = 'black';
   footer.style.background = 'rgb(87, 85, 85)';
   navbar.style.background = 'rgb(87, 85, 85)';
}
}

localStorage.setItem("mode" , 1);
var tut


    if (localStorage.getItem("mode2") != localStorage.getItem("mode")) {
        localStorage.setItem("mode",localStorage.getItem("mode2"));
    }


mode.onclick = function(){
if (localStorage.getItem("mode") == 0) {
   mode.style.color = 'white';
   footer.style.background = 'black';
   navbar.style.background = 'black';
   localStorage.setItem("mode", 1);
   tut = localStorage.getItem("mode");
   localStorage.setItem("mode2",tut)
}
else if(localStorage.getItem("mode") == 1){
   mode.style.color = 'black';
   footer.style.background = 'rgb(87, 85, 85)';
   navbar.style.background = 'rgb(87, 85, 85)';
   localStorage.setItem("mode", 0);
   tut = localStorage.getItem("mode");
   localStorage.setItem("mode2",tut)
}
}

setInterval(kontrol,1);