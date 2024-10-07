### Network Engineering Technical Interview Cheatsheet

---

## Networking Commands

### Basic Commands

#### `curl <protocol>://<ip address>:<port>`
- **Usage:** `curl http://192.168.68.132:80`
- **Definition:** Make a network request to a specified IP address and port using the specified protocol.
- **Tags:** #network #curl #http #download #download_html

#### `traceroute <ip address>`
- **Usage:** `traceroute 192.168.68.132`
- **Definition:** Trace the route packets take to the specified IP address.
- **Tags:** #network #traceroute #diagnostics

#### `ping <ip address>`
- **Usage:** `ping 192.168.68.132`
- **Definition:** Send ICMP echo requests to the specified IP address and measure the response time.
- **Tags:** #network #ping #diagnostics

#### `nslookup <domain>`
- **Usage:** `nslookup allypowerinc.com`
- **Definition:** Query DNS to obtain domain name or IP address mapping.
- **Tags:** #network #dns #nslookup

#### `dig <domain>`
- **Usage:** `dig allypowerinc.com`
- **Definition:** Perform DNS lookup and display detailed query information.
- **Tags:** #network #dns #dig

#### `netstat -tuln`
- **Usage:** `netstat -tuln`
- **Definition:** Print network connections, routing tables, interface statistics, masquerade connections, and multicast memberships.
- **Tags:** #network #netstat #connections

## Advanced Network Troubleshooting

#### Check for Exposed Port
- **net-tools:**
  - **Usage:** `netstat -tuln | grep :443`
  - **Definition:** Display listening ports and filter for port 443
  - **Tags:** #networking #ports

- **iproute2:**
  - **Usage:** `ss -tulnp |grep :443`
  - **Definition:** Display socket statistics and filter for port 443
  - **Tags:** #networking #ports

- **lsof:**
  - **Usage:** `lsof -iTCP -sTCP:LISTEN -P | grep ':443'`
  - **Definition:** List open files and filter for TCP port 443
  - **Tags:** #networking #ports

#### Kill Unused Ports
- **lsof:**
  - **Usage:** `sudo lsof -i :<port>`
  - **Definition:** List open files for a specific port
  - **Tags:** #networking #ports

  - **Usage:** `sudo systemctl stop <service-name>`
  - **Definition:** Stop a service
  - **Tags:** #service #stop

  - **Usage:** `sudo kill <PID>`
  - **Definition:** Kill a process by PID
  - **Tags:** #system #process

#### Check Network Interfaces
- **Usage:** `ifconfig`
  - **Definition:** Configure network interfaces
  - **Tags:** #networking #interfaces

- **Usage:** `ip addr show`
  - **Definition:** Show addresses assigned to all network interfaces
  - **Tags:** #networking #interfaces

#### Check Routing Table
- **Usage:** `route -n`
  - **Definition:** Display the IP routing table
  - **Tags:** #networking #routing

- **Usage:** `ip route show`
  - **Definition:** Display the IP routing table
  - **Tags:** #networking #routing

#### Ping
- **Usage:** `ping <hostname>`
  - **Definition:** Send ICMP ECHO_REQUEST to network hosts
  - **Tags:** #networking #ping

- **Usage:** `ping6 <hostname>`
  - **Definition:** Send ICMP ECHO_REQUEST to IPv6 network hosts
  - **Tags:** #networking #ping

- **Usage:** `traceroute <hostname>`
  - **Definition:** Print the route packets take to the network host
  - **Tags:** #networking #traceroute


---
## Advanced Logging and Monitoring
---
### Syslog

#### Basic Configuration
- **Edit Configuration:** `vi /etc/rsyslog.conf`
- **Add Line:** `*.* @<central_log_server_ip>:514`
- **Definition:** Forward all log messages to a central log server.
- **Tags:** #logging #syslog #centralized_logs

#### Send Specific Log Files
- **Edit Configuration:** `vi /etc/rsyslog.d/<app>.conf`
- **Configuration:**
    ```sh
    $template TmplAppLogs,"/var/log/<app>/app.log"
    if $programname == '<app>' then -?TmplAppLogs
    & ~
    ```
- **Definition:** Save logs from a specific application to a designated file.
- **Tags:** #logging #syslog #application_logs

