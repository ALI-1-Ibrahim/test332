// function Translate() { 
// 	//initialization
// 	this.init =  function(attribute, lng){
// 		this.attribute = attribute;
// 		this.lng = lng;	
// 	}
// 	//translate 
// 	this.process = function(){
// 		_self = this;
// 		var xrhFile = new XMLHttpRequest();
// 		//load content data 
// 		xrhFile.open("GET", "../lng/"+this.lng+".json", false);
// 		xrhFile.onreadystatechange = function ()
// 		{
// 			if(xrhFile.readyState === 4)
// 			{
// 				if(xrhFile.status === 200 || xrhFile.status == 0)
// 				{
// 					var LngObject = JSON.parse(xrhFile.responseText);
// 					var allDom = document.getElementsByTagName("*");
// 					for(var i =0; i < allDom.length; i++){
// 						var elem = allDom[i];
                        
// 						var key = elem.getAttribute(_self.attribute);
// 						if(key != null) {
// 							elem.innerHTML = LngObject[key]  ;
//                             // console.log(elem);
// 						}
// 					}
				
// 				}
// 			}
// 		}
// 		xrhFile.send();
//     }
// }


function translate(lng, tagAttr){
    var translate = new Translate();
    translate.init(tagAttr, lng);
    translate.process();
    
}

function myFunction() {
var x = document.getElementById("lang").value;
localStorage.setItem("lang", x);
translate(x, 'lng-tag');
}


function Translate() {
		//initialization
		this.init =  function(attribute, lng){
			this.attribute = attribute;
			this.lng = lng;	
      
		}
		//translate 
		this.process =  function(){
			_self = this;
			let fetchRes =  fetch("https://ali-1-ibrahim.github.io/test252/lng/"+this.lng+".json");
			fetchRes.then(res => res.json())
			.then( function (d) {
				var allDom = document.getElementsByTagName("*");
						for(var i =0; i < allDom.length; i++){
							var elem = allDom[i];
							
							var key = elem.getAttribute(_self.attribute);
							if(key != null) {
								elem.innerHTML = d[key]  ;
	                            // console.log(elem);
							}
						}
			});
			// console.log(d)
  // fetchRes is the promise to resolve
  // it by using.then() method
	
		
		
						// console.log("lfgh;ilfgjlk;jghlk;djlghkj");
						// var LngObject = JSON.parse(fetchRes.responseText);
						
					
				
		
		
		
		}

	





	
		}



// async function getText(file) {
// 	let myObject = await fetch(file);
// 	let myText = await myObject.text();
// 	myDisplay(myText);
//   }