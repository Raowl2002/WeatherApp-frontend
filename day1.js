const apiUrl="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
const apiKey = "616ce97e0dcce2bf2c90662ae2ad544f";
const cityName="Regina";
(async function getData(){
    try{
        const response = await fetch(apiUrl +`appid=${apiKey}&q=${cityName}`);
        console.log("Got the data");
        let data = await response.json();
        console.log(data);
    }catch(error){
        console.log(`Download error : ${error.message} `);
    }      
})();