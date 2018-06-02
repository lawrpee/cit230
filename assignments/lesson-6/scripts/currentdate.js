//footer current date JS
var currentDate = new Date();
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = daysOfWeek [currentDate.getDay()];
var dayMonth = currentDate.getDate();
var monthOFYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = monthOFYear [currentDate.getMonth()];
var year = currentDate.getFullYear();
document.getElementById("currentdate").innerHTML = day+", "+dayMonth+" "+month+" "+year;