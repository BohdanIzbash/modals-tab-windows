const headers = document.querySelectorAll('[data-name="accordeon-title"]');
//console.log(headers);
headers.forEach(function(item){
   
    item.addEventListener('click', function(){
        item.addEventListener('click', showContent);
        //console.log('Click!!!');
        //console.log(this.nextElementSibling);
        //this.nextElementSibling.classList.toggle('hidden');
    })
}) 

function showContent(){
    this.nextElementSibling.classList.toggle('hidden');
}