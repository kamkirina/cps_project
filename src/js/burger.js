const main = document.querySelector('main')

export function burgerOpen(btn) {
  btn.classList.add('open')
  document.querySelector('.header__logo').classList.add('open')
  document.querySelector('.burger__container').classList.add('open')
  document.querySelector('.header__contacts').classList.add('open')
  document.querySelector('.header__servise').classList.add('open')
  main.classList.add('modal-blur')
}

export function burgerCloseModal(btn) {
  btn.classList.remove('open')
  document.querySelector('.header__logo').classList.remove('open')
  document.querySelector('.burger__container').classList.remove('open')
  document.querySelector('.header__contacts').classList.remove('open')
  document.querySelector('.header__servise').classList.remove('open')
  main.classList.remove('modal-blur')
}
