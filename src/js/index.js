import '../scss/style.scss'
import Swiper, { Navigation, Pagination } from 'swiper'

const main = document.querySelector('main')
/* Swiper
 **************************************************************/
var swiper = Swiper
var init = false

/* Which media query
 **************************************************************/
function swiperMode() {
  let mobile = window.matchMedia('(min-width: 0px) and (max-width: 767px)')

  // Enable (for mobile)
  if (mobile.matches) {
    if (!init) {
      init = true
      swiper = new Swiper('.swiper', {
        modules: [Navigation, Pagination],
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        centeredSlides: false,
        slidesPerView: 1.2,
        spaceBetween: 23,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          paginationClicable: true
        }
      })
    }
  }

  // Disable
  else {
    swiper.distroy
    init = false
  }
}

/*On Load
 **************************************************************/
window.addEventListener('load', function () {
  swiperMode()
  showSlides()
})

/*On Resize
 **************************************************************/
window.addEventListener('resize', function () {
  swiperMode()
  showSlides()
})

/* //////////////// Burger menu //////////////////////////////*/

const burgerBtn = document.querySelector('.header__burger-btn')
const burgerClose = document.querySelector('.burger__btn')
const burgerContainer = document.querySelector('.header')

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.add('open')
  document.querySelector('.header__logo').classList.add('open')
  document.querySelector('.burger__container').classList.add('open')
  document.querySelector('.header__contacts').classList.add('open')
  document.querySelector('.header__servise').classList.add('open')
  main.classList.add('modal-blur')
})

burgerClose.addEventListener('click', () => {
  burgerBtn.classList.remove('open')
  document.querySelector('.header__logo').classList.remove('open')
  document.querySelector('.burger__container').classList.remove('open')
  document.querySelector('.header__contacts').classList.remove('open')
  document.querySelector('.header__servise').classList.remove('open')
  main.classList.remove('modal-blur')
})

document.addEventListener('click', (e) => {
  const withinBoundaries = e.composedPath().includes(burgerContainer)

  if (!withinBoundaries) {
    burgerBtn.classList.remove('open')
    document.querySelector('.header__logo').classList.remove('open')
    document.querySelector('.burger__container').classList.remove('open')
    document.querySelector('.header__contacts').classList.remove('open')
    document.querySelector('.header__servise').classList.remove('open')
    main.classList.remove('modal-blur')
  }
})

///////////////number of slides per list//////////////////////

let numberBrands
let numberRepair
const itemsBrand = document.querySelectorAll('.slider__item--brand')
const itemsRpr = document.querySelectorAll('.slider__item--repair')

function showSlides() {
  if (window.innerWidth >= 768) {
    numberBrands = 6
    numberRepair = 3

    for (let i = numberBrands; i < itemsBrand.length; i++) {
      itemsBrand[i].classList.add('hidden')
    }
    for (let i = numberRepair; i < itemsRpr.length; i++) {
      itemsRpr[i].classList.add('hidden')
    }
  }
  if (window.innerWidth >= 1024) {
    numberBrands = 8
    numberRepair = 4
    itemsBrand.forEach((e) => {
      e.classList.remove('hidden')
    })
    for (let i = numberBrands; i < itemsBrand.length; i++) {
      itemsBrand[i].classList.add('hidden')
    }

    itemsRpr.forEach((e) => {
      e.classList.remove('hidden')
    })
    for (let i = numberRepair; i < itemsRpr.length; i++) {
      itemsRpr[i].classList.add('hidden')
    }
  }
}

////////////show more and hide for brands/////////////////////

const showMoreBtn = document.querySelector('.brands__show')

showMoreBtn.addEventListener('click', (event) => {
  event.preventDefault()
  showMoreBtn.classList.add('slider__show--disable')
  document.querySelector('.brands__hide').classList.add('slider__hide--active')
  document
    .querySelector('.slider__wrapper')
    .classList.add('slider__wrapper--show')
  for (let i = 0; i < itemsBrand.length; i++) {
    itemsBrand[i].classList.remove('hidden')
  }
})

const hideBrandBtn = document.querySelector('.brands__hide')

hideBrandBtn.addEventListener('click', (event) => {
  event.preventDefault()
  showMoreBtn.classList.remove('slider__show--disable')
  document
    .querySelector('.brands__hide')
    .classList.remove('slider__hide--active')
  document
    .querySelector('.slider__wrapper')
    .classList.remove('slider__wrapper--show')
  showSlides()
})

////////////show more and hide for repair/////////////////////

