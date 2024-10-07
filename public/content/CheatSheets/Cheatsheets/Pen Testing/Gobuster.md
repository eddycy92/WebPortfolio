Brute Force Enumeration Utility`
___
- ### Requirement: 
	- `go`

- ### Install: 
	1) `git clone https://github.com/OJ/gobuster.git`
	2) `go get && go build`
	3) `go install`

- ### Build
	- `make` 
		- builds for the current Go configuration (i.e., runs go build ). 
	- `make windows`  
		- builds 32 and 64-bit binaries for Windows and writes them to the build folder. 
	- `make linux` 
		- builds 32 and 64-bit binaries for Linux and writes them to the build folder. 
	- `make darwin`
		- builds 32 and 64-bit binaries for Darwin and writes them to the build folder. 
	- `make all` 
		- builds for all platforms and architectures, and writes the resulting binaries to the build folder. 
	- `make clean` 
		- clears out the build folder. make test - runs the tests.
___
- ### Usage: 
	- `gobuster <Command>` 
		-  `dir` : directory/file enumeration
			-  `--url` : Specify the web address of the target machine that runs the HTTP server. 
			-  `--wordlist` : Specify the wordlist that we want to use.
				- Default Location: `/usr/share/seclists`


- ### Download Lists
	- https://github.com/danielmiessler/SecLists
	- `git clone https://github.com/danielmiessler/SecLists`

- ### Notes:
	- ##### Common Credentials:
		- admin:admin 
		- guest:guest 
		- user:user 
		- root:root 
		- administrator:password
		
	- ##### Risk: `highly Detectable`