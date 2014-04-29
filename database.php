<?php  
	require 'vendor/autoload.php';

	use Illuminate\Database\Capsule\Manager as Capsule;

	//Register a new capsule for DB configuration	
	$capsule = new Capsule;
	$capsule->addConnection([
	    'driver'    => 'mysql',
	    'host'      => 'localhost',
	    'database'  => 'old-mutual-MD-app',
	    'username'  => 'root',
	    'password'  => '',
	    'charset'   => 'utf8',
	    'collation' => 'utf8_unicode_ci',
	    'prefix'    => '',
	]);
	$capsule->bootEloquent();

	echo "<pre>";
	print_r($_REQUEST);
	echo "</pre>";
	die();
?>