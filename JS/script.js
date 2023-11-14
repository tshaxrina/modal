let enter = document.querySelector('.close')
let modal = document.querySelector('.modal')
let hide = document.querySelector('.up img')
let more = document.querySelector('.more')

enter.onclick = () => {
    modal.style.display = "none"
}

hide.onclick = () => {
    if (hide.src = "free-icon-up-arrow-angle-54817.png") {
        hide.src = "free-icon-down-arrow-54785.png"
        more.style.display = "flex"
    }else{
        more.style.display = "none"
    }
}
