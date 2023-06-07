/*let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};*/

////////// 課題3-2 ここからプログラムを書こう
//console.log(data.name+","+data.main.temp_max+","+data.main.temp_min);
//p=document.createElement('p');
//p.textContent=data.name+","+data.main.temp_max+","+data.main.temp_min;
let b =document.querySelector('button#kensaku');
b.addEventListener('click',kensaku);
let kekka=document.querySelector('div#kekka');
function kensaku(){
  let i=document.querySelector('input[name="id"]');
  let id=i.value;
  console.log(id);
  let url ='https://www.nishita-lab.org/web-contents/jsons/openweather/'+(id)+'.json';
  axios.get(url)
  .then(showResult)
  .catch(showError)
  .then(finish);
}
function showResult(resp){
  let data=resp.data;
  if (typeof data === 'string') {
    data = JSON.parse(data);
  }
  console.log(data);
  let to=document.querySelector('span#tosi');
  to.textContent=data.name;
  let te = document.querySelector('span#tenki');
  te.textContent =data.weather[0].description;
  let ma = document.querySelector('span#max');
  ma.textContent =data.main.temp_max+'℃';
  let mi =document.querySelector('span#min');
  mi.textContent =data.main.temp_min+'℃';
  let si =document.querySelector('span#situdo');
  si.textContent =data.main.humidity+'%';
}
function showError(err) {
  console.log(err);
}
function finish() {
  console.log('終了します');
}
