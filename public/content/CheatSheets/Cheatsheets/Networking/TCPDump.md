### Tcpdump

#### Capture Packets to File
- **Usage:** `tcpdump -i <interface> -w /path/to/file`
- **Example:** `tcpdump -i eth0 -w /var/log/tcpdump.log`
- **Definition:** Capture network packets on the specified interface and save them to a file.
- **Tags:** #network #tcpdump #packet_capture

#### Filter Captured Packets
- **Usage:** `tcpdump -i <interface> '<filter>'`
- **Example:** `tcpdump -i eth0 'port 80'`
- **Definition:** Capture only packets matching the filter criteria (e.g., port 80).
- **Tags:** #network #tcpdump #filter

#### Read Captured Packets from File
- **Usage:** `tcpdump -r /path/to/file`
- **Example:** `tcpdump -r /var/log/tcpdump.log`
- **Definition:** Read and analyze packets from a file.
- **Tags:** #network #tcpdump #read_packets