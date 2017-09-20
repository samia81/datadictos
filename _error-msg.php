<?php
$HttpStatus = "";
if( isset($_SERVER["REDIRECT_STATUS"]) ) $HttpStatus = $_SERVER["REDIRECT_STATUS"];
if( $HttpStatus == "" ) { @$HttpStatus = $_REQUEST["err"]; }
$lang = "fr";
if( isset($_SERVER["HTTP_ACCEPT_LANGUAGE"]) ) $lang = substr($_SERVER["HTTP_ACCEPT_LANGUAGE"], 0, 2);
$redirecturl = "index.html";
if( $HttpStatus == 404) {
$redirecturl = "_message.html?PGRpdiBzdHlsZT0idGV4dC1hbGlnbjpjZW50ZXIiPjxoMT5FcnJldXI8L2gxPjxkaXYgY2xhc3M9InR3LXBhcmEiPjxoMj4gPC9oMj48cD5QYWdlIE5vdCBGb3VuZDwvcD48YnI+PGJyPjwvZGl2PjwvZGl2Pg==";}
if( headers_sent() ) {
?>
<html>
<head>
<?php echo('<meta http-equiv="Refresh" content="0; url=http://datadictos.site/'.$redirecturl.'">'); ?>
</head>
<body><center><p><br><br><b><a href="http://datadictos.site/index.html">Erreur</a></body></html>
<?php
} else exit( header( "Location: http://datadictos.site/" . $redirecturl ) );
?>