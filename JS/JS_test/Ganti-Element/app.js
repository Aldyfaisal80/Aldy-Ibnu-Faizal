const image = document.getElementsByTagName('img')[0]

const url = image.getAttribute('src')

const button = document.getElementsByTagName('button')[0]
const icon = document.getElementsByClassName('fa-solid')[0]

button.addEventListener('click', e => {
    const url = image.getAttribute('src')
    if (url === './src/image/off.png') {
        image.setAttribute('src', './src/image/on.png')
    } else {
        image.setAttribute('src', './src/image/off.png')
    }
    icon.classList.toggle('fa-toggle-on')
    icon.classList.toggle('fa-toggle-off')
})