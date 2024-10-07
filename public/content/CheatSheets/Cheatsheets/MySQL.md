### Usage :

- ### Connecting:
	- `mysql <flag> <  >`
		- `-h < >` : Connect to Host
		- `-u < >` : User name to log-in with, if not logging in with current user






- `mysql -u root -p`
  - ***Usage:*** `mysql -u root -p`
  - ***Definition:*** Log in to MySQL as root user with a password prompt.
  - ***Tags:*** #mysql #login #root

- `FLUSH PRIVILEGES;`
  - ***Usage:*** `FLUSH PRIVILEGES;`
  - ***Definition:*** Reload the privileges in MySQL.
  - ***Tags:*** #mysql #flush #privileges

- `UPDATE mysql.user SET authentication_string=PASSWORD('<new_password>') WHERE User='root';`
  - ***Usage:*** `UPDATE mysql.user SET authentication_string=PASSWORD('new_password') WHERE User='root';`
  - ***Definition:*** Update the root user password in MySQL.
  - ***Tags:*** #mysql #update #password

- `SHOW DATABASES;`
  - ***Usage:*** `SHOW DATABASES;`
  - ***Definition:*** List all databases in MySQL.
  - ***Tags:*** #mysql #show #databases

- `UPDATE <table> SET <column>=<value> WHERE <condition>;`
  - ***Usage:*** `UPDATE mysql.user SET authentication_string=PASSWORD('newpassword') WHERE User='root';`
  - ***Definition:*** Update records in a MySQL table.
  - ***Tags:*** #mysql #update #table

- `FLUSH PRIVILEGES;`
  - ***Usage:*** `FLUSH PRIVILEGES;`
  - ***Definition:*** Reload the privilege tables in MySQL.
  - ***Tags:*** #mysql #flush #privileges

