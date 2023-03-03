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
    


    var pic = localStorage.getItem("pic")
   
  if (pic == null) {
        document.getElementsByClassName("profile-pic")[0].src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg";
        // $('.profile-pic').attr('src', "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg");
        document.getElementById("profilepic").src = "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg";
    }
    else {
      // console.log(pic);
      document.getElementsByClassName("profile-pic")[0].src=pic;
        // $('.profile-pic').attr('src', e.target.result);
      document.getElementById("profilepic").src = pic;
    }
    
  }
  
  
  // function previewFile() {
  //   var preview = document.querySelector('img');
  //   var file    = document.querySelector('input[type=file]').files[0];
  //   var reader  = new FileReader();
  
  //   reader.addEventListener("load", function () {
  //     preview.src = reader.result;
  //   }, false);
  
  //   if (file) {
  //     reader.readAsDataURL(file);
  //   }
  // }
  //                       $(function() {
  //             $('#profile-image1').on('click', function() {
  //                 $('#profile-image-upload').click();
  //             });
  //         });