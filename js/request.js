
// api
const API = 'https://randomuser.me/api/?results=9'

// for leader
const overlay = document.getElementById('overlay')

//togle overlay
const loaderTogle =(toggle)=>{
    if(toggle){
        overlay.classList.remove('hidden')
    }else{
        overlay.classList.add('hidden')
    }
}

//requist promise 
const getData =(resourse) =>{
    return new Promise ((resolve , reject) => {
        const requst = new XMLHttpRequest()
        requst.addEventListener('readystatechange' , ()=>{
           if(requst.readyState < 4){
            loaderTogle(true)
           }else if(requst.readyState === 4 && requst.status == 200){
            const data = JSON.parse(requst.responseText)
            resolve(data.results)
            loaderTogle(false)
           }else if(requst.requst == 4){
            reject('Eror')
            loaderTogle(false)
           }
        })    

        requst.open('GET' , resourse)
        requst.send()
    })
}

//load
const reload =()=>{
    getData(API)
    .then((data)=>{
      updateUI(data)
    })
    .catch((err)=>{
        console.log(err)
    })
}

document.addEventListener('DOMContentLoaded' ,reload)