// ==== BUTTON MOBILE HEADER ANIMATION ==== //
let mobileBtnAnimation = document.querySelector(".btn-header-mobile");
let mobileBtnAnimationActive = document.querySelector(".btn-header-mobile");
mobileBtnAnimationActive.addEventListener("click", ()=>{
    mobileBtnAnimation.classList.toggle("active");
});

// ==== OPEN MOBILE NAVBAR ACTIVE ==== //
let sidebar = document.querySelector(".navbar");
let mobileBtnOpenMenu = document.querySelector(".btn-header-mobile");
mobileBtnOpenMenu.addEventListener("click", ()=>{
    sidebar.classList.toggle("open-navbar");
});

// ==== OFFCANVAS-MENU ACTIVE ==== //
let offCanvasMenu = document.querySelector("body");
let mobileBtnOffCanvasMenu= document.querySelector(".btn-header-mobile");
mobileBtnOffCanvasMenu.addEventListener("click", ()=>{
    offCanvasMenu.classList.toggle("offcanvas-menu");
});

// ==== NAVBAR DROPDOWN ACTIVE ==== //
let dropdownActive = document.querySelector(".dropdown");
let dropdownColapse = document.querySelector(".has-colapse");
dropdownColapse.addEventListener("click", ()=>{
    dropdownActive.classList.toggle("dropdown-colapse");
});

// ==== NAVBAR ARROW FLIP ANIMATION ==== //
let arrow = document.querySelector(".arrow");
let arrowFlip = document.querySelector(".has-colapse");
arrowFlip.addEventListener("click", ()=>{
    arrow.classList.toggle("arrow-flip");
});

// ==== SEARCH DROPDOWN ACTIVE ==== //
let search = document.querySelector(".dropdown-search");
let showSearch = document.querySelector(".search");
showSearch.addEventListener("click", ()=>{
    search.classList.toggle("dropdown-search-colapse");
});

// ==== OFFCANVAS-MENU BELOW 724px ONLY ===== //
$(window).resize(function () {
    var $this = $(this),
        w = $this.width();

    if (w > 724) {
        if ($('body').hasClass('offcanvas-menu')) {
            $('body').removeClass('offcanvas-menu');
        }
    }
})

// ==== MENU & BODY DISABLED ==== //
$(document).mouseup(function (e) {
    var container = $("header");

    if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('.btn-header-mobile').hasClass('active')) {
            $('.btn-header-mobile').removeClass('active');
        }
    }

    if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('.navbar').hasClass('open-navbar')) {
            $('.navbar').removeClass('open-navbar');
        }
    }
    
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('offcanvas-menu')) {
            $('body').removeClass('offcanvas-menu');
        }
    }
});

// ==== SWIPER SLIDE ==== //
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

// ==== DARKMODE ==== //
var clearcolor = '#ffffff'
var darkcolor = '#141414'

if (localStorage.getItem('idmode') == null) {
  document.head.innerHTML = document.head.innerHTML + `<meta name="theme-color" content="${clearcolor}">`
}

const nightMode = document.querySelector('#darkmod')
nightMode.addEventListener('click', () => {
  document.documentElement.classList.toggle('darkmode')

  if (document.documentElement.classList.contains('darkmode')) {
    localStorage.setItem('idmode', true)
    document.head.innerHTML = document.head.innerHTML + `<meta name="theme-color" content="${darkcolor}">`
    document.querySelector("[name='theme-color']").remove()
    return
  }

  localStorage.removeItem('idmode')
  document.querySelector("[name='theme-color']").remove()
  document.head.innerHTML = document.head.innerHTML + `<meta name="theme-color" content="${clearcolor}">`
})

const nightModeStorage = localStorage.getItem('idmode')
if (nightModeStorage) {
  document.documentElement.classList.add('darkmode')
  document.head.innerHTML = document.head.innerHTML + `<meta name="theme-color" content="${darkcolor}">`
  nightMode.checked = true
}

// ==== SCROLLUP ==== //
$(document).ready(function(){
    $(window).scroll(function(){
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollSmooth", "auto");
    });

});

// ==== OPEN MODALS ==== //
$(function () {
    var effecttime = 200;

    $("[data-modalopen]").click(function (e) {
        var clicked = $(this);
        var modal = clicked.data("modalopen");
        $(".web_modal").fadeIn(effecttime).css("display", "flex");
        $(modal).fadeIn(effecttime);
    });

    $("[data-modalclose]").click(function (e) {
        if (e.target === this) {
            $(this).fadeOut(effecttime);
            $(this).children().fadeOut(effecttime);
        }
    });

});

// ==== SINGLE PRODUCT SCRIP ==== //
var elements = document.getElementsByClassName("change-img");
for (var i = 0; i < elements.length; i++) {
    elements[i].onclick = function () {
        var el = elements[0];
        while (el) {               
            el = el.nextSibling;
            if ($('.change-img').hasClass('gallery-thumb-image-active')) {
                $('.change-img').removeClass('gallery-thumb-image-active');
            }
        }
        this.classList.add("gallery-thumb-image-active");
    };
}

const activeImage = document.querySelector(".single-product-image .active");
const productImages = document.querySelectorAll(".gallery-thumb-image img");
const navItem = document.querySelector('a.toggle-nav');

function changeImage(e) {
    activeImage.src = e.target.src;
}

function toggleNavigation() {
    this.nextElementSibling.classList.toggle('active');
}

productImages.forEach(image => image.addEventListener("click", changeImage));