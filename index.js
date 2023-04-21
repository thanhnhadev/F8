const buyBtns= document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')
var header = document.getElementById('header')
var mobileMenu = document.getElementById('mobile-menu')
var headerHeight= header.clientHeight;
mobileMenu.onclick=function(){
   var isClose = header.clientHeight===headerHeight;
    if(isClose){
        header.style.height='auto';
    }
    else{
        header.style.height='46px';
    }
}
// hiển thị modal mua vé (thêm  class open vào modal)
function showBuyTickets(){
    modal.classList.add('open')
}
// hàm ẩn modal mua vé(gỡ bỏ class open của modal)
function hideBuyTicket(){
    modal.classList.remove('open')
}
// lặp qua từng thẻ button và nghe hành vi click
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click',showBuyTickets)
}
// nghe hành vi click vào button close 
modalClose.addEventListener('click',hideBuyTicket)
modal.addEventListener('click',hideBuyTicket)
modalContainer.addEventListener('click',function(event){
    event.stopPropagation()
})