<?php
	$db = new SQLite3('my_database') or die('Unable to open database');
	$query = "CREATE TABLE IF NOT EXISTS scores(ip STRING PRIMARY KEY, score STRING)";
	$db->exec($query) or die('Database creation failed.');

	$ip = $_SERVER['REMOTE_ADDR'];
	$score = $_POST['RAW_DATA'];
	$query = "DELETE FROM scores WHERE ip='$ip'; INSERT INTO scores VALUES('$ip', '$score');";
	$db->exec($query) or die('Unable to update score.');
?>