const input = document.getElementsByTagName('input');
const resent = document.getElementById('resent-otp');
const sent = document.getElementById('send');

const generator = (panjang) => {
  const number = '0123456789';
  let output = [];
  for (let i = 0; i < panjang; i++) {
    let random = Math.floor(Math.random() * number.length);
    output.push(number[random])
  }
  return output
}

let otp = generator(6)
console.log(otp)
alert(`Masukkan ${otp.map(item => item).join('-')}`)

resent.addEventListener('click', e => {
  otp = generator(6)
  alert(`Masukkan${otp.map(item => item).join('-')}`)
})

const checkotp = (user, comp) => {
  for (let i = 0; i < user.length; i++) {
    if (user.every((item, i)=> {
      return item === comp[i]
    })) {
      return true
    } else {
      return false
    }
  }
}

sent.addEventListener('click' , e => {
  const inputotp = []
  for (let i = 0; i < otp.length; i++) {
    inputotp.push(input[i].value)
  }
  if (checkotp(inputotp, otp)) {
    alert("berhasil - berhasil HORE")
  } else{
    alert("Gagal")
  }
})