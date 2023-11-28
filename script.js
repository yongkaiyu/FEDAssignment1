const boxes = document.querySelectorAll('.story-box')
window.addEventListener('scroll', checkBoxes)
checkboxes()
function checkBoxes(){
    const reachBottom = window.innerHeight / 5 * 4
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < reachBottom){
            box.classList.add('show')
        } else{
            box.classList.remove('show')
        }
    })
}