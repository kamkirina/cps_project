const createModal = document.createElement('div')
const main = document.querySelector('main')

createModal.innerHTML = `<div class="modal-overlay">
  <button class="modal__delete" type="button"></button>
  <h3 class="modal__title active">Заказать звонок</h3>
  <input class="modal__tel" type="tel" placeholder="Телефон">
  <div class="modal__text">Нажимая “отправить”, вы даете согласие на <a class="modal__text--pink" href="#">обработку персональных данных</a> и соглашаетесь с нашей <a class="modal__text--pink" href="#">политикой конфиденциальности</a></div>
  <button class="modal__confirm pink-btn" type="submit">Отправить</button></div>`

export function modalCall() {
  document.body.apend(createModal)
  burgerBtn.classList.remove('open')
  document.querySelector('.header__logo').classList.remove('open')
  document.querySelector('.burger__container').classList.remove('open')
  document.querySelector('.header__contacts').classList.remove('open')
  document.querySelector('.header__servise').classList.remove('open')
  main.classList.add('modal-blur')
}

function modalCallClose() {
  document.querySelector('.modal-overlay').classList.add('modal-overlay-hidden')
  main.classList.remove('modal-blur')
}
