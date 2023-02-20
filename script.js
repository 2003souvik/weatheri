const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4002237fb2msheb20365fecc5a38p1f1995jsn82189741df6c',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getw=(city)=>{
cityname.innerHTML=city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response =>{
		 console.log(response)
		 cloud_pct.innerHTML = response.cloud_pct
		 temp.innerHTML =response.temp
		 feels_like.innerHTML =response.feels_like 
		 humidity.innerHTML =response.humidity
		//  min_temp.innerHTML =response.min_temp
		//  max_temp.innerHTML =response.max_temp
		 wind_speed.innerHTML = response.wind_speed 
		//  wind_degrees.innerHTML =response.wind_degrees
		//  sunrise.innerHTML =response.sunrise 
		//  sunset.innerHTML =response.sunset

	})
	.catch(err => console.error(err));
}
sub.addEventListener('click',(e)=>{
	e.preventDefault()
	getw(city.value)
})
getw("Kolkata")
