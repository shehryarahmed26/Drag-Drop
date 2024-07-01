let element = document.getElementById('element')
let boxes = document.querySelectorAll('.box')
element.addEventListener('dragstart', (e) => {
    setTimeout(() => {
        e.target.className = 'hide'
    } )
})
element.addEventListener('dragend', (e) => {
    e.target.className = 'element'
})
boxes.forEach((box) => {
    box.addEventListener('dragover', (e) => {
        e.preventDefault();
    })
    box.addEventListener('drop', (e) => {
        e.target.append(element)
        console.log(e);
    })
})