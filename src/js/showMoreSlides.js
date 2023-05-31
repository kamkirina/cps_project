export function ShowSlidesToggle(showBtn, hideBtn, event) {
  event.preventDefault()
  showBtn.classList.toggle('slider__show--disable')
  hideBtn.classList.toggle('slider__hide--active')
}

export function showAll(items) {
  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove('hidden')
  }
}
