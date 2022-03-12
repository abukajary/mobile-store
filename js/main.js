'use strict'

var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",

    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// g maps init
function initMap() {
    let mapPosition = {lat: 43.24198572367169,  lng: 76.91007353001741},  // Центр карты но не цель
        opt = {
            zoom: 16,
            center: mapPosition,
            disableDefaultUI: true,
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.SMALL
            }
        };
    let mainOffice = new google.maps.Map(document.getElementById('map'), opt);
    let mainOfficeMarker = new google.maps.Marker({
        position: mapPosition,
        map: mainOffice,
        title: "Байзакова, 263, 1 этаж, 5 офис",
        icon: 'https://abukajary.github.io/pool/img/mapIcon.png'
    });
    window.addEventListener('resize', ()=> {
        if (window.innerWidth < 858) {
            mainOfficeMarker.setPosition(new google.maps.LatLng(43.24198572367169, 76.91007353001741));
        } else {
            mainOfficeMarker.setPosition(new google.maps.LatLng(43.241966206414055, 76.9139198230771));
        }
    })
}


const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
let subMenu;
menuMain.addEventListener("click", (e) =>{
    if(!menu.classList.contains("active")){
        return;
    }
    if(e.target.closest(".menu-item-has-children")){
        const hasChildren = e.target.closest(".menu-item-has-children");
        showSubMenu(hasChildren);
    }
});
goBack.addEventListener("click",() =>{
    hideSubMenu();
})
menuTrigger.addEventListener("click",() =>{
    toggleMenu();
})
closeMenu.addEventListener("click",() =>{
    toggleMenu();
})
document.querySelector(".menu-overlay").addEventListener("click",() =>{
    toggleMenu();
})
function toggleMenu(){
    menu.classList.toggle("active");
    document.querySelector(".menu-overlay").classList.toggle("active");
}
function showSubMenu(hasChildren){
    subMenu = hasChildren.querySelector(".sub-menu");
    subMenu.classList.add("active");
    subMenu.style.animation = "slideLeft 0.5s ease forwards";
    const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
    menu.querySelector(".current-menu-title").innerHTML=menuTitle;
    menu.querySelector(".mobile-menu-head").classList.add("active");
}

function  hideSubMenu(){
    subMenu.style.animation = "slideRight 0.5s ease forwards";
    setTimeout(() =>{
        subMenu.classList.remove("active");
    },300);
    menu.querySelector(".current-menu-title").innerHTML="";
    menu.querySelector(".mobile-menu-head").classList.remove("active");
}



