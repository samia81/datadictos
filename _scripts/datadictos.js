$("[data-translate]").jqTranslate('index');

function load_style(){
	var direction;
	(document.dir !=undefined)? direction =document.dir : direction =document.getElementsByTagName("html")[0].getAttribute("dir");

	if (direction=="rtl") {
		/*document.write('<link rel="stylesheet" type="text/css" href="_scripts/bootstrap/css/bootstrap-rtl.min.css">');
		document.write('<link href="_frame/style-rtl.css" rel="stylesheet">');*/
		$("head link#themeB").attr("href", "_scripts/bootstrap/css/bootstrap-rtl.min.css");
		$("head link#themeS").attr("href", "_frame/style-rtl.css");
	}
	else {
		/* document.write('<link rel="stylesheet" type="text/css" href="_scripts/bootstrap/css/bootstrap.min.css">');
		document.write('<link href="_frame/style.css" rel="stylesheet">');*/
		$("head link#themeB").attr("href", "_scripts/bootstrap/css/bootstrap.min.css");
		$("head link#themeS").attr("href", "_frame/style.css");
	}
}


function decMail2(e) {
	var s = "" + e.href,
		n = s.lastIndexOf("/"),
		w;
	if (s.substr(0, 7) == "mailto:") return (true);
	if (n > 0) s = s.substr(n + 1);
	s = s.replace("?", ":")
		.replace("#", "@")
		.replace(/[a-z]/gi, function(t) {
			return String.fromCharCode(t.charCodeAt(0) + (t.toLowerCase() < "n" ? 13 : -13));
		});
	e.href = s;
	return (true);
}

function onChangeSiteLang(href,text) {

	$("html").attr("lang", href);
	if (href == 'fr' ) 	
	{ 
		$("#rub_titre").html ('Les rubriques Dictos'      );  
		$("html").attr("dir", 'ltr');
	}
	else if (href == 'en' ) 	
	{
		$("#rub_titre").html ('Dictos categories'      );  
		$("html").attr("dir", 'ltr');
	}
	else if (href == 'ar' ) 	
	{
		$("#rub_titre").html ('عناوين ديكتوس'      );  
		$("html").attr("dir", 'rtl');
	}
	load_style();
	$(".dropdown-toggle").html(text + '&nbsp;<small>▼</small>');

	$( "ol" ).remove();
	$("[data-translate]").jqTranslate('index',$("html").attr("lang"));
	display_rubrique();
	$( "#rubrique" ).empty();
	add_rubr_data("rubr-data.json");
	
}

function display_rubrique(){
	        
	$.getJSON("rubr.json", function(data) {
		
		var items = [];
		$.each(data, function(key_lg, val_lg) {
			if (key_lg == $("html").attr("lang")) {
					 $.each(val_lg, function(key, val) {
					items.push("<li id='" + key + "'>" + val + "</li>");
					});
				}

		});

		$("<ol/>", {
				"class": "toc-article",
				html: items.join("")
			})
			.appendTo("#mpnav-top");
	});
					
             
	
}
display_rubrique();

function add_rubr_data(file_json){
$.getJSON(file_json, function(data) {
 
	$.each(data, function(key_lg, val_lg) {
		if (key_lg==$("html").attr("lang")) {
				
				$.each(val_lg, function(key, val) { 
					var items = [];
					items.push('<div class="span12 tw-para" id ="' + key +'">');
					items.push("<h2> " + val.title + "</h2>");
					
					items.push('<div class="pobj float-r">');
					items.push('<img style="max-width: 100%; width: 160px;" src="_media/img/thumb/' + val.image + '" alt=></div>');
					
					items.push('<div class="ptext">');
					items.push("<p> " + val.description + "</p>");
					items.push("<p> source : " + val.source + "</p>");
					items.push("</div>");
					
					items.push('<div align="left">'+
                                        '<div class="twsharebtnbar" style="width: 100%; height: 21px; margin-top: 4px; display: inline;">'+
                                            '<div style="float: left; display: block; width: 100px; height: 21px; overflow: hidden;">'+
                                                '<script type="text/javascript" src="http://platform.linkedin.com/in.js">'+
                                                    '// <![CDATA[\n'+
                                                    'lang: ar_AE \n'+
                                                    '// ]]> \n'+
                                                '</script>'+
                                                '<script type="IN/Share" data-counter="right"></script>'+
                                            '</div>'+
                                            '<div style="float: left; display: block; width: 100px; height: 21;">' +
                          '<script type="text/javascript">\n'+
                                                    '// <![CDATA[\n'+
				'document.writeln(\'<iframe src="http://www.facebook.com/plugins/like.php?href=\' + encodeURIComponent("http://datadictos.site/donnees-ar.html#"' + key +')' + '&layout=button_count&show_faces=false&width=100&action=like&font=verdana&colorscheme=light&height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:100px; height:21px;" allowTransparency="true"></iframe>\');'+
                                                    '// ]]>\n'+
                             '</script>\n');
							 items.push('<iframe src="http://www.facebook.com/plugins/like.php?href=' + encodeURIComponent("http://datadictos.site/donnees-ar.html#" + key ) + '&layout=button_count&show_faces=false&width=100&action=like&font=verdana&colorscheme=light&height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:100px; height:21px;" allowTransparency="true"></iframe>');
                                            items.push('</div>'+
                                            '<div style="float: left; display: block;"><a class="twitter-share-button" style="padding: 0 2px 0 2px; width: 100px;" href="https://twitter.com/share" data-url="http://datadictos.site/donnees-ar.html#" '+ key + 'data-lang="ar">Tweet</a></div>'+
                                            '<div style="float: left; display: block;">&nbsp;</div>'+
                                        '</div>'+
										'</div>'+
                                    '</div>');
					try {
						
						$("<div/>", {
							"class": "twpara-row row-fluid ", 
							html: items.join("")
						})
						.appendTo("#rubrique");
					}
					catch(err) {
						document.getElementById("demo").innerHTML = err.message;
					}
				});
				
					
				 
			}

	});

	
});
}

add_rubr_data("rubr-data.json");