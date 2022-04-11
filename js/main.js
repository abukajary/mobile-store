let home_cards = ['cd-1', 'cd-2', 'cd-3']
let home_cards_vis = null;

function toggleVisibility(divId) {
    if (home_cards_vis === divId) {
        home_cards_vis = null;
    } else {
        home_cards_vis = divId;
    }
    hideNonVisibleDivs();
}

function hideNonVisibleDivs() {
    let i, divId, div;
    for (i = 0; i < home_cards.length; i++) {
        divId = home_cards[i];
        div = document.getElementById(divId);
        if (home_cards_vis === divId) {
            div.classList.add('cd_active')
        } else {
            div.classList.remove('cd_active')
        }
    }
}


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,

    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});