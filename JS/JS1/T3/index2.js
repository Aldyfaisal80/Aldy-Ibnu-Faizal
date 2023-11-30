const dataMahasiswa = []
let counter;

const getDataMahasiswa = () => {
    const Mahasiswa = {}
    // todo = array sebagai properti dari object Mahasiswa
    const data = ['FullName', `NIM`, `Email`, `NoHP`]
    data.map(item => {
    do {
            Mahasiswa[item] = prompt(`Masukkan ${item}`)
        }while  (Mahasiswa[item] === null || Mahasiswa [item] === "")
    })
    return Mahasiswa;
}

// todo - Sistem ke local Storage
const storeDataMahasiwa = localStorage.getItem (`Data Mahasiswa`)
if (storeDataMahasiwa) {
    const objStoreDataMahasiswa = JSON.parse(storeDataMahasiwa)
    dataMahasiswa.push(...objStoreDataMahasiswa)
}

do {
    dataMahasiswa.push(getDataMahasiswa())
    counter = confirm("Lagi mas ?")
}while (counter)

const strDataMahasiswa = JSON.stringify(dataMahasiswa)
localStorage.setItem(`Data Mahasiswa`, strDataMahasiswa)

console.log(dataMahasiswa)