mapboxgl.accessToken = 'pk.eyJ1IjoibWF6ZW54ZWxnYXlhciIsImEiOiJjbDV3eDEwejAwZmU3M2NwaXU4YzY5dTE0In0.ywGQXbcUzmKG1zk8e8ZYyg';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [32.276847, 30.606981], // starting position [lng, lat]
    zoom: 12, // starting zoom
});
var im = document.createElement("img")
window.onload = function() {
    
    im.setAttribute('id','fa');
    im.setAttribute('src','imgs/icon.png');
    im.setAttribute('width','32px');
    im.setAttribute('height','32px');
    im.style.cursor = "pointer";
    
    document.body.appendChild(im);
};
var zoom = map.getZoom();
console.log(zoom);
const marker1 = new mapboxgl.Marker(im)
.setLngLat([32.276847, 30.606981])
.addTo(map);


// Set an event listener
map.on('click', (e) => {
    new mapboxgl.Marker(im)
.setLngLat([32.276847, 30.606981])
.addTo(map);
});

map.on('zoom', () => {
    // document.getElementById("fa").width = Math.round(map.getZoom()*2);
    // document.getElementById("fa").height = Math.round(map.getZoom()*2);
    if (map.getZoom() >= 12) {
        document.getElementById("fa").style.display = "block";
  } else {
        document.getElementById("fa").style.display = "none";
  }
    console.log(map.getZoom());
});
im.addEventListener("click" , function(){
    var x = document.getElementById("div");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  })

  document.getElementsByClassName("menu-btn")[0].addEventListener("onclick" , function(){
    if (im.style.display === "none") {
      setTimeout(() => {
      
        // 👇️ hides element (still takes up space on the page)
        im.style.display = "block";
      }, 100);
    } else {
      im.style.display = "none";
    }
    
  })
// map.on('boxzoomstart', (e) => {
// console.log('event type:', e.type);
// // event type: boxzoomstart
// });
// document.getElementById('bu').addEventListener('click' , myFunction)

// function myFunction() {
//     console.log(map.getZoom());

// }



// CLOSE FUNCTION
function Xbtn(elm) {
 document.getElementById(elm.parentNode.id).style.display="none"
}