<?php
	$db = new SQLite3('my_database') or die('Unable to open database');
	$query = "CREATE TABLE IF NOT EXISTS scores(ip STRING PRIMARY KEY, score STRING)";
	$db->exec($query) or die('Database creation failed.');

	$ip = $_SERVER['REMOTE_ADDR'];
	$result = $db->query('SELECT * FROM scores') or die('Query failed.');
	while($row = $result->fetchArray()) {
		if($row['ip'] == $ip) {
			echo $row['score'];
		}
	}
?>
