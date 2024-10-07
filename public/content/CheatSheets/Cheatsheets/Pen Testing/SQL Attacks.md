- SQL Injection
	- # Method 1 : Attack log in form or any online form
	
		- ### 1 Step: Website Enumeration:
			- ![[Website Enumeration]]
	
		- ### 2 Step Test log ion form or other forms, If AQL vulnerability is suspected
			- ![[SQL Attacks]]
	
		- ### Questions: #question
		- How do to check for vulnerable SQL ?


- ### Connect to SQL
	- This will work only with SQL Services that are misconfigured and allow log in without a password.
	
	- #### Connect:
		- `mysql <flag> <  >`
			- `-h <Target IP}>` : Connect to Host
			- `-u <User Name>` : User name to log-in with, if not logging in with current user
			
	- #### Navigate once connected:
		- `SHOW databases;` : Prints out the databases we can access.
		- `USE {database_name};` : Set to use the database named {database_name}.
		- `SHOW tables;` : Prints out the available tables inside the current database. 
		- `SELECT * FROM {table_name};` : Prints out all the data from the table {table_name}.
		  