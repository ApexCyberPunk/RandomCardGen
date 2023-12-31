const details = document.querySelector('.details')
const imgContainer = document.querySelector('.img-container')
const getUserBtn = document.getElementById('get-user-btn')
const url = "https://random-data-api.com/api/v2/users?response_type=json"


let getUser = () => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        imgContainer.innerHTML = `
        <img src=${data.avatar}>
        `
        details.innerHTML = `
        <h2>${data.first_name}${data.last_name}</h2>
        <h3>${data.employment.title}</h3>
        <h4>${data.address.city}</h4>
        `
    let randomColor = "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")
    
   document.documentElement.style.setProperty("--theme-color", randomColor)

    })
}

window.addEventListener('load', getUser)

getUserBtn.addEventListener('click', getUser)





