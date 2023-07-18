const submenu = document.querySelector(".dropdown1");
const drop = document.querySelector(".drop1");


drop.addEventListener('mouseover', mouseOver);
drop.addEventListener('mouseout', mouseOut);


function mouseOver(){
    submenu.style.display = "block";
}

function mouseOut(){
    submenu.style.display = "none";
}

const usecase = document.querySelector(".useCases");
const innersubmenu = document.querySelector(".innerdropdown1");


usecase.addEventListener('mouseover', mouserOver1);
usecase.addEventListener('mouseout', mouseOut1);

function mouserOver1(){
    innersubmenu.style.display = "block";
}

function mouseOut1(){
    innersubmenu.style.display = "none";
}


const submenu2 = document.querySelector(".dropdown2");
const drop2 = document.querySelector(".drop2");


drop2.addEventListener('mouseover', mouseOver2);
drop2.addEventListener('mouseout', mouseOut2);


function mouseOver2(){
    submenu2.style.display = "block";
}

function mouseOut2(){
    submenu2.style.display = "none";
}