const showMoreBtnRpr = document.querySelector('.repair__show')
const hideRprBtn = document.querySelector('.repair__hide')

showMoreBtnRpr.addEventListener('click', (event) => {
  event.preventDefault()
  showMoreBtnRpr.classList.add('slider__show--disable')
  hideRprBtn.classList.add('slider__hide--active')

  for (let i = 0; i < itemsRpr.length; i++) {
    itemsRpr[i].classList.remove('hidden')
  }
})

hideRprBtn.addEventListener('click', (event) => {
  event.preventDefault()
  showMoreBtnRpr.classList.remove('slider__show--disable')
  document
    .querySelector('.repair__hide')
    .classList.remove('slider__hide--active')

  showSlides()
})

////////////////////////////////////Modal call ////////////////////////

const createModal = document.createElement('div')

createModal.innerHTML = `<div class="call modal-overlay modal-overlay-hidden">
  <button class="call__close modal__delete" type="button"></button>
  <h3 class="call__title modal__title active">Заказать звонок</h3>
  <input class="call__tel modal__tel" type="tel" placeholder="Телефон">
  <div class="call__text modal__text">Нажимая “отправить”, вы даете согласие на <a class="modal__text--pink" href="#">обработку персональных данных</a> и соглашаетесь с нашей <a class="modal__text--pink" href="#">политикой конфиденциальности</a></div>
  <button class="call__confirm modal__confirm pink-btn" type="submit">Отправить</button></div>`
document.body.prepend(createModal)

function modalCall() {
  document.querySelector('.call').classList.remove('modal-overlay-hidden')
  burgerBtn.classList.remove('open')
  document.querySelector('.header__logo').classList.remove('open')
  document.querySelector('.burger__container').classList.remove('open')
  document.querySelector('.header__contacts').classList.remove('open')
  document.querySelector('.header__servise').classList.remove('open')
  document.querySelector('.wrapper').classList.add('modal-blur')
}

const modalCallBtn = document.querySelector('.header__call')

modalCallBtn.addEventListener('click', modalCall)

document.querySelector('.call__close').addEventListener('click', () => {
  document.querySelector('.call').classList.add('modal-overlay-hidden')
  document.querySelector('.wrapper').classList.remove('modal-blur')
})

document.querySelector('.call__confirm').addEventListener('click', () => {
  document.querySelector('.call').classList.add('modal-overlay-hidden')
  document.querySelector('.wrapper').classList.remove('modal-blur')
})

////////////////////// modal feedback///////////////////////////////
const createModalFbk = document.createElement('div')

createModalFbk.innerHTML = `<div class="feedback modal-overlay modal-overlay-hidden">
  <button class="feedback__close modal__delete" type="button"></button>
  <h3 class="feedback__title modal__title active">Обратная связь</h3>
  <input class="feedback__name modal__tel" type="name" placeholder="Имя">
  <input class="feedback__tel modal__tel" type="tel" placeholder="Телефон">
  <input class="feedback__email modal__tel" type="email" placeholder="Телефон">
  <textarea class="feedback__textarea modal__textarea" placeholder="Сообщение"></textarea>
  <div class="feedback__text modal__text">Нажимая “отправить”, вы даете согласие на <a class="modal__text--pink" href="#">обработку персональных данных</a> и соглашаетесь с нашей <a class="modal__text--pink" href="#">политикой конфиденциальности</a></div>
  <button class="feedback__confirm modal__confirm pink-btn" type="submit">Отправить</button></div>`
document.body.prepend(createModalFbk)

function modalFeedback() {
  document.querySelector('.feedback').classList.remove('modal-overlay-hidden')
  burgerBtn.classList.remove('open')
  document.querySelector('.header__logo').classList.remove('open')
  document.querySelector('.burger__container').classList.remove('open')
  document.querySelector('.header__contacts').classList.remove('open')
  document.querySelector('.header__servise').classList.remove('open')
  document.querySelector('.wrapper').classList.add('modal-blur')
}

const modalFeedbackBtn = document.querySelector('.header__message')

modalFeedbackBtn.addEventListener('click', modalFeedback)

///////////////////////// close modal feedback ////////////////////
document.querySelector('.feedback__close').addEventListener('click', () => {
  document.querySelector('.feedback').classList.add('modal-overlay-hidden')
  document.querySelector('.wrapper').classList.remove('modal-blur')
})

document.querySelector('.feedback__confirm').addEventListener('click', () => {
  document.querySelector('.modal-overlay').classList.add('modal-overlay-hidden')
  document.querySelector('.wrapper').classList.remove('modal-blur')
})
