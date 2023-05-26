import '../scss/style.scss'
import Swiper, { Navigation, Pagination } from 'swiper'

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
        slidesPerView: 1.3,
        spaceBetween: 16,

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

/* On Load
 **************************************************************/
window.addEventListener('load', function () {
  swiperMode()
})

/* On Resize
 **************************************************************/
window.addEventListener('resize', function () {
  swiperMode()
})

const burgerBtn = document.querySelector('.header__burger-btn')

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('open')
  document.querySelector('.header__logo').classList.toggle('open')
  document.querySelector('.burger__container').classList.toggle('open')
  document.querySelector('.header__contacts').classList.toggle('open')
  document.querySelector('.header__servise').classList.toggle('open')
})
