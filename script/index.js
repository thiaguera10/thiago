// const e = require("express")

const card = document.querySelectorAll('.desaparecer')


const myobserver = new IntersectionObserver (entries => {
entries.forEach(entry => {
    if(entry.isIntersecting) {
        entry.target.classList.add('aparecer')
    } else
    entry.target.classList.remove('aparecer')
})


})

card.forEach( Element => myobserver.observe(Element));


