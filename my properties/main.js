var r = document.querySelector(':root');

const Dark = localStorage.getItem("Dark");

const L = localStorage.getItem("lang");

window.onload = function(){   
    
    

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
  // document.body.style.alignItems = "center";
  document.getElementById("PreLoader").style.display="none";
   

    var pic = localStorage.getItem("pic")
   
  if (pic == null) {
        document.getElementById("profilepic").src = "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg";
    }
    else {
      
      document.getElementById("profilepic").src = pic;
    }
    












    var b = document.getElementById("MyPropertiesBody");
    fetch('../database/csvjson.json')
    .then(function(response) {
      
    console.log(response)
    
    return response.json();
    
    })
    .then(function(d) {
      
      SH = d;
      console.log(SH)
    
      d.forEach(({host_id,id,name})=>{
        if (host_id==124245) {/////////////////////////////////this should be the user id
            var p = document.createElement("div")
            p.style.width="100%";
            p.style.height="15%";
            p.style.borderRadius="15px";
            p.style.marginTop="20px"
            p.style.backgroundColor="blue";
            p.style.Color="red";
            // var c = document.createElement("p")
            // c.setAttribute("lng-tag", 'lng-tag');
            // p.appendChild(c);
            p.innerHTML="<div style=\"display: flex;\"><p lng-tag=\"apartment id: \"></p> <p>"+id+"</p></div><p>"+name+"</p>"
            b.appendChild(p)
        }
    
    })
    

    if(L=='ar'){
        translate(L,'lng-tag');   
      }else{
        translate('en','lng-tag');   
      }
    });
    






  }


