// Start Header
hamburger=document.querySelector(".fa-bars");
hamburger.onclick=function(){
  list=document.querySelector(".list");
  list.classList.toggle("active");
}
// End Header

// Strat Landing
let landingPage=document.querySelector(".landing");
let imgsArray=["bc-img-1.jpg","bc-img-2.jpg"];
landingPage.style.backgroundImage='url("img/bc-img-1.jpg")';
setInterval(() => {
  let randomNumber=Math.floor(Math.random() * imgsArray.length);
  console.log(randomNumber);
  landingPage.style.backgroundImage='url("img/' + imgsArray[randomNumber] + '")';
},4000);
// End Landing