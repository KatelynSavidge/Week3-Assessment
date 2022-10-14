let colorSelector = document.querySelector('#color')
let placeSelector = document.querySelector('#place')
let ritualSelector = document.querySelector('#ritual')

function favColor (event)  {
    alert('Blue')
}
function favPlace (event)  {
    alert('Oregon')
}
function favRitual (event)  {
    alert('nighttime skin care routine')
}

colorSelector.addEventListener('click', favColor)
placeSelector.addEventListener('click', favPlace)
ritualSelector.addEventListener('click', favRitual)