


var randomNumber1=Math.floor(Math.random()*6)+1;

var getdiceimage="dice"+randomNumber1+".png";
var randomdiceimage="images/"+getdiceimage;
document.querySelector(".img1").setAttribute("src", randomdiceimage);

var randomNumber2=Math.floor(Math.random()*6)+1;
var getdiceimage2="dice"+randomNumber2+".png";
var randomdiceimage2="images/"+getdiceimage2;
document.querySelector(".img2").setAttribute("src", randomdiceimage2);


if(randomNumber1>randomNumber2){
     document.querySelector("h1").innerHTML="Player1 wins!";
}
else if(randomNumber1<randomNumber2){
     document.querySelector("h1").innerHTML="Player2 wins!";
}
else{
     document.querySelector("h1").innerHTML="Draw";
}