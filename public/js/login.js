let login = async (email, password) => {
    try {
        let res = await axios({
            method: 'POST',
            url: 'http://localhost:4200/login',
            data: { email, password }
        })
        window.setTimeout(() => location.assign('/'), 1000)
        console.log(res)
    }
    catch (err) { 
        console.log('err')
    } }

    if (document.querySelector('#myform'))
    console.log('here we ares')
    document.querySelector('#myform').addEventListener('submit', e => {
        document.querySelector('.login100-form-btn').textContent = 'Logging in...'
        e.preventDefault()
        let email = document.querySelector('#email').value
        let password = document.querySelector('#password').value
        login(email, password)
        document.querySelector('.login100-form-btn').textContent = 'Login'
    })