const buyBtns= document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')
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