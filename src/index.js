import './index.scss'
import './scss/header.scss'
import './scss/main.scss'
import './scss/footer.scss'



export function openSearch() {
  const searchInp = document.querySelector('.search-input')

  searchInp.addEventListener('click', function () {
      searchInp.style.width = '10rem'
      searchInp.style.height = '2.5rem'
  })
  searchInp.addEventListener('blur', function () {
      searchInp.style.width = '3rem'
      searchInp.style.height = '3rem'
  })
}

openSearch()


const slider = document.querySelector('.main-magazine');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
});
slider.addEventListener('mouseup', () => {
  isDown = false;
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; 
  slider.scrollLeft = scrollLeft - walk;
})
