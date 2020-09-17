var randomNumber1 = Math.floor((Math.random())*6)+1;
var randomNumber2 = Math.floor((Math.random())*6)+1;
var imageName1 = "dice"+randomNumber1+".png";
var imageName2 = "dice"+randomNumber2+".png";
var imageSource1= "images/"+imageName1;
var imageSource2= "images/"+imageName2;
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];
var header = document.querySelectorAll("h1")[0];
image1.setAttribute("src",imageSource1);
image2.setAttribute("src",imageSource2);
if(randomNumber1==randomNumber2)
{
  header.innerHTML = "Draw";
}
else if (randomNumber1>randomNumber2) {
  header.innerHTML = "Player 1 Won";
}
else if (randomNumber1<randomNumber2) {
  header.innerHTML = "Player 2 Won";
}
