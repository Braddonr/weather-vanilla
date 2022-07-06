var myArray = []
const form = document.getElementById('myForm');

const weatherData = () => {
    
    form.addEventListener("submit", function (event) {
        // stop form submission
        event.preventDefault();
        let latitude = document.getElementById("latitude").value;
        let longitude = document.getElementById("longitude").value;

    
        let url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&hourly=windspeed_120m&hourly=relativehumidity_2m&hourly=cloudcover_mid`;
    
    const getData = async () => {
            try {
                const res = await fetch(url)
                // console.log(res)
                if(!res.ok) {
                    const msg = `there is an error "${res.status}, ${res.statusText}"`
                    throw new Error(msg)
                }
                const data = await res.json()
                myArray.push(data)
                const hourly = myArray.filter((item) => {
                    var relativeHumidity = item.hourly.relativehumidity_2m;
                    var windspeed = item.hourly.windspeed_120m;
                    var temperature = item.hourly.temperature_2m;
                    var cloudcover = item.hourly.cloudcover_mid;
   
                    console.log("relative humidity is",relativeHumidity)
                    console.log("windspeed is", windspeed)
                    console.log("cloudcover", cloudcover)
                    console.log("temperature", temperature)
               
                    return windspeed;
                    return temperature;
                    return cloudcover;
                    return relativeHumidity;
                })
                
                return hourly
            } catch (error) {
                console.log(error)
            }
        };
        
        getData().then(data => console.log(data))
    })
}

weatherData()

let arr1 = [relativeHumidity];
document.getElementById("arr1Print").innerHTML = arr1;


let arr2 = [windspeed];
document.getElementById("arr2Print").innerHTML = arr2;

let arr3 = [cloudcover];
document.getElementById("arr3Print").innerHTML = arr3;

let arr4 = [temperature];
document.getElementById("arr4Print").innerHTML = arr4;
