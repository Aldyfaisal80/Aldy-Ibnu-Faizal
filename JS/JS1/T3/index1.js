const dataMahasiswa = []
let counter;

const getDataMahasiswa = () => {
    const Mahasiswa = {}
    do {
        Mahasiswa.username = prompt("Masukkan Username anda : ")
        Mahasiswa.nim = prompt("Masukkan Nim Anda :")
        Mahasiswa.email = prompt("Email Anda :")
        Mahasiswa.alamat = prompt("Alamat Anda :")
    }while (Mahasiswa.username === null || Mahasiswa.username === "" || 
        Mahasiswa.nim === null || Mahasiswa.nim === "" || 
        Mahasiswa.email === null || Mahasiswa.email === "" || 
        Mahasiswa.alamat === null || Mahasiswa.alamat === "")

    return Mahasiswa;
}
do {
    dataMahasiswa.push(getDataMahasiswa())
    counter = (confirm ("Ulangi Isi Data Lagi"))
}while (counter)

const strDataMahasiswa = JSON.stringify(dataMahasiswa)
localStorage.setItem(`Data Mahasiswa`, strDataMahasiswa)

console.log(dataMahasiswa)