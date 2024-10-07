
#network #nmap #port_scan 
### `Perform a basic scan on the specified IP address.`
- ### **Usage:** `nmap <ip_address>`
- ### **Flags:**
	- #### Port Scan : `Scan all 65535 ports on`
		- **Usage:** `-p 1-65535 <ip_address>`
		- **Tags:** #network #nmap #port_scan
	
	- #### Service Version Detection: `Detect the version of services running on open ports.`
		- **Flag:** `-sV <ip_address>`
		- **Note:** Considered Intrusive
		- **Definition:** 
		- **Tags:** #network #nmap #service_detection
	
	- #### Script Scan: `Performs a script scan using the default set of scripts`
		- **Flag:** `-sc <ip_address>`
		- **Note:** Considered Intrusive
		- **Definition:** 
		- **Tags:** #network #nmap #script_scan
		
	- #### OS Detection: `Detect the operating system running on the specified IP address.`
		- **Usage:** `nmap -O <ip_address>`
		- **Tags:** #network #nmap #os_detection`