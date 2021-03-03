/*!
 * jRoute "Fake Routing"
 *
 * Copyright 2020 Laksamadi Guko
 */

var iurl = location.href;
var t = '?t=' + new Date().getTime();

var body_id = "md_body";

	
function lpage(){
	if(iurl.indexOf("?") > -1){
		let x = iurl.split("&")[0];
	  	let a_ = x.split("?")[1].replace(/\/|%2F/gi,"-");
	  	return a_;
	}
}



function jroute(id,ipage = lpage()){
	fetch('./assets/json/page.json'+t)
	  .then((response) => {
	    return response.json();
	  })
	  .then((data) => {
	    var page = data;
		if((!page[ipage] && !ipage) || (ipage.split("=")[0] == "fbclid")){
			// loadDotMD(id,page["home"]);
			$(".home").show();
		}else if(page[ipage]){
			loadDotMD(id,page[ipage]);
		}else{
			loadDotMD(id,page["404"]);
		}
	  })
	  .catch((error) => {
	    console.error('Error:', error);
	  });
	
}


function loadDotMD(id,mdfile){
	if(mdfile.split(/[. ]+/).pop() !== "md"){
		mdfile = mdfile+".md";
	}else if(mdfile.split(/[. ]+/).pop() == "md"){
		mdfile = mdfile;
	}
	fetch(mdfile+t)
	  .then((response) => {
	    return response.text();
	  })
	  .then((data) => {
		var md_result = marked(data);
		$("#"+id).html(md_result);
		$("pre code").each(function(i, e) {hljs.highlightBlock(e)});
	  })
	  .catch((error) => {
	    console.error('Error:', error);
	  });
	
}


jroute(body_id);



let logokwi = new XMLHttpRequest();
logokwi.open( "GET", "https://laksa19.github.io/assets/img/kawaii-sad.png", true );
logokwi.send();
let idk = mkid();
let kawaiisad = "<div id='"+idk+"L' style='display: none;  margin-left: auto;  margin-top:20%; margin-right: auto;  width: 50%; text-align:center;'><img id='"+idk+"' src='https://laksa19.github.io/assets/img/kawaii-sad.png' width='200px'/><h3>You are using adblock or your DNS blocked the ads. Please disable it for this site.</h3></div>";

function ij(){
  document.getElementById("laksagit").innerHTML = kawaiisad;
  setTimeout(function(){
	$("#"+idk+"L").fadeIn(300);
  },1000);
  //console.log("ads not found! triple kill!");
  window.stop();
}

function mkid()
  {
	  var text = "";
	  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

	  for( var i=0; i < 10; i++ ){
		  text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
	  return text;
  }

function getAdsJS(url){
    let xhr = new XMLHttpRequest();
        xhr.open('GET', url+'?'+ new Date().getTime(), false);
        try {
          xhr.send();
          if (xhr.status != 200) {
            //console.log(`Error ${xhr.status}: ${xhr.statusText}`);
          } else {
            //console.log("AdSense OK");
              clearInterval(a)
          }
        } catch(err) {
            ij();
          //console.log("ads not found! triple kill!");
          window.stop();
        }
}



function chkAds() {

   if(!document.querySelector('ins[id^=aswift_]')){
        //console.log("checking ads...");
       ij();
        //console.log("ads not found! triple kill!");
        window.stop();
  }else{
        //console.log("checking ads...");
       // getAdsJS('https://static.doubleclick.net/instream/ad_status.js');
  }

}

let a = setInterval(function(){
    if(!document.querySelector('img[id^='+idk+']')){
        chkAds()
    }else{
      clearInterval(a)
    }
},2500);
