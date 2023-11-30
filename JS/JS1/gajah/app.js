const random = () => {
  const value = ["gajah", "semut", "manusia"];
  return value[Math.floor(Math.random() * value.length)]
}
const user = prompt("masukkan pilihan anda\nGajah, Semut, Manusia :");
const comp = random ()
// todo - pengkondisian user x comp
const program = (user, comp) => {
  console.log({user, comp})
  let hasil;
  if (user === comp) {
    return hasil = "Draw"
  } else if (
    user === "semut" && comp === "gajah" ||
    user === "gajah" && comp === "manusia" ||
    user === "manusia" && comp === "semut" ) {
    return hasil = "menang"
  } else if (
    user === "semut" && comp === "manusia" ||
    user === "gajah" && comp === "semut"||
    user === "manusia" && comp === "gajah") {
    return hasil = "kalah"
  } else {
    return hasil = "Diluar kondisi"
  }
}
alert(`Kamu memilih ${user} dan komputer memilih ${comp} maka kamu ${program(user.toLocaleLowerCase(), comp)} dari komputer`)

