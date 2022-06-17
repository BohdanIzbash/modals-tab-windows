//ищим все заголовки табов по дата атрибуту
const tabHeaders =document.querySelectorAll('[data-tab]');

//Нашли все контент боксы
const contentBoxes = document.querySelectorAll('[data-tab-content]')

tabHeaders.forEach(function(item){
    item.addEventListener('click', function(){
     
        

        //скрываем все контент боксы
        contentBoxes.forEach(function(item){
            item.classList.add('hidden');
        });
       
        //выбрать нужный контент бокс и показать его
        const contentBox = document.querySelector('#' + this.dataset.tab);
        contentBox.classList.remove('hidden');

    })
})