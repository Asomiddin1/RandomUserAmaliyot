const body = document.querySelector('body')
const darkBtn = document.getElementById('dark-btn')
const lightBtn = document.getElementById('light-btn')

const modeLocal = localStorage.getItem('mode')

if(modeLocal){
    body.classList.add('dark-mode')
}


const toggleModeBtn =()=>{
    lightBtn.classList.toggle('hidden')
    darkBtn.classList.toggle('hidden')
    body.classList.toggle('dark-mode')
}

darkBtn.addEventListener('click' , ()=>{
    toggleModeBtn()
    localStorage.setItem('mode', 'dark-mode')
})

lightBtn.addEventListener('click' , ()=>{
    toggleModeBtn()
    localStorage.setItem('mode', '')
})