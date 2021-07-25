

var name = prompt("what is your gamer name");
alert("oh Hi nice name "+ name);
var favGame = prompt("what is your fav game here?");

if(favGame == "Call Of Duty"){
  document.write("<div>" + "<h3" + favGame+"</h3> "+"</div>");
}
else if(favGame == "Minecraft" ){
  document.write("<div>" + "<h3" + favGame+"</h3> "+"</div>");
}
else if(favGame == "Animal Crossing: New Horizon"){
  document.write("<div>" + "<h3" + favGame+"</h3> "+"</div>");
}
else{
  alert('we dont have this game');
  
}