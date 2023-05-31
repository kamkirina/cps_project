export function showSlides(number, numberSlides) {
  if (window.innerWidth >= 768) {
    for (let i = number; i < numberSlides.length; i++) {
      numberSlides[i].classList.add('hidden')
    }
  }
  if (window.innerWidth >= 1024) {
    numberSlides.forEach((e) => {
      e.classList.remove('hidden')
    })
    for (let i = number; i < numberSlides.length; i++) {
      numberSlides[i].classList.add('hidden')
    }
  }
}
