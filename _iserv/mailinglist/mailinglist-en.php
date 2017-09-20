<?php  
	$FROM = "samia@hs-traiteur.com";
	$URL_OK = "_message-en.html?PGRpdiBzdHlsZT0idGV4dC1hbGlnbjpjZW50ZXIiPjxoMT5Db25maXJtYXRpb24gZCZhcG9zO2Fib25uZW1lbnQ8L2gxPjxkaXYgY2xhc3M9InR3LXBhcmEiPjxoMj4gPC9oMj48cD5BbiBlbWFpbCBoYXMgYmVlbiBzZW50IHRvIHlvdS4gUGxlYXNlIGNoZWNrIHlvdXIgZW1haWxzIGluIGZldyBtaW51dGVzIGluIG9yZGVyIHRvIGNvbmZpcm0geW91ciByZXF1ZXN0LjwvcD48YnI+PGJyPjwvZGl2PjwvZGl2Pg==";
	$URL_KO = "_message-en.html?PGRpdiBzdHlsZT0idGV4dC1hbGlnbjpjZW50ZXIiPjxoMT5Db25maXJtYXRpb24gZCZhcG9zO2Fib25uZW1lbnQ8L2gxPjxkaXYgY2xhc3M9InR3LXBhcmEiPjxoMj4gPC9oMj48cD5Tb3JyeSwgYW4gZXJyb3Igb2NjdXJyZWQgb24gdGhlIHNlcnZlci4gUGxlYXNlIGNvbnRhY3QgdGhlIHdlYm1hc3Rlci48L3A+PGJyPjxicj48L2Rpdj48L2Rpdj4=";
	$TO = "";
	$NAME = "";
	$CONFACTION = "";
	$CONFSUBJECT = "";
	$CONFTEXT = "";
	$CRLF = "\r\n";	
	while( list($key, $val) = each($_POST) ) {
		if( $key == "mlemail" )
			$TO = ( $val );
		else if( $key == "mlconfaction" )
			$CONFACTION = ( $val );
		else if( $key == "mlconfsubject" )
			$CONFSUBJECT = ( $val );
		else if( $key == "mlconftext" )
			$CONFTEXT = ( $val );
		else if( $key == "mlname" )
			$NAME = ( $val );
	}  
	$LANGEXT = substr($_SERVER['PHP_SELF'], -7);
	if( $LANGEXT[0] == '-' ) {
		$LANGEXT = substr($LANGEXT,0,3);
	} else
		$LANGEXT = "";
	$HREF = getenv("HTTP_REFERER");
	$HREF = substr( $HREF, 0, strrpos( $HREF, '/' ) + 1 );
	if( $TO != "" )
	{
		$SIGN = md5( $TO . "8d9fea008a698442f4a68ef6d89fba51" );
		$URL = $HREF."_iserv/mailinglist/mlconfirm".$LANGEXT.".php?mlaction=".$CONFACTION."&mlsign=".$SIGN."&mlemail=".$TO."&mlname=".$NAME;
		$CONFSUBJECT = str_replace( "\'", "'", $CONFSUBJECT );
		$CONFTEXT = str_replace( "<br>", $CRLF, $CONFTEXT );
		$CONFTEXT = str_replace( "\'", "'", $CONFTEXT );		
		$headers = 
			"MIME-Version: 1.0" . $CRLF .
			"Content-Type: text/plain; charset=utf-8" . $CRLF .
			"Content-Transfer-Encoding: 8bit" . $CRLF .
			"From: $FROM" . $CRLF .
			"Return-Path: $FROM" . $CRLF .
			"X-Mailer: PHP/" . phpversion() . $CRLF;
		mail($TO, '=?UTF-8?B?'.base64_encode($CONFSUBJECT).'?=', $CONFTEXT . $CRLF . $URL, $headers );
		header( 'Location: ' . $HREF . $URL_OK );		
	} else
		header( 'Location: ' . $HREF . $URL_KO );		
?>  
