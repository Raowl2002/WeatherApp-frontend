const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric";
const apiKey = "616ce97e0dcce2bf2c90662ae2ad544f";

async function getData(cityName){

    try{
        const response = await fetch(apiUrl +`&appid=${apiKey}&q=${cityName}`);
        console.log("Got the data");
        let data = await response.json();
        console.log(data);
        const weather =data.weather[0].main.toLowerCase();
        console.log(weather);
        document.querySelector(".weather img").setAttribute("src",`images/${weather}.png`);
        document.querySelector(".weather h2").textContent=`${cityName[0].toUpperCase()+cityName.slice(1).toLowerCase()} `;
        document.querySelector(".weather .temp").textContent = `${Math.round(data.main.temp)} °C`;
        document.querySelector(".col1 .humidity").textContent =`${data.main.humidity}%`;
        document.querySelector(".col1 .wind").textContent =`${data.wind.speed} km/hr` 
    }catch(error){
        console.log(`Download error : ${error.message} `);
    }
          
};


document.querySelector("#search button").addEventListener("click",() =>{
    const cityName=document.querySelector("#search input").value;
    console.log(cityName);    
    getData(cityName);
});

