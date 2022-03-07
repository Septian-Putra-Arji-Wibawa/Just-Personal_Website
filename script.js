emailReceiver='ralgis@gmail.com'

function kirim(){

    let name = document.getElementById('input-name').value
    let email = document.getElementById('input-email').value
    let phone = document.getElementById('input-phone').value
    let subject = document.getElementById('select-subject').value
    let message = document.getElementById('input-message').value


        if (name === ''){
            alert('Nama harus diisi')
        }
        if (email === ''){
            alert('email harus diisi')
        }
        if (phone === ''){
            alert('Nomor telepon harus diisi')
        }
        if (subject === ''){
            alert('subject harus diisi')
        }
        if (message === ''){
            alert('pesan harus diisi')
        }

    // console.log(name)
    // console.log(email)
    // console.log(phone)
    // console.log(subject)
    // console.log(message)

    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hello My Name ${name}, ${message}`
    a.click()
}