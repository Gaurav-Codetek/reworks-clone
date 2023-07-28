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


const hamburger = document.querySelector(".ham");
const menu = document.querySelector(".mobileMenu");
const MobNav = document.querySelector(".mobileNav");
const innerdrop = document.querySelector(".innerdrop");
const ondrop = document.querySelector(".ondrop");
const usecasedrop = document.querySelector(".usecasedrop");
const Mobusecases = document.querySelector(".MobuseCases");
const feature = document.querySelector(".ondrop2");
const innerFeature = document.querySelector(".innerFeature");

hamburger.addEventListener('click', ()=>{
    
        if(menu.style.display === "block" && menu.style.opacity === "1"){
            
            menu.style.display = "none";
            menu.style.opacity = "0"
        
        }

        else{
            setTimeout(function(){
            menu.style.display = "block";
            menu.style.opacity = "1";
        },200)
        }
    
    
    MobNav.classList.toggle('nav-resp');
    
})

ondrop.addEventListener('click', ()=>{
    innerdrop.classList.toggle('inner-resp');
    MobNav.classList.toggle('inner-nav-resp');
})

Mobusecases.addEventListener('click', ()=>{
    usecasedrop.classList.toggle('usecase-resp');
})

feature.addEventListener('click', ()=>{
    innerFeature.classList.toggle('feature-resp');
    MobNav.classList.toggle('inner-nav-resp2');
})