#### Rotate and Compress Logs
- **Edit Configuration:** `vi /etc/logrotate.d/<app>`
- **Configuration:**
    ```sh
    /var/log/<app>/*.log {
        daily
        missingok
        rotate 14
        compress
        delaycompress
        notifempty
        create 640 root adm
        sharedscripts
        postrotate
            systemctl reload rsyslog > /dev/null 2>/dev/null || true
        endscript
    }
    ```
- **Definition:** Rotate logs daily, keep 14 days of logs, compress older logs, and notify rsyslog to reload.
- **Tags:** #logging #logrotate #configuration

### dmesg

#### View Kernel Ring Buffer
- **Usage:** `dmesg`
- **Definition:** Display the kernel ring buffer.
- **Tags:** #system #dmesg #kernel

#### Save dmesg Output to File
- **Usage:** `dmesg > /var/log/dmesg.log`
- **Definition:** Save the current kernel ring buffer to a file.
- **Tags:** #system #dmesg #log

#### Follow Kernel Messages in Real Time
- **Usage:** `dmesg -w`
- **Definition:** Follow kernel messages as they are generated.
- **Tags:** #system #dmesg #realtime

---
### systemctl

#### Start a Service
- **Usage:** `sudo systemctl start <service_name>`
- **Definition:** Start the specified service.
- **Tags:** #system #systemctl #service

#### Stop a Service
- **Usage:** `sudo systemctl stop <service_name>`
- **Definition:** Stop the specified service.
- **Tags:** #system #systemctl #service

#### Check Service Status
- **Usage:** `sudo systemctl status <service_name>`
- **Definition:** Display the status of the specified service.
- **Tags:** #system #systemctl #service

#### Enable Service at Boot
- **Usage:** `sudo systemctl enable <service_name>`
- **Definition:** Enable the specified service to start at boot.
- **Tags:** #system #systemctl #service

#### Disable Service at Boot
- **Usage:** `sudo systemctl disable <service_name>`
- **Definition:** Disable the specified service from starting at boot.
- **Tags:** #system #systemctl #service
---
## Centralized Log Management

### Synchronizing Logs to a Centralized Location

#### rsync
- **Usage:** `rsync -avz /path/to/local/logs/ user@<central_log_server_ip>:/path/to/remote/logs/`
- **Definition:** Sync logs from a local directory to a centralized log server using rsync.
- **Tags:** #logging #rsync #centralized_logs

#### scp
- **Usage:** `scp /path/to/local/logs/* user@<central_log_server_ip>:/path/to/remote/logs/`
- **Definition:** Securely copy logs from a local directory to a centralized log server using scp.
- **Tags:** #logging #scp #centralized_logs

#### NFS (Network File System)

- **Server Configuration:**
  - **Edit Configuration:** `vi /etc/exports`
  - **Add Line:** `/path/to/shared/logs  <client_ip>(rw,sync,no_root_squash,no_subtree_check)`
  - **Definition:** Share a directory from the server.

- **Client Mount:**
  - **Usage:** `mount <server_ip>:/path/to/shared/logs /path/to/local/mount`
  - **Definition:** Mount the shared directory on the client.
  - **Tags:** #logging #nfs #centralized_logs

#### Samba (SMB/CIFS)

- **Server Configuration:**
  - **Edit Configuration:** `vi /etc/samba/smb.conf`
  - **Add Section:**
    ```sh
    [logs]
    path = /path/to/shared/logs
    valid users = <user>
    read only = no
    ```

- **Client Mount:**
  - **Usage:** `mount -t cifs //<server_ip>/logs /path/to/local/mount -o user=<user>`
  - **Definition:** Share a directory using Samba and mount it on the client.
  - **Tags:** #logging #samba #centralized_logs

#### Centralized Logging with Log Aggregation Tools (e.g., ELK Stack)

- **Logstash Configuration:**
  - **Edit Configuration:** `vi /etc/logstash/conf.d/<app>.conf`
  - **Configuration:**
    ```sh
    input {
      file {
        path => "/var/log/<app>/*.log"
        start_position => "beginning"
      }
    }
    output {
      elasticsearch {
        hosts => ["http://<elasticsearch_server_ip>:9200"]
        index => "<app>-logs"
      }
    }
    ```
  - **Definition:** Aggregate logs from various sources and centralize them in Elasticsearch using Logstash.
  - **Tags:** #logging #logstash #elk_stack #centralized_logs
---



