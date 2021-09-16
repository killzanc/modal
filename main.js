var openBtn = document.querySelector(".btn_open");
var modal = document.querySelector("#JsModal");
var closeBtn = document.querySelector(".btn_close");

openBtn.addEventListener('click', function(e) {
    modal.classList.remove('modal');
    modal.classList.add('modal-open');
})

closeBtn.addEventListener('click', function(e) {
    modal.classList.remove('modal-open');
    modal.classList.add('modal')
})