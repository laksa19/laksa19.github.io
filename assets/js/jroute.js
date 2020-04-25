/*!
 * jRoute "Fake Routing"
 *
 * Copyright 2020 Laksamadi Guko
 * Released under the MIT license
 */

var iurl = window.location.href;
var header_id = "md_header";
var body_id = "md_body";
var footer_id = "md_footer";
  		
function lpage(){
	if(iurl.indexOf("?") > -1){
	  	let a_ = iurl.split("?")[1].replace(/\//gi,"-");
	  	return a_;
	}
}



function jroute(id,ipage = lpage()){

	$.getJSON("assets/json/page.json?"+timeStamp(), function(result) {
		var page = result;
		if(!page[ipage] && !ipage){
			loadDotMD(id,page["home"]);
		}else if(page[ipage]){
			loadDotMD(id,page[ipage]);
		}else{
			loadDotMD(id,page["404"]);
		}
	})
	
}


function loadDotMD(id,mdfile){
	if(mdfile.split(/[. ]+/).pop() !== "md"){
		mdfile = mdfile+".md?"
	}else if(mdfile.split(/[. ]+/).pop() == "md"){
		mdfile = mdfile+"?"
	}
	$.get(mdfile+timeStamp(), function(result) {
		let md_result = marked(result);
		$("#"+id).html(md_result);
		$("#container").fadeIn(200);
		$("pre code").each(function(i, e) {hljs.highlightBlock(e)});
	})
}



function timeStamp() {
	let ts = "";
	let today = new Date();
	let hours = today.getHours();
	let minutes = today.getMinutes();
	let seconds = today.getSeconds();

	let dd = String(today.getDate()).padStart(2, "0");
	let mm = Number(today.getMonth())+1;
	let yyyy = today.getFullYear();

	if (minutes < 10) {
	    minutes = "0" + minutes;
	}
	if (seconds < 10) {
	    seconds = "0" + seconds;
	}

	    ts += mm+"-"+dd+"-"+yyyy+"_"+hours + ":" + minutes + ":" + seconds;

	return ts;
}
jroute(header_id,"header");
jroute(body_id);
jroute(footer_id,"footer");

