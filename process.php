<?php  
	include 'database.php'; 
	// echo "<pre>";
	// print_r($_POST);
	// echo "</pre>";
	// die();

	// Create the Submission model 
	class Submission extends Illuminate\Database\Eloquent\Model {
	    public $timestamps = false;
	    protected $fillable = array('first_name', 'last_name', 'birthdate', 'plus_one', 'dietary_requirements', 'plus_one_first_name', 'plus_one_last_name', 'plus_one_id', 'travel_together');
	}

	class Child extends Illuminate\Database\Eloquent\Model {
	    public $timestamps = false;
	    protected $fillable = array('name', 'birthday', 'submission_id', 'parent_name');
	}
	
	$submission = new Submission;

	//Ensure they have agreed to the terms and conditions
	if (isset($_POST['gscid']) && $_POST['gscid'] != '') {
		//Ensure they only enter once
		//$exist = $submission->where('gscid', $_POST['gscid'])->count();
		//if ($exist == 0) {

			// Add the submission
			$submission->gscid = $_POST['gscid'];
			$submission->first_name = $_POST['first_name'];
			$submission->last_name = $_POST['last_name'];
			$submission->birthdate = date( 'Y-m-d', strtotime($_POST['birthyear'].'-'.$_POST['birthmonth'].'-'.$_POST['birthday']));
			if (isset($_POST['children'])) {
				$submission->number_children = $_POST['children'];
			}
			$submission->travel_together = $_POST['travel_together'];
			//If there is a plus one
			if ($_POST['plus_one'] == 'true') {
				$submission->plus_one = $_POST['plus_one_type'];
				$submission->plus_one_first_name = $_POST['plus_one_first_name'];
				$submission->plus_one_last_name = $_POST['plus_one_last_name'];
				$submission->plus_one_id = $_POST['plus_one_id'];
			}
			else {
				$submission->plus_one = 'none';
			}
			$submission->dietary_requirements = $_POST['dietary_requirement_type'];
			// Save it to the database
			$submission->save();

			if (!empty($_POST['child'])) {
				foreach ($_POST['child'] as $child) {
					$new_child = new Child;
					$new_child->name = $child['child_name'];
					$new_child->birthday = date( 'Y-m-d', strtotime($child['birth_year'].'-'.$child['birth_month'].'-'.$child['birth_day']));
					$new_child->submission_id = $submission->id;
					$new_child->parent_name = $_POST['first_name'].' '.$_POST['last_name'];
					$new_child->save();
				}
			}

			if ($_POST['lang'] == 'eng') {
				header('Location: thankyou.html');
			}
			elseif ($_POST['lang'] == 'afr') {
				header('Location: dankie.html');
			}

		// }
		// else {
		// 	echo "It appears you have already entered this competition.";
		// }
	} 
	else {
		echo "There are URL paramaters missing, please ensure you have followed the link provided to you";
		//echo "Please ensure you have agreed to the terms and conditions";
	}
	 
	
	
?>