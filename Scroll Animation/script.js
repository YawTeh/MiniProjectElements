const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll',checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else { //Can remove this else statement to keep loaded content in viewport
            box.classList.remove('show')
        }
    })
}