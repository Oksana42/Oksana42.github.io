new Swiper(".brend-slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

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

