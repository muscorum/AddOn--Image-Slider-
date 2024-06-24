/* ======== IMAGE SLIDER ======== */
let next = document.querySelector('.next')
let previous = document.querySelector('.previous')

next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

previous.addEventListener('click', function () {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})
/* ======== IMAGE SLIDER END ======== */