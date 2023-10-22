document.addEventListener('DOMContentLoaded', function () {

    let pseudoSekectInit = function () {
        // Если элемент в фокусе, активируем псевдо селект
        if (document.querySelector('.select-decore')) {
            let selectDecoreBoxs = document.querySelectorAll('.select-decore__box');
    
            selectDecoreBoxs.forEach(function(element) {
                element.addEventListener('focus', function() {
                    this.classList.add('active');
                    this.parentNode.querySelector('.select-decore__wrapper').classList.add('active');
                    this.parentNode.querySelector('.select-decore__btn').classList.add('active');
                    this.parentNode.classList.add('active');
                });
            });
        };
    
        // По клику на кнопку псевдоселекта делаем тоггл псевдоселекта
        if (document.querySelector('.select-decore__btn')) {
            let selectDecoreBtn = document.querySelectorAll('.select-decore__btn');
    
            selectDecoreBtn.forEach(function(element) {
                element.addEventListener('click', function() {
                    this.classList.toggle('active');
                    this.parentNode.querySelector('.select-decore__wrapper').classList.toggle('active');
                    this.parentNode.querySelector('.select-decore__box').classList.toggle('active');
                    this.parentNode.classList.toggle('active');
                });
            });
        };
    };

    pseudoSekectInit();

});

