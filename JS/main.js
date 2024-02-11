let data = "egypt" ; 

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
getdaat(data) ; 
let nameOfCountry = document.getElementById("nameOfCountry") ;
let Temperature = document.getElementById("Temperature") ;
let IcoTemperature = document.getElementById("icoTemperature") ;
let statuss = document.getElementById("status")
let month = document.getElementById("month")
let ico = document.querySelectorAll(".ico") ;
let text = document.querySelectorAll(".text") ;
let deg1 = document.querySelectorAll(".deg1") ;
let deg2 = document.querySelectorAll(".deg2") ;
let day = document.querySelectorAll(".day") ;
let navbarSupportedContent  = document.getElementById("navbarSupportedContent")
let table = document.getElementById("table")
let y = document.querySelectorAll(".that")
let x = document.querySelectorAll(".this") ;
let button = document.getElementById("btnnn")
let inpu = document.getElementById("input") ;

inpu.addEventListener("input" , function(e){
    data = e.target.value ;
    console.log()
    getdaat(data) ;
})
async function getdaat (x){
    if(data.length > 2 ) {
        let son =  await fetch(`HTTPS://api.weatherapi.com/v1/forecast.json?key=65b774a0ea414080b28142239241101&q=${x}&days=3`) ;
    let DATA = await son.json() ; 
    await display(DATA) ;


    }
}
function display(x){
    nameOfCountry.textContent=x.location.name ;
    Temperature.textContent = x.current.temp_c ;
    IcoTemperature.setAttribute("src" , `https:${x.current.condition.icon}`) 
    statuss.textContent = x.current.condition.text


    for(var i = 0 ; i < 2 ; i++){
        ico[i].setAttribute("src" , `https:${x.forecast.forecastday[i].day.condition.icon}`)  ;
    }

    for(var i = 0 ; i < 2 ; i++){
        text[i].textContent=x.forecast.forecastday[i].day.condition.text  ;
    }

    for(var i = 0 ; i < 2 ; i++){
        deg1[i].textContent = x.forecast.forecastday[i].day.maxtemp_c
    }

    for(var i = 0 ; i < 2 ; i++){
        deg2[i].textContent = x.forecast.forecastday[i].day.mintemp_c
    }
    month.textContent = `${((new Date(x.forecast.forecastday[0].date)).getDate())} ${ months[((new Date(x.forecast.forecastday[0].date)).getMonth())] }`
    for(var i = 0 ; i < 3 ; i++){
        day[i].textContent = days[((new Date(x.forecast.forecastday[i].date)).getDay())] ;
    }
}

button.addEventListener( "click" , function(){
    console.log("sss")
  
    navbarSupportedContent.classList.remove("d-block")
    navbarSupportedContent.classList.add("d-none")
    if(table.classList.contains("d-none")){
        table.classList.replace("d-none" , "d-block")
    }
    else{
        table.classList.replace( "d-block" , "d-none")
    }
    table.classList.add('w-100')
})


for (let i = 0 ; i < x.length ; i++){
    x[i].addEventListener("mousemove" , function(){
        x[i].classList.remove("border-dark") ;
        x[i].classList.add("border-primary") ;
        y[i].classList.add("text-primary") ;
    })
}
for (let i = 0 ; i < x.length ; i++){
    x[i].addEventListener("mouseleave" , function(){        
        x[i].classList.add("border-dark") ;
        x[i].classList.remove("border-primary") ;
        y[i].classList.remove("text-primary") ;
    })
}
