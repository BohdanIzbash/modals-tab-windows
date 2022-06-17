//делаем модалку для одной кнопки
//находим нужные елементы: кнопка модалки, модалка, закрытие модалки
const button = document.querySelector('[data-modal-button]');
const modal = document.querySelector('[data-modal]');
const buttonClose = document.querySelector('[data-modal-close]');

//прослушиваем клик на кнопке открытия и открываем модалку
button.addEventListener('click',function(){
     modal.classList.remove('hidden');
    });

    //прослушиваем клик на кнопке закрытия и закрываем модалку
buttonClose.addEventListener('click', function(){
    modal.classList.add('hidden');
});

//закрываем модалку по клику на фон
modal.addEventListener('click', function(){
    modal.classList.add('hidden');
});

//запрещаем передавать событие материнскому блоку
modal.querySelector('.modal-window').addEventListener('click', function(event){
    event.stopPropagation();
});