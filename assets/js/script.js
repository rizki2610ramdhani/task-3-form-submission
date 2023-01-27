function getData(){
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phone').value
    let subject = document.getElementById('subject').value
    let message = document.getElementById('message').value

    let audience = {
        name,
        email,
        phone,
        subject,
        message
    }

    console.table(audience)

    const defaultEmail = "rizkiramdhani2610@gmail.com"

    let mailTo = document.createElement('a')
    mailTo.href = `mailto:${defaultEmail}?subject=${subject}&body=Halo nama saya ${name}, saya ingin ${message} tolong hubungin saya ${phone}`
    mailTo.click()
}