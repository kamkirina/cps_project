import '../scss/style.scss'
import Swiper, { Navigation, Pagination } from 'swiper'
import { showSlides } from './showSlides'
import { ShowSlidesToggle, showAll } from './showMoreSlides'
import { burgerCloseModal, burgerOpen } from './burger'

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

const itemsBrand = document.querySelectorAll('.slider__item--brand')
const itemsRpr = document.querySelectorAll('.slider__item--repair')

window.addEventListener('load', function () {
  swiperMode()
  if (window.innerWidth >= 768) {
    showSlides(6, itemsBrand)
    showSlides(3, itemsRpr)
  }
  if (window.innerWidth >= 1024) {
    showSlides(8, itemsBrand)
    showSlides(4, itemsRpr)
  }
})

/*On Resize
 **************************************************************/
window.addEventListener('resize', function () {
  swiperMode()
  if (window.innerWidth >= 768) {
    showSlides(6, itemsBrand)
    showSlides(3, itemsRpr)
  }
  if (window.innerWidth >= 1024) {
    showSlides(8, itemsBrand)
    showSlides(4, itemsRpr)
  }
})

/* //////////////// Burger menu //////////////////////////////*/

const burgerBtn = document.querySelector('.header__burger-btn')
const burgerClose = document.querySelector('.burger__btn')
const burgerContainer = document.querySelector('.header')

burgerBtn.addEventListener('click', () => {
  burgerOpen(burgerBtn)
})

burgerClose.addEventListener('click', () => {
  burgerCloseModal(burgerBtn)
})

/////////////////////////////////close modal //////////////////////////////

document.addEventListener('click', (e) => {
  const withinBoundaries = e.composedPath().includes(burgerContainer)

  if (!withinBoundaries) {
    burgerCloseModal(burgerBtn)
    callClose()
    feedbackClose()
  }
})

////////////show more and hide for brands/////////////////////

const showMoreBtn = document.querySelector('.brands__show')
const hideBtn = document.querySelector('.brands__hide')
const sliderWrapper = document.querySelector('.slider__wrapper')

showMoreBtn.addEventListener('click', (event) => {
  sliderWrapper.classList.add('slider__wrapper--show')
  ShowSlidesToggle(showMoreBtn, hideBtn, event)
  showAll(itemsBrand)
})

hideBtn.addEventListener('click', (event) => {
  ShowSlidesToggle(showMoreBtn, hideBtn, event)
  sliderWrapper.classList.remove('slider__wrapper--show')

  if (window.innerWidth >= 768) {
    showSlides(6, itemsBrand)
  }
  if (window.innerWidth >= 1024) {
    showSlides(8, itemsBrand)
  }
})

////////////show more and hide for repair/////////////////////

const showMoreBtnRpr = document.querySelector('.repair__show')
const hideRprBtn = document.querySelector('.repair__hide')

showMoreBtnRpr.addEventListener('click', (event) => {
  ShowSlidesToggle(showMoreBtnRpr, hideRprBtn, event)
  showAll(itemsRpr)
})

hideRprBtn.addEventListener('click', (event) => {
  ShowSlidesToggle(showMoreBtnRpr, hideRprBtn, event)

  if (window.innerWidth >= 768) {
    showSlides(3, itemsRpr)
  }
  if (window.innerWidth >= 1024) {
    showSlides(4, itemsRpr)
  }
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

const modalOverlay = document.querySelector('.modal-overlay')

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
  callClose()
})

document.querySelector('.call__confirm').addEventListener('click', () => {
  callClose()
})

function callClose() {
  document.querySelector('.call').classList.add('modal-overlay-hidden')
  document.querySelector('.wrapper').classList.remove('modal-blur')
}

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
function feedbackClose() {
  document.querySelector('.feedback').classList.add('modal-overlay-hidden')
  document.querySelector('.wrapper').classList.remove('modal-blur')
}

document.querySelector('.feedback__close').addEventListener('click', () => {
  feedbackClose()
})

document.querySelector('.feedback__confirm').addEventListener('click', () => {
  feedbackClose()
})
