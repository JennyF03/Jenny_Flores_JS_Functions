/*
   JS Activity Clock
   Name: Jenny Flores
   Date:   4/22/25

   function getWeekday(dayNum)
      Returns the text of the day of the week where dayNum
      is the number of the week from 0 (Sunday) to 6 (Saturday)
*/
runClock();
setInterval("runClock()",1000);

function runClock(){
var thisDay=new Date ();
var thisDate=thisDay.toLocaleDateString();
var thisDayNum = thisDay.getDay(); 
var thisWeekDay = getWeekDay(thisDayNum);
var thisTime = thisDay.toLocaleTimeString();
   
document.getElementById("date").textContent=thisDate; 
document.getElementById("wday").textContent=thisWeekDay; 
document.getElementById("time").textContent=thisTime; 
}
 
function getWeekDay(dayNum){
   var wDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
return wDays[dayNum]; 
}