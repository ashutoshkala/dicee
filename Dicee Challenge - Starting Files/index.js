var randomNum1 = Math.floor(Math.random()*6);
var randomNum2 = Math.floor(Math.random()*6);
var img_add=[
    'file:///D:/@@Ashu/WebDev/Dicee%20Challenge%20-%20Starting%20Files/images/dice1.png' , 
    'file:///D:/@@Ashu/WebDev/Dicee%20Challenge%20-%20Starting%20Files/images/dice2.png' , 
    'file:///D:/@@Ashu/WebDev/Dicee%20Challenge%20-%20Starting%20Files/images/dice3.png' ,
    'file:///D:/@@Ashu/WebDev/Dicee%20Challenge%20-%20Starting%20Files/images/dice4.png' ,
    'file:///D:/@@Ashu/WebDev/Dicee%20Challenge%20-%20Starting%20Files/images/dice5.png' ,
    'file:///D:/@@Ashu/WebDev/Dicee%20Challenge%20-%20Starting%20Files/images/dice6.png'

];
document.getElementById('img1').src=img_add[randomNum1];
document.getElementById('img2').src=img_add[randomNum2];
var x

if(randomNum1>randomNum2){
    x='Player 1 won'
}
else if(randomNum2>randomNum1){
    x='Player 2 won'
}
else{
    x= 'Draw'
}

document.getElementById('heading').innerHTML=x;

