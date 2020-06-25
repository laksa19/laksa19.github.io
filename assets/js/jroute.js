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
    const imacontent = "<div style='position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);text-align:center;'><img src='https://laksa19.github.io/assets/img/kawaii-sad.png' width='200px'/><h3>Please disable your Ad Blocker</h3></div>";
    const as = setInterval(function(){
    if(!document.querySelector('ins[id^=aswift_]')){
        console.log("ads not found! triple kill!");
        document.body.innerHTML = imacontent;
        setTimeout(function(){
            clearInterval(as)
        },5000)
        window.stop();
    }else{
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://static.doubleclick.net/instream/ad_status.js?'+ new Date().getTime(), false);
        try {
          xhr.send();
          if (xhr.status != 200) {
            console.log(`Error ${xhr.status}: ${xhr.statusText}`);
          } else {
            console.log("ads ok!");
            clearInterval(as)
          }
        } catch(err) {
          console.log("ads not found! triple kill!");
          document.body.innerHTML = imacontent;
          window.stop();
        }
    }
},2500);
