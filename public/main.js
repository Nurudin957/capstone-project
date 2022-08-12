function GetInfo() {

    var newName = document.getElementById("cityInput");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML = "--"+newName.value+"--";
axios.get("/api/city?city="+newName.value)

.then(res => {
    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Min").innerHTML = "Min: " + Number(res.data.list[i].main.temp_min - 273.15).toFixed(1)+ "°";
        
    }

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1) + "Max").innerHTML = "Max: " + Number(res.data.list[i].main.temp_max - 273.15).toFixed(2) + "°";
    }


    // for getting weather icons 
     for(i = 0; i<5; i++){
        document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+
       res.data.list[i].weather[0].icon
        +".png";
    }
   
    console.log(data)
})

}

function DefaultScreen(){
    document.getElementById("cityInput").defaultValue = "Bloomington";
    GetInfo();
}



var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];




function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
    }
    