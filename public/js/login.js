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

    if (document.querySelector('#myform')) {
    console.log('here we ares')
    document.querySelector('#myform').addEventListener('submit', e => {
        e.preventDefault()
        document.querySelector('#submit').textContent = 'Logging in...'
        let email = document.querySelector('#email').value
        let password = document.querySelector('#password').value
        login(email, password)
        document.querySelector('#submit').textContent = 'Login'
    })
    }

    let logout = async () => {
        try {
            await axios({
                method: 'GET',
                url: 'http://localhost:4200/logout',
            })
        } catch (e) {
            console.log(e)
        }
    }
    
let logoutBtn = document.querySelector('.class_is')
if(logoutBtn) logoutBtn.addEventListener('click', logout)
