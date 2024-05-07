function log(){
    let login = document.querySelector('.log')
    login.classList.add('show')
    let reg = document.querySelector('.register')
    reg.classList.remove('show')
}

function reg(){
    let reg = document.querySelector('.register')
    reg.classList.add('show')
    let login = document.querySelector('.log')
    login.classList.remove('show')
}

let b1 = document.querySelector('.log_but1')
b1.addEventListener("click", ()=>{log()});
let b2 = document.querySelector('.log_but2')
b2.addEventListener("click", ()=>{reg()});