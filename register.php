<?php
session_start();
$username=$_POST["email"];
$fname=$_POST["fname"];
$lname=$_POST["lname"];
$address=$_POST["address"];
$email=$_POST["email"];
$phone=$_POST["contact"];
$password=$_POST["password"];
$password1=trim($password);

$hash=hash('sha256', $password1);

$_SESSION["sess_lastname"]=$_POST["lastname"];

$mysqli = new mysqli("localhost","root","root","project");
    if ($mysqli->connect_error){
        die('Could not connect to database!');
    }
		
$salt = createSalt();
function createSalt()
{
    $text = md5(uniqid(rand(), TRUE));
    return substr($text, 0, 3);
}


$hash1 = hash('sha256', $salt . $hash);

$result = mysqli_query($conn,"SELECT net_id from user_login where net_id = '$username'");

if (mysqli_num_rows($result) == 0) {
	
	$result1 = mysqli_query($conn,"SELECT phone from users where email = '$email'");
	echo $email;
	if (mysqli_num_rows($result1) == 0) {
			echo "About to insert";
		$sql="INSERT INTO users (net_id, firstname, lastname,email,phone,address) VALUES
			('$username', '$fname', '$lname', '$email','$phone', '$address')";

			$sql1="INSERT INTO user_login (net_id, password,salt_value) VALUES
			('$username', '$hash1', '$salt')";

			if(!mysqli_query($mysqli,$sql) || !mysqli_query($mysqli,$sql1)){
				header('Location: index.html');
			} else {
				session_regenerate_id();
				$_SESSION['sess_username'] = $username;
				session_write_close();
				// header('Location: user/welcome.html');
			
			}
	} else {
			header('Location: index.html');
	}
} else {
	header('Location: index.html');
}

 

mysqli_close($mysqli);				  
?>