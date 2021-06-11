// Скрипт slick (слайдер)
$(".slider-block").slick({
    dots: true,
    autoplay: false,
    infinite: false,
    arrow: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<a class="your-class-btn-back">Back</a>',
    nextArrow: '<a class="your-class-btn-forward">Forward</a>',
    responsive: [{
        breakpoint: 576,
        settings: {
            slidesToShow: 3,
            vertical: true,
            verticalSwiping: true,
            slidesToScroll: 3,
            arrows: false,
        },
        breakpoint: 375,
        settings: {
            slidesToShow: 1,
            vertical: true,
            verticalSwiping: true,
            slidesToScroll: 1,
            arrows: false,
        },
    }, ],
});

//Плавный скролл
// document.querySelectorAll('a[href^="#"').forEach((link) => {
//     link.addEventListener("click", function(e) {
//         e.preventDefault();

//         let href = this.getAttribute("href").substring(1);
//         const scrollTarget = document.getElementById(href);
//         const topOffset = 0;
//         const elementPosition = scrollTarget.getBoundingClientRect().top;
//         const offsetPosition = elementPosition - topOffset;

//         window.scrollBy({
//             top: offsetPosition,
//             behavior: "smooth",
//         });
//     });
// });

// скрипт для модалки
var modal = document.getElementById("my_modal");
var btn = document.getElementsByClassName("Get_consultation");
var close = document.getElementsByClassName("close_modal_window")[0];
var nav = document.getElementsByTagName("nav")[0];
var thanks = document.getElementsByClassName("thanks")[0];
var burger = document.getElementById("burger");
var body = document.getElementsByTagName("nav")[0];

/*
 в цикле прокручиваем те элементы которыми мы открываем модал окно
и обработчик события который открывет окно
*/
for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function() {
        openModalWindow();
    });
}
// это обработчик события, который в нутри этой функции выполнят ту функцию
//которая закрывает окно модальное
burger.addEventListener("click", function() {
        closeModalWindow();
    }),
    close.addEventListener("click", function() {
        closeModalWindow();
    });

//это функция, которая открывает окно
function openModalWindow() {
    modal.classList.toggle("open__modal");
    nav.classList.add("navtop");
    thanks.classList.add("bgnone");
    // body.classList.add("fixed-page")
}

//это функция, которая закрывает окно
function closeModalWindow() {
    // burger.classList.remove("open__modal");
    modal.classList.remove("open__modal");
    modalThanks.classList.remove("open__thanks");
    nav.classList.remove("navtop");
    thanks.classList.remove("bgnone");
}

// скрипт для модалки thanks
var modalThanks = document.getElementById("modal_thanks");
var btnThanks = document.getElementsByClassName("Submit");
var closeThanks = document.getElementsByClassName("close_thanks_window")[0];

/*
 в цикле прокручиваем те элементы которыми мы открываем модал окно
и обработчик события который открывет окно
*/
for (var i = 0; i < btnThanks.length; i++) {
    btnThanks[i].addEventListener("click", function() {
        openModalThanks();
    });
}
// это обработчик события, который в нутри этой функции выполнят ту функцию
//которая закрывает окно модальное
closeThanks.addEventListener("click", function() {
    closeModalThanks();
});

//это функция, которая открывает окно
function openModalThanks() {
    modalThanks.classList.toggle("open__thanks");
}

//это функция, которая закрывает окно
function closeModalThanks() {
    modalThanks.classList.toggle("open__thanks");
    modal.classList.remove("open__modal");
    thanks.classList.remove("bgnone");
}

// закрываем ОБЕ МОДАЛКИ если клик был вне модального окна
window.onclick = function(event) {
    if (event.target == modal || event.target == modalThanks) {
        modal.classList.remove("open__modal");
        modalThanks.classList.remove("open__thanks");
    }
};

