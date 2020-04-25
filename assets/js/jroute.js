/*!
 * jRoute "Fake Routing"
 *
 * Copyright 2020 Laksamadi Guko
 * Released under the MIT license
 */

var iurl = window.location.href;
var t = '?t=' + new Date().getTime();
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
	fetch('./assets/json/page.json'+t)
	  .then((response) => {
	    return response.json();
	  })
	  .then((data) => {
	    var page = data;
		if(!page[ipage] && !ipage){
			loadDotMD(id,page["home"]);
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


jroute(header_id,"header");
jroute(body_id);
jroute(footer_id,"footer");

