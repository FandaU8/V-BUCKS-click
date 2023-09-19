const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");

let numberOfCookies = 0;

cookie.onclick = () => {
   numberOfCookies++; //++ iknrement - zveda cislo o 1
   console.log(numberOfCookies);
   counter.innerHTML = "Cookies: " +numberOfCookies;
   counter.innerHTML = `${numberOfCookies}` ;
    }