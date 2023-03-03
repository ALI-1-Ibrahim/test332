// const Dark = document.cookie
//   .split('; ')
//   .find((row) => row.startsWith('Dark='))
//   ?.split('=')[1];
var r = document.querySelector(':root');


const Dark = localStorage.getItem("Dark");

const L = localStorage.getItem("lang");


window.onload = function(){ 
  if(L=='ar'){
    translate(L,'lng-tag');   
  }else{
    translate('en','lng-tag');   
  }
    if (Dark=="true") {
    r.style.setProperty('--TitleParbackground-color', 'black');
    r.style.setProperty('--ButttonGradiantColor', 'linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB)');
    r.style.setProperty('--Apartment', 'black');
    r.style.setProperty('--FontColor', 'white');
    r.style.setProperty('--IconColor','blue');
    r.style.setProperty('--BodyBackground','gray');

  } else {
    r.style.setProperty('--TitleParbackground-color', '#526DA1');
    r.style.setProperty('--ButttonGradiantColor', 'linear-gradient(144deg,#d79eff, #bbb0ff 50%,#b7faff)');
    r.style.setProperty('--Apartment', 'white');
    r.style.setProperty('--FontColor', 'blue');
    r.style.setProperty('--IconColor','white');
    r.style.setProperty('--BodyBackground','white');

  }
  // document.body.style.flexDirection = "column";
  //   document.body.style.alignItems = "center";
    document.getElementById("PreLoader").style.display="none";
    
    // document.cookie = "TitleParbackground-color=#0080ff; expires=Thu, 18 Dec 2024 12:00:00 UTC"?"TitleParbackground-color=#0080ff; expires=Thu, 18 Dec 2024 12:00:00 UTC":"TitleParbackground-color=black; expires=Thu, 18 Dec 2024 12:00:00 UTC";
    // document.cookie = "ButttonGradiantColor=linear-gradient(144deg,#d79eff, #bbb0ff 50%,#b7faff); expires=Thu, 18 Dec 2024 12:00:00 UTC"?"ButttonGradiantColor=linear-gradient(144deg,#d79eff, #bbb0ff 50%,#b7faff); expires=Thu, 18 Dec 2024 12:00:00 UTC":"ButttonGradiantColor=linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB); expires=Thu, 18 Dec 2024 12:00:00 UTC";
    // document.cookie = "Apartment=white; expires=Thu, 18 Dec 2024 12:00:00 UTC"?"Apartment=white; expires=Thu, 18 Dec 2024 12:00:00 UTC":"Apartment=black; expires=Thu, 18 Dec 2024 12:00:00 UTC";
    //document.cookie = "Dark=false; expires=Thu, 18 Dec 2024 12:00:00 UTC";

    var pic = localStorage.getItem("pic")
   
  if (pic == null) {
        document.getElementById("profilepic").src = "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg";
    }
    else {
      
      document.getElementById("profilepic").src = pic;
    }
  }
  
  // const ButttonGradiantColor = document.cookie
  // .split('; ')
  // .find((row) => row.startsWith('ButttonGradiantColor='))
  // ?.split('=')[1];
  // const Apartment = document.cookie
  // .split('; ')
  // .find((row) => row.startsWith('Apartment='))
  // ?.split('=')[1];


  
  var l = document.getElementById("Light");
  var d = document.getElementById("Dark");
// l.addEventListener("click", function() {
//   r.style.setProperty('--TitleParbackground-color', 'red');
//   r.style.setProperty('--ButttonGradiantColor', 'linear-gradient(144deg,#d79eff, #bbb0ff 50%,#b7faff)');
// });
function DarkMode(){
 

  // document.cookie = "TitleParbackground-color=black; expires=Thu, 18 Dec 2024 12:00:00 UTC";
  // document.cookie = "ButttonGradiantColor=linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB); expires=Thu, 18 Dec 2024 12:00:00 UTC";
  // document.cookie = "Apartment=black; expires=Thu, 18 Dec 2024 12:00:00 UTC";
  // document.cookie = "Dark=true; expires=Thu, 18 Dec 2024 12:00:00 UTC;path=/";/////////////////////////////////////////////////////////////////////////////////////old cookies///////////////////////
  // document.cookie = "Dark=true; expires=Thu, 18 Dec 2024 12:00:00 UTC;path=../home page/main.html";
  localStorage.setItem("Dark", "true");
  window.location.reload();
  // console.log(getCookie("TitleParbackground-color"))
  // console.log(TitleParbackground)
}
function LightMode() {
  

  // document.cookie = "TitleParbackground-color=#0080ff; expires=Thu, 18 Dec 2024 12:00:00 UTC";
  // document.cookie = "ButttonGradiantColor=linear-gradient(144deg,#d79eff, #bbb0ff 50%,#b7faff); expires=Thu, 18 Dec 2024 12:00:00 UTC";
  // document.cookie = "Apartment=white; expires=Thu, 18 Dec 2024 12:00:00 UTC";
  // document.cookie = "Dark=false; expires=Thu, 18 Dec 2024 12:00:00 UTC;path=/";
  // document.cookie = "Dark=false; expires=Thu, 18 Dec 2024 12:00:00 UTC;path=../home page/main.html";
  localStorage.setItem("Dark", "false");

  window.location.reload();
  // console.log(TitleParbackground)
}

