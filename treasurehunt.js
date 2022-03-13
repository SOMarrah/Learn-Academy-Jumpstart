var treasureChest = Math.floor(Math.random() * 16)
var bomb = Math.floor(Math.random() * 16)
var clicks = 0;
var wins = 0;
var loss = 0;
//arrays are lists of things - make planets variables that objects

const treasure = (location) => {
  if (treasureChest === bomb){
    bomb = Math.floor(Math.random() * 16)
  }
else if (location === treasureChest) {
     wins += 1;
     document.getElementById(location).innerHTML = "💰"
     document.getElementById("wins").innerHTML = wins;
     document.getElementById('gameboard').style.pointerEvents = "none"
}
  else if (bomb === location) {
     document.getElementById(location).innerHTML = "💣"
     loss += 1;
     document.getElementById("loss").innerHTML = loss;
     document.getElementById('gameboard').style.pointerEvents = "none"
}
else if(clicks === 7){
  alert("You've run out of fuel!")
  document.getElementById('gameboard').style.pointerEvents = "none"
  loss += 1;
  document.getElementById("loss").innerHTML = loss;
}
  else{
    document.getElementById(location).innerHTML = "❌"
  }
}

function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
};

function reload() {
  console.log("asasdfdf")
  clicks = 0
  document.getElementById("clicks").innerHTML = clicks;
  document.getElementById(0).innerHTML= '<img src="https://upload.wikimedia.org/wikipedia/commons/6/60/Bringer_of_War_Planet.png" width= 90px />';
  document.getElementById(1).innerHTML='<img src="https://nineplanets.org/wp-content/uploads/2020/03/sun.png" width= 90px />';
  document.getElementById(2).innerHTML='<img src="https://upload.wikimedia.org/wikipedia/commons/4/49/Gajillion_Islands_Planet.png" width= 90px />';
  document.getElementById(3).innerHTML='<img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Populated_Planet.png" width= 90px />';
  document.getElementById(4).innerHTML='<img src="https://images.freeimg.net/rsynced_images/pluto-2201446_1280.png" width= 90px />';
  document.getElementById(5).innerHTML='<img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Eris-transparent.png" width= 90px />';
  document.getElementById(6).innerHTML='<img src="https://cdn.pixabay.com/photo/2016/04/24/04/53/globe-1348777_1280.png" width= 90px />';
  document.getElementById(7).innerHTML='<img src="https://cdn.pixabay.com/photo/2022/02/08/15/12/sun-7001569_1280.png" width= 90px />';
  document.getElementById(8).innerHTML='<img src="https://cdn.pixabay.com/photo/2013/07/12/13/24/atmosphere-146971_1280.png" width= 90px />';
  document.getElementById(9).innerHTML='<img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Ice_planet.png" width= 90px />';
  document.getElementById(10).innerHTML='<img src="https://cdn.pixabay.com/photo/2020/09/14/17/01/clouds-5571507_1280.png" width= 90px />';
  document.getElementById(11).innerHTML='<img src="https://nineplanets.org/wp-content/uploads/2020/03/earth.png" width= 90px />';
  document.getElementById(12).innerHTML='<img src="https://nineplanets.org/wp-content/uploads/2019/09/saturn.png" width= 90px />';
  document.getElementById(13).innerHTML='<img src="https://nineplanets.org/wp-content/uploads/2019/09/mercury.png" width= 90px />';
  document.getElementById(14).innerHTML='<img src="https://images.freeimg.net/rsynced_images/jupiter-25468_1280.png" width= 90px />';
  document.getElementById(15).innerHTML='<img src="https://cdn2.picryl.com/photo/2019/06/27/l98-59b-198ad2-1024.png" width= 90px />';
  document.getElementById('gameboard').style.pointerEvents = "all"
  treasureChest = Math.floor(Math.random() * 16)
  bomb = Math.floor(Math.random() * 16)
}
