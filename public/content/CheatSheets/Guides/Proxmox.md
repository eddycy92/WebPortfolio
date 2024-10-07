## Restoring Network Connectivity for LXC Container on Proxmox

### Verify and Configure Network Interface Inside the Container

1. **Create or Edit `/etc/network/interfaces`:**

    ```bash
    nano /etc/network/interfaces
    ```

    Add the following configuration:

    ```plaintext
    auto lo
    iface lo inet loopback

    auto eth0
    iface eth0 inet dhcp
    ```

2. **Manually Bring Up the Interface:**

    ```bash
    ip link set eth0 down
    ip link set eth0 up
    dhclient eth0
    ```

3. **Verify Bridge Configuration on Proxmox Host:**

    ```bash
    brctl show
    ```

4. **Set Network Interface for Container from Proxmox Host:**

    ```bash
    pct set 104 -net0 name=eth0,bridge=vmbr0,ip=dhcp
    ```

5. **Restart Container:**

    ```bash
    pct stop 104
    pct start 104
    ```

### Configure DNS

1. **Edit `/etc/resolv.conf`:**

    ```bash
    nano /etc/resolv.conf
    ```

    Add the following content:

    ```plaintext
    nameserver 8.8.8.8
    nameserver 8.8.4.4
    ```

### Test Connectivity

1. **Test Network Connectivity:**

    ```bash
    ping 8.8.8.8
    ping google.com
    ```
