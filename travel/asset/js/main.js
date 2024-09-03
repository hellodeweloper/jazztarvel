window.onscroll = function () {
    myFunction()
};

var header = document.querySelector('.myHeader');
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

myFunction()


var swiper1 = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    slidesPerGroup: 1,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

var swiper2 = new Swiper(".popularSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    slidesPerGroup: 1,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".slidePrev-btn",
        prevEl: ".slideNext-btn",
      },
    // Responsive breakpoints
      breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
            grid: {
                rows: 1,
            },
        },
        540: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        900: {
            slidesPerView: 2,
            spaceBetweenSlides: 30,
        },
        // when window width is <= 991px
        991: {
            slidesPerView: 2,
            spaceBetweenSlides: 30,
        },
        1300: {
            slidesPerView: 2,
            spaceBetweenSlides: 30,
        },
        1500: {
            slidesPerView: 4,
            spaceBetweenSlides: 30,
        }
    }
});

const topTourmenu = document.querySelectorAll('.topTourmenu');
topTourmenu.forEach(topTourmen => {
    topTourmen.addEventListener('click', () => {
        document.querySelector('.actives').classList.remove('actives');
        topTourmen.classList.add('actives');
    })
})