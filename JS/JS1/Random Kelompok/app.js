const getUsers = (count) => {
    const users = []
    for (let i = 0; i < count; i++) {
        users.push(prompt(`Masukkan Nama Ke ${i+1} :`))
    }
    return users;
}

const getKelompok = (count) => {
    const kelompok = ([])
    for (let i = 0; i < count; i++) {
        kelompok.push([])
    }
    return kelompok
}

const createGroup = (userCount,kelompokCount) => {
    let members = userCount.length / kelompokCount.length
    kelompokCount.map(item => {
        for (let i = 0; i < members; i++) {
            item.push(userCount.sort(() => Math.random() - 0.5).shift())
        }
    })
    return kelompokCount;
}

let userCount = parseInt(prompt("Jumlah aggota : "))
let kelompokCount = parseInt(prompt("Jumlah Kelompok : "))
const hasil = createGroup(getUsers(userCount), getKelompok (kelompokCount))
// console.log(hasil)

const container = document.getElementById("container")

container.innerHTML = hasil.map((item, index) => {
  return `<ul class="bungkus">
            <h1 class="judul">Kelompok ke ${index + 1} </h1>
            ${item.map(itemIn => {
              return `<li class="item">${itemIn}</li>`
            }).join('')}
          </ul>`
}).join('')