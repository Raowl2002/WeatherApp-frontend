const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric";
const apiKey = "616ce97e0dcce2bf2c90662ae2ad544f";
const cityName=document.querySelector("#search input")

async function getData(cityName){

    try{
        const response = await fetch(apiUrl +`&appid=${apiKey}&q=${cityName}`);
        let data = await response.json();
        console.log(data);
        document.querySelector(".weather").style.display="block";

        const weather =data.weather[0].main.toLowerCase();
        document.querySelector(".weather img").setAttribute("src",`images/${weather}.png`);
        
        document.querySelector(".weather h2").textContent=`${cityName[0].toUpperCase()+cityName.slice(1).toLowerCase()} `;
        document.querySelector(".weather .temp").textContent = `${Math.round(data.main.temp)} °C`;
        document.querySelector(".col1 .humidity").textContent =`${data.main.humidity}%`;
        document.querySelector(".col1 .wind").textContent =`${data.wind.speed} km/hr` 
    }catch(error){
        console.log(`Download error : ${error.message} `);
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display="none";
    }
          
};


document.querySelector("#search button").addEventListener("click",() =>{  
    getData(cityName.value);
});

