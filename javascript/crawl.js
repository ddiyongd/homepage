window.onload = function(){
  var dt = new Date();
  var date = String(dt.getFullYear()+String((dt.getMonth()+1))+dt.getDate());
  console.log(date)
  document.querySelector("#food > .info").innerHTML="<p>오늘의 급식("+dt.toLocaleString()+")</p>";
  fetch("https://open.neis.go.kr/hub/mealServiceDietInfo?KEY=894cb6a6e8d341da824ef629b9f31b36&ATPT_OFCDC_SC_CODE=J10&SD_SCHUL_CODE=7530523&MLSV_YMD="+date)
    .then(response => response.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html,'text/html')
      const food = doc.querySelector('DDISH_NM').textContent;
      console.log(food);
      document.querySelector("#food > .fo").innerHTML="<p>"+food+"</p>";
    })
}
