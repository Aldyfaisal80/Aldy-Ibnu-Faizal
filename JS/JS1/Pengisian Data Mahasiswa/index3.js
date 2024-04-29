const prompt = require(`prompt-sync`)()
const chalk = require(`chalk`)
const fs = require("fs")

const filePath = "./data/json/datamahasiswa.json"
const dataMahasiswa = [] 

const createDirectory =(filePath) => {
    if(!fs.existsSync('./data')) {
        fs.mkdir('./data', err => {
            if (err) throw err
        });
    }
    if (!fs.existsSync('./data/json')) {
        fs.mkdir('./data/json' , err => {
            if (err) throw err
        });
    }
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath,`[]`, err => {
            if (err) throw err
        });
    }
}

const storeDataMahasiwa = (filePath) => {
    if (fs.existsSync(filePath)) {
        return JSON.parse(fs.readFileSync(filePath, "utf-8"));
    }
}

const saveDataMahasiswa = (filePath, dataMahasiswa) => {
    if (!fs.existsSync(filePath)) {
        createDirectory(filePath)
    }
    fs.writeFileSync(filePath, JSON.stringify(dataMahasiswa), err => {
        if (err) throw err
    })
}

const getDataMahasiswa = (data) => {
    createDirectory(filePath)
    const storeData = storeDataMahasiwa(filePath)
    const Mahasiwa = {}
    data.map(dataItem => {
        let input
        do {
            input = prompt(chalk.red(`Masukkan ${dataItem} Mahasiswa :`))
            Mahasiwa[dataItem] = input
        }while (input === null || input === "")
    })
    dataMahasiswa.push(...storeData)
    dataMahasiswa.push(Mahasiwa)
    saveDataMahasiswa(filePath, dataMahasiswa)
}


module.exports = {
    getDataMahasiswa
}
// const storeData = JSON.parse(fs.readFileSync(filePath, "urf-8"))

// do {
//     dataMahasiswa.push(getDataMahasiswa())
//     counter = prompt("Apakah Ingin Mengulang ? (y/n)")
// }while (counter === "y" || counter === "Y")

// dataMahasiswa.push(...storeData)

// save
// fs.writeFileSync(filePath, JSON.stringify(dataMahasiswa), err => {
//     if (err) throw err
// })