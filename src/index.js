import './index.scss'
import './scss/header.scss'

const searchInp = document.querySelector('.search-input')

searchInp.addEventListener('click', function () {
    searchInp.style.width = '10rem'
})
searchInp.addEventListener('blur', function () {
    searchInp.style.width = '3rem'
})