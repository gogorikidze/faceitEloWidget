const url = new URLSearchParams(window.location.search);
const nickname = url.get('user');

var elodisplay = document.getElementById('elo');
var levelpic = document.getElementById('levelpic');

updateelo();
setInterval(updateelo, 20000);
function updateelo(){
  var oReq = new XMLHttpRequest();
  oReq.open('GET', 'https://open.faceit.com/data/v4/players?nickname=' + nickname + '&game=csgo&apiKey=41ee16c9-7c6e-4605-86e2-91886d85ac53');
  oReq.setRequestHeader('accept', 'application/json');
  oReq.setRequestHeader('Authorization', 'Bearer 41ee16c9-7c6e-4605-86e2-91886d85ac53');
  oReq.send();
  oReq.onload = function() {
    elo = JSON.parse(oReq.responseText).games.csgo.faceit_elo;
    levelpic.src = "https://cdn-frontend.faceit.com/web/960/src/app/assets/images-compress/skill-icons/skill_level_"+ JSON.parse(oReq.responseText).games.csgo.skill_level + "_svg.svg";
    elodisplay.innerText = elo;
  }
}
