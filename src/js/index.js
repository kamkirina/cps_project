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
const burgerContainer = document.querySelector('.header')

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('open')
  document.querySelector('.header__logo').classList.toggle('open')
  document.querySelector('.burger__container').classList.toggle('open')
  document.querySelector('.header__contacts').classList.toggle('open')
  document.querySelector('.header__servise').classList.toggle('open')
  main.classList.toggle('modal-blur')
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
  if (window.innerWidth >= 1440) {
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
