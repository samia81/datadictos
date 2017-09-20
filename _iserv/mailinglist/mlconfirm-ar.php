<?php  
	$ACTION = "";    
	$NAME = "";
	$SIGN = "";
	$EMAIL = "";
	$URL_KO99 = "_message-ar.html?PGRpdiBzdHlsZT0idGV4dC1hbGlnbjpjZW50ZXIiPjxoMT5Db25maXJtYXRpb24gZCZhcG9zO2Fib25uZW1lbnQ8L2gxPjxkaXYgY2xhc3M9InR3LXBhcmEiPjxwPj8/PyA/PyA/Pz8/PyA/Pz8/ID8/Pz8/Pz8/ID8/LiA/Pz8/Pz8gPz8gPz8/Pz8/ID8/Pz8/Pz8/Pz8gPz8/Pz8gPz8gPz8gPz8/PyA/Pz8/PyA/Pz8/PyA/Pz8/Pz8gPz8/Pz8gPz8/Pz8gPz8uIChlcnJvciA5OSk8L3A+PGJyPjxicj48L2Rpdj48L2Rpdj4=";
	$URL_KO2 = "_message-ar.html?PGRpdiBzdHlsZT0idGV4dC1hbGlnbjpjZW50ZXIiPjxoMT5Db25maXJtYXRpb24gZCZhcG9zO2Fib25uZW1lbnQ8L2gxPjxkaXYgY2xhc3M9InR3LXBhcmEiPjxwPj8/PyA/PyA/Pz8/PyA/Pz8/ID8/Pz8/Pz8/ID8/LiA/Pz8/Pz8gPz8gPz8/Pz8/ID8/Pz8/Pz8/Pz8gPz8/Pz8gPz8gPz8gPz8/PyA/Pz8/PyA/Pz8/PyA/Pz8/Pz8gPz8/Pz8gPz8/Pz8gPz8uIChlcnJvciAyKTwvcD48YnI+PGJyPjwvZGl2PjwvZGl2Pg==";
	$URL_SUB_CONF = "_message-ar.html?PGRpdiBzdHlsZT0idGV4dC1hbGlnbjpjZW50ZXIiPjxoMT5Db25maXJtYXRpb24gZCZhcG9zO2Fib25uZW1lbnQ8L2gxPjxkaXYgY2xhc3M9InR3LXBhcmEiPjxwPj8/PyA/PyA/Pz8/PyA/Pz8/Pz8/PyA/Pz8/LiA/Pz8/ID8/Pz8gPz8/Pz8gPz8gPz8/PyA/Pz8/PyA/Pz8/Py4gPz8/PyA/Py48L3A+PGJyPjxicj48L2Rpdj48L2Rpdj4=";
	$URL_UNSUB_CONF = "_message-ar.html?PGRpdiBzdHlsZT0idGV4dC1hbGlnbjpjZW50ZXIiPjxoMT5Db25maXJtYXRpb24gZGUgZOlzYWJvbm5lbWVudDwvaDE+PGRpdiBjbGFzcz0idHctcGFyYSI+PHA+Pz8/ID8/ID8/Pz8/ID8/PyA/Pz8/PyA/Pz8/Pz8/PyA/Pz8/PyA/Py4gPz8/PyA/Pz8/ID8/Pz8/ID8/ID8/Pz8gPz8/Pz8gPz8/Pz8uID8/Pz8gPz8uPC9wPjxicj48YnI+PC9kaXY+PC9kaXY+";
	$HTTP_PREFIX = (false)?'https://':'http://';		
	while( list($key, $val) = each($_GET) ) {  
		if( $key == "mlaction" )
			$ACTION = $val;
		else if( $key == "mlsign" )
			$SIGN = $val;
		else if( $key == "mlemail" )
			$EMAIL = ( $val );    
		else if( $key == "mlname" )
			$NAME = ( $val );    
	}  
	$HREF = $HTTP_PREFIX.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];
	$HREF = substr( $HREF, 0, strpos( $HREF, '_iserv' ) );
	if( $SIGN !== md5( $EMAIL . "8d9fea008a698442f4a68ef6d89fba51" ) ) {
		header( 'Location: ' . $HREF . $URL_KO99 );		
		exit;
	}
	$old_mask = umask( 0 );
	if( !is_dir( 'data' ) ) {
		if( mkdir( 'data', 0777 ) === FALSE ) {
			umask( $old_mask ); 
			header( 'Location: ' . $HREF . $URL_KO2 );		
			exit;
		}
		else {
			touch( 'data/index.html' );
		}
	}
	chdir( 'data' );
	if( $ACTION == 'sub' ) {
		if( file_exists( $EMAIL.'.unsub' ) )
			rename( $EMAIL.'.unsub', $EMAIL.'.sub' );
		touch( $EMAIL . '.sub' );
		header( 'Location: ' . $HREF . $URL_SUB_CONF );		
	}
	else if ( $ACTION == 'unsub' ) {
		if( file_exists( $EMAIL.'.sub' ) )
			rename( $EMAIL.'.sub', $EMAIL.'.unsub' );
		touch( $EMAIL . '.unsub' );
		header( 'Location: ' . $HREF . $URL_UNSUB_CONF );		
	}
?>  
