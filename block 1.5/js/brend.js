var swiper = null;
function slider() {
    if (window.innerWidth <= 767) {
         swiper = new Swiper(".brend-slider", {
            slidesPerView: 'auto',
            slidesOffsetBefore: 10,
            slidesOffsetAfter: -200,
            spaceBetween: 17,
            pagination: {
                el: ".swiper-pagination",
                type: 'bullets',
                clickable: true,
                tabIndex: true
            },
            // breakpoints: {
            //     // when window width is >= 480px
            //     480: {
            //         slidesPerView: 'auto',
            //         spaceBetween: 30,
            //     },
            //     // when window width is >= 640px
            //     640: {
            //         slidesPerView: 'auto',
            //         spaceBetween: 40,
            //     }
            // }
        });
    }
}

slider();

var bullets = document.querySelector('.swiper-pagination-bullets').children;
document.addEventListener('DOMContentLoaded', function(){
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].setAttribute('id', i);
    }
})

var button = document.querySelector('.btn-icon');
var text = document.querySelector('.brend-text');
var icon = document.querySelector('.link-icon');
var attribute = button.getAttribute('data-button');
var item = document.querySelector('.swiper-wrapper').children;

button.addEventListener('click', function () {
    if (attribute) {
        text.textContent = 'Показать все';
        icon.style.transform = 'rotate(180deg)';
        attribute = false;

        for (let i = 6; i < item.length; i++) {
            item[i].classList.add('brand__item--visibility');
        }

    } else {

        for (let i = 6; i < item.length; i++) {
            item[i].classList.remove('brand__item--visibility');
        }

        text.textContent = 'Скрыть';
        icon.style.transform = 'rotate(0deg)';
        attribute = true;
    }
})

swiper.on('slideChange', function () {
    var activeBullet = document.querySelector('.swiper-pagination-bullet-active');
    var id = activeBullet.getAttribute('id');
    var translate = 0;
    if (window.innerWidth > 0) {
         translate = id * -270;
        swiper.setTranslate(translate, 0);
    }

 });


