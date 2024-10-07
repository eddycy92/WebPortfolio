## Vulnerable Example:

- ### Vulnerable to SQL Injection attacks

		```
		<?php
		
		# Connection to the SQL
		mysql_connect("localhost", "db_username", "db_password"); 
		Database.
		
		# Database table where user information is stored.
		mysql_select_db("users"); 
		
		# User-specified username.
		$username=$_POST['username'];

		#User-specified password.
		$password=$_POST['password']; 
		
		# Query for user/pass retrieval from the DB.
		$sql="SELECT * FROM users WHERE username='$username' AND password='$password'";
		
		# Performs query stored in $sql and stores it in $result.
		$result=mysql_query($sql);

		# Sets the $count variable to the number of rows stored in $result.
		$count=mysql_num_rows($result);

		# Checks if there's at least 1 result, and if yes:
		if ($count==1){
		
		# Creates a session with the specified $username.
		$_SESSION['username'] = $username; 

		# Creates a session with the specified $password.
		$_SESSION['password'] = $password; 

		# Redirect to homepage.
		header("location:home.php"); 

		# No redirection, as the login failed in the case the $count variable is not equal to 1, HTTP Response code 200 OK.
		} else { # If there's no singular result of a user/pass combination: header("location:login.php"); 
		
		} ?>
		
	```