// работа с  бургером
$(document).ready(function() {
    $(".menu-burger__header").click(function() {
        $(".header__nav").addClass("open-menu");
        $("body").addClass("fixed-page");
        $(document).ready(function() {
            if ($(window).width() <= "1199") {
                $("#about-us>.container").addClass("wrapper");
                $("#services>.container").addClass("wrapper");
                $("#testimonials>.container").addClass("wrapper");
                $("#questions>.container").addClass("wrapper");
                $("#footer>.container").addClass("wrapper");
                //удаляем классы
                $("#about-us").removeClass("open-section");
                $("#services").removeClass("open-section");
                $("#footer").removeClass("open-section");
                $("#testimonials").removeClass("open-section");
            }
        });
    });

    $(".close__burger").click(function() {
        $(".header__nav").removeClass("open-menu");
        $("body").removeClass("fixed-page");
        $("#about-us>.container").removeClass("wrapper");
        $("#services>.container").removeClass("wrapper");
        $("#testimonials>.container").removeClass("wrapper");
        $("#questions>.container").removeClass("wrapper");
        $("#footer>.container").removeClass("wrapper");
    });

    $(".menu-burger__modal").click(function() {
        $(".header__nav").addClass("open-menu");
        $(".modal").removeClass("open-modal");
        // $("body").addClass("pageOfModal");
        $("body").addClass("fixed-page");

        $(document).ready(function() {
            if ($(window).width() <= "1199") {
                $("#about-us>.container").addClass("wrapper");
                $("#services>.container").addClass("wrapper");
                $("#testimonials>.container").addClass("wrapper");
                $("#questions>.container").addClass("wrapper");
                $("#footer>.container").addClass("wrapper");
                //удаляем классы
                $("#about-us").removeClass("open-section");
                $("#services").removeClass("open-section");
                $("#footer").removeClass("open-section");
                $("#testimonials").removeClass("open-section");
            }
        });
    });
    $(".close__burger").click(function() {
        $(".header__nav").removeClass("open-menu");
        $("header__menu").removeClass("open-menu");
        $("body").removeClass("pageOfModal");
    });
});

$(document).ready(function() {
    if ($(window).width() <= "1199") {
        $("#about").click(function() {
            $("#about-us").addClass("open-section");
            $(".header__nav").removeClass("open-menu");
            $("header__menu").removeClass("open-menu");
            $("body").removeClass("pageOfModal");
        });
        // jQuery(function($) {
        //     $(document).mouseup(function(e) { // событие клика по веб-документу
        //         var div = $("#about"); // тут указываем ID элемента
        //         if (!div.is(e.target) // если клик был не по нашему блоку
        //             &&
        //             div.has(e.target).length === 0) { // и не по его дочерним элементам
        //             $("#about-us").removeClass("open-section"); //удаляем класс.

        //         }
        //     });
        // });

        $("#aour").click(function() {
            $("#services").addClass("open-section");
            $(".header__nav").removeClass("open-menu");
            $("header__menu").removeClass("open-menu");
            $("body").removeClass("pageOfModal");
        });
        // jQuery(function($) {
        //     $(document).mouseup(function(e) { // событие клика по веб-документу
        //         var div = $("#aour"); // тут указываем ID элемента
        //         if (!div.is(e.target) // если клик был не по нашему блоку
        //             &&
        //             div.has(e.target).length === 0) { // и не по его дочерним элементам
        //             $("#services").removeClass("open-section"); //удаляем класс.

        //         }
        //     });
        // });

        $("#acontact").click(function() {
            $("#footer").addClass("open-section");
            $(".header__nav").removeClass("open-menu");
            $("header__menu").removeClass("open-menu");
            $("body").removeClass("pageOfModal");
        });
        // jQuery(function($) {
        //     $(document).mouseup(function(e) { // событие клика по веб-документу
        //         var div = $("#acontact"); // тут указываем ID элемента
        //         if (!div.is(e.target) // если клик был не по нашему блоку
        //             &&
        //             div.has(e.target).length === 0) { // и не по его дочерним элементам
        //             $("#footer").removeClass("open-section"); //удаляем класс.

        //         }
        //     });
        // });

        $("#atestimonials").click(function() {
            $("#testimonials").addClass("open-section");
            $(".header__nav").removeClass("open-menu");
            $("header__menu").removeClass("open-menu");
            $("body").removeClass("pageOfModal");
        });
        // jQuery(function($) {
        //     $(document).mouseup(function(e) { // событие клика по веб-документу
        //         var div = $("#atestimonials"); // тут указываем ID элемента
        //         if (!div.is(e.target) // если клик был не по нашему блоку
        //             &&
        //             div.has(e.target).length === 0) { // и не по его дочерним элементам
        //             $("#testimonials").removeClass("open-section"); //удаляем класс.

        //         }
        //     });
        // });
    }
});