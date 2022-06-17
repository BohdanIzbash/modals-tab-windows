

const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalClose = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]');

//кнопки - Открыть модалку
modalButtons.forEach(function(item){
    item.addEventListener('click',function(){
       const modalId = this.dataset.modalButton;
       const modal = document.querySelector('#' + modalId);
       modal.classList.remove('hidden');

       //Находим внутри открываемой модалки блок .modal-window 
        //и запрещаем ему передавать клики наверх
        modal.querySelector('.modal-window').addEventListener('click',function(event) {
            event.stopPropagation();
        });
    });
});

//кнопки -Закрыть модалку
modalClose.forEach(function(item){
    item.addEventListener('click',function(){
        const modal = this.closest('[data-modal]');
        modal.classList.add('hidden');
    });
});

//Закрытие модалок по фону
allModals.forEach(function(item){
    item.addEventListener('click',function(){
        this.classList.add('hidden');
    });
});

