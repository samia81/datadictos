STR_SEARCH_QUERY_MSG="Search results for";STR_NO_RESULT="No results found";STR_SEARCH_BUTTON="Search";STR_NEW_SEARCH="New search :";STR_SCORE="Score";STR_TERMS="Terms";MIN_WORD_LEN=2;DISPLAY_SRCH_INFO=1;USE_UTF8=1;REMOVE_ACCENTS=1;BOLD_LINKS=0;ONLINE_WEBSITE=0;ALLWORDSONLY=0;namesArray=new Array("Welcome to your Data universe"," looking understand data jargons you have not the meaning keyword related universe click discover our galaxy  "," looking understand data word have concrete examples consult your dictos search more  "," your word does not exist dictos tell about that via email you want propose definition enrich send will taken into account quickly contact  "," browse dictos enter the data universe and view trends new terms used this more  "," data tdwi see more comming soon big jargons -no sql ","Data"," data set values qualitative quantitative variables descriptive information describes something numerical numbers measured collected and reported analyzed whereupon can visualized using graphs images other analysis tools general concept refers the fact that some existing knowledge represented coded form suitable for better usage processing source https wikipedia org wiki "," structured data refers any that resides fixed field within record file this includes contained relational databases and spreadsheets has the advantage being easily entered stored queried analyzed one time because high cost performance limitations storage memory processing using were only way effectively manage anything couldn't fit into tightly organized structure would have paper filing cabinet source webopedia  "," unstructured data all those things that can't readily classified and fit into neat box photos graphic images videos streaming instrument webpages pdf files powerpoint presentations emails blog entries wikis word processing documents semi-structured cross between the two type structured but lacks strict model structure with tags other types markers are used identify certain elements within doesn't have rigid for example software now can include metadata showing author's name date created bulk document just being text sender recipient time fixed fields added email message content any attachments graphics tagged keywords such creator location making possible organize locate xml markup languages often manage source webopedia "," big data high volume velocity and variety information assets that require new forms processing enable enhanced decision making insight discovery process optimization deals with exceeds the capacity conventional database relational concerns how collect store extract analyse visualize valuable informations from huge various ","Data Management"," data management encompasses integration quality disciplines plus related ones such metadata master profiling and automation for stewardship governance some vendor offerings these are included tools source tdwi checklist report modern practices digital business requirements diq all "," encompasses number related disciplines and tasks including etl elt batch microbatch data sync replication virtualization federation event processing stream capture prep other selfservice source tdwi checklist report modern integration quality practices for digital business requirements diq all dq "," data quality with integration also multidisciplinary and includes standardization validation verification augmentation geocoding monitoring deduplication matching merging householding name-and-address cleansing source tdwi checklist report modern practices for digital business requirements diq all dq "," goal master data management bring together and exchange such customer supplier product from disparate applications silo source https bi-survey com "," self-service tasks are those that business users carry out themselves instead passing them for fulfillment give the tools more freedom and responsibility same time depends very much specific requirements particular user roles source https bi-survey com ","Systems and tools"," data management encompasses integration quality disciplines plus related ones such metadata master profiling and automation for stewardship governance some vendor offerings these are included tools source tdwi checklist report modern practices digital business requirements diq all ");urlsArray=new Array("index-en.html","index-en.html#B0dqW6E1","index-en.html#heqHlINw","index-en.html#RsRVE16q","index-en.html#BPAM8WCN","index-en.html#in4oFxOb","data.html","data.html#2SbyXmaY","data.html#oD94rSnZ","data.html#hrLM9WDa","data.html#YxlHLGIG","data-management.html","data-management.html#o9zNuHfZ","data-management.html#Q13i6V29","data-management.html#AXxIQvwH","data-management.html#6nF5oNDB","data-management.html#r3buHIoE","systems-and-tools.html","systems-and-tools.html#8vdZi7mG");titlesArray=new Array("Univers Data | data dictos by Samia NACIRI","Looking to understand data jargons? You have not u...","Search a word on Dictos","Propose a word or a Dictos ","View all dictos","Derniers Dictos","Parcourir Dictos | data dictos","Data By Wikipedia","Structured Data","Unstructured and Semi-structured Data","Big Data By Gartner","Data Management","Data management By TDWI","Data Integration By TDWI ","Data Quality by TDWI","Master data management","Self-Service BI","Systems and tools","Data management By TDWI");descArray=new Array("Vous cherchez à comprendre le jargon Data? Vous n'avez compris la signification d'un mot de l'univers Data ? cliquez-ici pour découvrir notre galaxy D...","&","&","&","&","&","Cet espace est riche en terme de définitions et Dictos liées à l'univers Data. Il fournit aussi la référence de chaque Dicto en toute transparence.","&","&","&","&","","&","&","&","&","&","","&");sublinksArray=new Array(19);var linksCount=19;function SE_SubmitNewSearch(){var p=$('#new-searchbox-req').val();if(typeof(p)!=="undefined"&&p!=""&&p.replace(/^\s+|\s+$/g,'')!=""){$("#new-searchbox").submit();return true;}return false;}function GetParam(paramName){paramStr=document.location.search;if(paramStr=="")return"";if(paramStr.charAt(0)=="?")paramStr=paramStr.substr(1);arg=(paramStr.split("&"));for(i=0;i<arg.length;i++){arg_values=arg[i].split("=");if(unescape(arg_values[0])==paramName){if(self.decodeURIComponent)ret=decodeURIComponent(arg_values[1]);else ret=unescape(arg_values[1]);return ret;}}return"";}function GetSEParam(){var query=GetParam("req");query=query.replace(/[\++]/g," ");query=query.replace(/\</g,"&lt;");query=query.replace(/[\"+]/g," ");return query;}function replaceAll(str,from,to){var idx=str.indexOf(from);while(idx>-1){str=str.replace(from,to);idx=str.indexOf(from);}return str;}function formatChars(str){if(!str)return"";str=str.toLowerCase();if(REMOVE_ACCENTS){var a="àáâãäåòóôõöèéêëçìíîïùúûüÿñ";var b="aaaaaaoooooeeeeciiiiuuuuyn";for(i=0;i<a.length;i++)str=replaceAll(str,a.charAt(i),b.charAt(i));}str=replaceAll(str,"'"," ");return str;}function SortCompare(a,b){if(a[2]==b[2]){if(a[1]<b[1])return 1;else if(a[1]>b[1])return-1;else return 0;}else if(a[2]<b[2])return 1;else return-1;}function jseSearch(internal){var rootURL='';var SelfURL=document.location.href;var paramIndex=SelfURL.indexOf("?");if(paramIndex>-1)SelfURL=SelfURL.substr(0,paramIndex);paramIndex=SelfURL.indexOf("#");if(paramIndex>-1)SelfURL=SelfURL.substr(0,paramIndex);if(ONLINE_WEBSITE){paramIndex=SelfURL.lastIndexOf('/');if(paramIndex>-1){rootURL=SelfURL.substr(0,paramIndex);paramIndex=rootURL.lastIndexOf('/');if(paramIndex>-1){rootURL=SelfURL.substr(0,paramIndex+1);}else rootURL='';}}SelfURL=SelfURL.replace(/\</g,"&lt;");SelfURL=SelfURL.replace(/\"/g,"&quot;");var req=GetSEParam();var onlyresult=GetParam("twtheme")=="no";if(onlyresult)$("h1").hide();var form='<form id="new-form-search" method="GET">'+STR_NEW_SEARCH+'<div class="controls">'+'<input type="text" id="new-searchbox-req" value="'+req+'" class="input-large" name="req" style="margin:4px 4px 0 0">'+'<input type="submit" onclick="return SE_SubmitNewSearch()" class="btn" value="'+STR_SEARCH_BUTTON+'">'+'</div>'+'</form>';if(req==''||req.length<MIN_WORD_LEN)return('<br>'+form);if($('#searchbox-req')!=null)$('#searchbox-req').val(req);var lnktarget="";var keyword="",tmp="",sublink="";var searchWords=new Array();if(onlyresult)lnktarget="\" target=\"_blank";var i=0,j=0,k=0,t=0,score=0,subscore=0,found=0,keyword_found=0;var result='';var res_table=new Array(0);req=formatChars(req);if(req.length==0)return('<br>'+form);searchWords=req.split(" ");if(internal==null||internal!=1){result+=("<span'>"+STR_SEARCH_QUERY_MSG+" : <strong>"+req+"</span></strong><br>");}for(var q=0;q<linksCount;q++){score=0;for(i=0;i<searchWords.length;i++){keyword=searchWords[i];keyword_found=0;if(keyword.length>MIN_WORD_LEN&&descArray[q]!=null){tmp=formatChars(descArray[q]);if(tmp.indexOf(keyword)!=-1){score++;keyword_found=1;}if(tmp.indexOf(' '+keyword+' ')!=-1)score+=2;tmp=formatChars(titlesArray[q]);if(tmp.indexOf(keyword)!=-1){score++;keyword_found=1;}if(tmp.indexOf(' '+keyword+' ')!=-1)score+=2;if(namesArray[q].indexOf(keyword)!=-1){score++;keyword_found=1;}if(namesArray[q].indexOf(' '+keyword+' ')!=-1)score+=2;sublink='';k=q+1;while(k<=linksCount){tmp=descArray[k];if(tmp==null||tmp.charAt(0)!='&')break;subscore=0;tmp=formatChars(descArray[k]);if(tmp.indexOf(keyword)!=-1){subscore++;keyword_found=1;}if(tmp.indexOf(' '+keyword+' ')!=-1)subscore+=2;tmp=formatChars(titlesArray[k]);if(tmp.indexOf(keyword)!=-1){subscore++;keyword_found=1;}if(tmp.indexOf(' '+keyword+' ')!=-1)subscore+=2;if(namesArray[k].indexOf(keyword)!=-1){subscore++;keyword_found=1;}if(namesArray[k].indexOf(' '+keyword+' ')!=-1)subscore+=2;if(subscore>0){if(typeof(res_table[found])!="undefined"&&res_table[found][3].indexOf(urlsArray[k]+lnktarget)>0){}else {if(!ALLWORDSONLY){sublink+="<tr><td width='35'>&nbsp;</td><td><a href='"+urlsArray[k]+lnktarget+"'>"+titlesArray[k]+"</a></td></tr>";}else{if(keyword_found&&typeof(res_table[found])!="undefined"&&(1+res_table[found][4]==searchWords.length))sublink+="<tr><td width='35'>&nbsp;</td><td><a href='"+urlsArray[k]+lnktarget+"'>"+titlesArray[k]+"</a></td></tr>";}}score+=subscore;}k++;}if(score>0){if(typeof(res_table[found])=="undefined"){res_table[found]=new Array(6);res_table[found][0]=q;res_table[found][1]=score;res_table[found][2]=1;res_table[found][3]=sublink;res_table[found][4]=1;}else{res_table[found][1]=score;res_table[found][2]++;res_table[found][3]+=sublink;res_table[found][4]+=keyword_found;}}}}if(score>0)found++;}if(found==0){result+=("<p><b>"+STR_NO_RESULT+"</b></p>");}else{res_table.sort(SortCompare);result+=('<div>');for(q=0,i=0;q<found;q++){t=res_table[q][0];if((!ALLWORDSONLY||(ALLWORDSONLY&&res_table[q][4]==searchWords.length))&&urlsArray[t].indexOf('#')==-1){var lnk=urlsArray[t]+lnktarget;i++;if(BOLD_LINKS){result+=("<br><b>"+i+". <a href=\""+lnk+"\">"+titlesArray[t]+"</a></b>");}else result+=("<br><b>"+i+".</b> <a href=\""+lnk+"\">"+titlesArray[t]+"</a>");if(descArray[t].length>2)result+=("<br>"+descArray[t]);if(DISPLAY_SRCH_INFO){result+=("<br><span style='font-size: 80%; font-style: italic;'>");if(!ALLWORDSONLY)result+=(""+STR_TERMS+": "+res_table[q][2]+" - ");result+=(""+STR_SCORE+": "+res_table[q][1]);result+=(" - URL: "+rootURL+urlsArray[t]+"</span>");}if(res_table[q][3].length>0){result+=('<table>'+res_table[q][3]+'</table>');}else result+=("<br>");}}result+=('</div>');}if(!onlyresult)result+=('<br>'+form);return result;}