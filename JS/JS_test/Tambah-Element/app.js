const tambahElement = e => {
  const root = document.getElementById('root');
  const div = document.createElement('div')
  div.classList.add('container')
  root.appendChild(div)
}

const rppt = document.getElementById('root')
  const data = []

  button.addEventListener('click', e => {
    data.push("<div class='container'></div>")
    insertElement()
  })
  
  const insertElement = () => {
    root.innerHTML = data.map(item => item).join('')
  }