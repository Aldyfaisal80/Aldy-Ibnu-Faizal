const prompt = require('prompt-sync') ()
const { getDataMahasiswa } = require ("./index3")

let counter

do {
    getDataMahasiswa (["username", "email", "nim"])
    counter = prompt("Apakah Inggin Mengulang ? (y/n)")
} while (counter === "y" || counter === "Y")