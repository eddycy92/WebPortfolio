---
---
## Basic
- `ls <directory>`
  - ***Usage:*** `ls /home/nginx/mysql`
  - ***Definition:*** List directory contents.
  - ***Tags:*** #unix #ls #list

- `cat <file>`
  - ***Usage:*** `cat docker-compose.yml`
  - ***Definition:*** Concatenate and display the content of files.
  - ***Tags:*** #unix #cat #display


## General Commands

- `grep`
	- **Definition**: Print lines that match patterns
	- **Tags**: 
		- #search 
		- #filter
- `traceroute`
	- **Definition**: Print the route packets take to the network host
	- **Tags**: 
		- #network 
		- #diagnostics

## System Information

- `lscpu`
	- **Definition**: List CPU details
	- **Tags**: #system #cpu
- `top`
	- **Definition**: Display Linux tasks
	- **Tags**: #system #processes
- `htop`
	- **Definition**: Interactive process viewer
	- **Tags**: #system #processes
- `dmesg`
	- **Definition**: Print kernel ring buffer
	- **Tags**: #system #kernel
- `free -m`
	- **Definition**: Display memory usage
	- **Tags**: #system #memory
- `uptime`
	- **Definition**: Tell how long the system has been running
	- **Tags**: #system #uptime
- `watch -n 1 df -h`
	- **Definition**: Watch disk space usage change over time
	- **Tags**: #system #disk

## Disk Management

- `df -h`
	- **Definition**: Report file system disk space usage
	- **Tags**: #disk #usage
- `du -sh <directory>`
	- **Definition**: Estimate file space usage
	- **Tags**: #disk #usage
- `lsblk`
	- **Definition**: List information about block devices
	- **Tags**: #disk #devices
- `fdisk -l`
	- **Definition**: List disk partitions
	- **Tags**: #disk #partitions
- `mount`
	- **Definition**: Mount a filesystem
	- **Tags**: #disk #mount
- `umount <device>`
	- **Definition**: Unmount a filesystem
	- **Tags**: #disk #unmount

## File Management

- `cp -r <source> <destination>`
	- **Definition**: Copy directories recursively
	- **Tags**: #file #copy
- `mv <source> <destination>`
	- **Definition**: Move/rename files or directories
	- **Tags**: #file #move
- `rm -rvf <path>`
	- **Definition**: Remove not empty directories
	- **Tags**: #file #remove
- `find /path -name <filename>`
	- **Definition**: Search for files in a directory hierarchy
	- **Tags**: #file #search
- `chmod 755 <file>`
	- **Definition**: Change file permissions
	- **Tags**: #file #permissions
- `chown user:group <file>`
	- **Definition**: Change file owner and group
	- **Tags**: #file #ownership
- `tar -czvf archive.tar.gz /path/to/directory`
	- **Definition**: Create a compressed tarball
	- **Tags**: #file #archive

## User Management

- `adduser <username>`
	- **Definition**: Add a user to the system
	- **Tags**: #user #add
- `usermod -aG <group> <username>`
	- **Definition**: Add a user to a group
	- **Tags**: #user #modify
- `passwd <username>`
	- **Definition**: Update a user's authentication tokens
	- **Tags**: #user #password
- `deluser <username>`
	- **Definition**: Remove a user from the system
	- **Tags**: #user #delete
- `groups <username>`
	- **Definition**: Show groups a user is a member of
	- **Tags**: #user #groups

## Service Management

- `systemctl start <service>`
	- **Definition**: Start a service
	- **Tags**: #service #start
- `systemctl stop <service>`
	- **Definition**: Stop a service
	- **Tags**: #service #stop
- `systemctl restart <service>`
	- **Definition**: Restart a service
	- **Tags**: #service #restart
- `systemctl status <service>`
	- **Definition**: Check the status of a service
	- **Tags**: #service #status
- `systemctl enable <service>`
	- **Definition**: Enable a service to start on boot
	- **Tags**: #service #enable
- `systemctl disable <service>`
	- **Definition**: Disable a service from starting on boot
	- **Tags**: #service #disable

## Wordpress

- `wp option set siteurl <url>`
	- **Definition**: Set the site URL in WordPress
	- **Tags**: #wordpress #config
- `wp option set home <url>`
	- **Definition**: Set the home URL in WordPress
	- **Tags**: #wordpress #config
- `wp core download`
	- **Definition**: Download the latest WordPress
	- **Tags**: #wordpress #install
- `wp core config --dbname=<dbname> --dbuser=<dbuser> --dbpass=<dbpass> --dbhost=<dbhost>`
	- **Definition**: Create a wp-config file
	- **Tags**: #wordpress #config
- `wp core install --url=<siteurl> --title=<sitename> --admin_user=<adminuser> --admin_password=<password> --admin_email=<email>`
	- **Definition**: Install WordPress
	- **Tags**: #wordpress #install

## Monitor GPU

- **NVIDIA**:
	- `apt install nvidia-utils-<version>`
		- **Definition**: Install NVIDIA utilities
		- **Tags**: #gpu #nvidia #install
	- `watch -n 0.5 nvidia-smi`
		- **Definition**: Monitor NVIDIA GPU status
		- **Tags**: #gpu #nvidia #monitor
- **AMD**:
	- `rocm-smi`
		- **Definition**: AMD ROCm System Management Interface
		- **Tags**: #gpu #amd #monitor
	- `watch -n 0.5 rocm-smi`
		- **Definition**: Monitor AMD GPU status
		- **Tags**: #gpu #amd #monitor

## Package Management

- **Debian/Ubuntu**:
	- `apt-get update`
		- **Definition**: Update package index
		- **Tags**: #package #debian #update
	- `apt-get upgrade`
		- **Definition**: Upgrade all packages
		- **Tags**: #package #debian #upgrade
	- `apt-get install <package>`
		- **Definition**: Install a new package
		- **Tags**: #package #debian #install
	- `apt-get remove <package>`
		- **Definition**: Remove a package
		- **Tags**: #package #debian #remove
	- `apt-cache search <package>`
		- **Definition**: Search for a package in the repositories
		- **Tags**: #package #debian #search
- **RHEL/CentOS**:
	- `yum update`
		- **Definition**: Update package index
		- **Tags**: #package #rhel #update
	- `yum upgrade`
		- **Definition**: Upgrade all packages
		- **Tags**: #package #rhel #upgrade
	- `yum install <package>`
		- **Definition**: Install a new package
		- **Tags**: #package #rhel #install
	- `yum remove <package>`
		- **Definition**: Remove a package
		- **Tags**: #package #rhel #remove
	- `yum search <package>`
		- **Definition**: Search for a package in the repositories
		- **Tags**: #package #rhel #search



## PCI Commands

- `lspci | grep -i nvme`
	- **Definition**: List PCI devices related to NVMe
	- **Tags**: #pci #nvme
- `echo 1 > /sys/bus/pci/rescan`
	- **Definition**: Rescan PCI bus to detect new devices
	- **Tags**: #pci #nvme

## Module Commands

- `modprobe nvme`
	- **Definition**: Load NVMe kernel module
	- **Tags**: #modules #nvme
- `modprobe nvme-core`
	- **Definition**: Load NVMe core kernel module
	- **Tags**: #modules #nvme
- `lsmod | grep nvme`
	- **Definition**: Check if NVMe modules are loaded
	- **Tags**: #modules #nvme

## Device Commands

- `ls /dev/nvme*`
	- **Definition**: List NVMe devices
	- **Tags**: #devices #nvme
- `ls /dev`
	- **Definition**: List all devices in `/dev`
	- **Tags**: #devices
- `dmesg | grep -i nvme`
	- **Definition**: Gather detailed information about NVMe from kernel logs
	- **Tags**: #devices #nvme

## Mount Commands

- `mkdir /mnt/root`
	- **Definition**: Create a mount point for the root filesystem
	- **Tags**: #mount
- `mount /dev/nvme0n1p2 /mnt/root`
	- **Definition**: Mount the NVMe partition
	- **Tags**: #mount #nvme

## Configuration Commands

- `blkid`
	- **Definition**: Display UUIDs of all partitions
	- **Tags**: #config
- `cat /mnt/root/etc/fstab`
	- **Definition**: Check the contents of the `/etc/fstab` file
	- **Tags**: #config

## Live Environment Commands

- `sudo mount --bind /dev /mnt/root/dev`
	- **Definition**: Bind mount `/dev` directory to chroot environment
	- **Tags**: #liveenv #mount
- `sudo mount --bind /proc /mnt/root/proc`
	- **Definition**: Bind mount `/proc` directory to chroot environment
	- **Tags**: #liveenv #mount
- `sudo mount --bind /sys /mnt/root/sys`
	- **Definition**: Bind mount `/sys` directory to chroot environment
	- **Tags**: #liveenv #mount
- `sudo chroot /mnt/root`
	- **Definition**: Change root to the mounted filesystem
	- **Tags**: #liveenv #chroot
- `update-initramfs -u -k all`
	- **Definition**: Rebuild the initial ramdisk
	- **Tags**: #liveenv #initramfs
- `update-grub`
	- **Definition**: Update the GRUB bootloader configuration
	- **Tags**: #liveenv #grub
- `exit`
	- **Definition**: Exit the chroot environment
	- **Tags**: #liveenv #chroot
- `sudo reboot`
	- **Definition**: Reboot the system
	- **Tags**: #liveenv #reboot

### Uncategorized: ### 
- `dig <domain>`
  - ***Usage:*** `dig allypowerinc.com`
  - ***Definition:*** Query DNS information about a domain.
  - ***Tags:*** #dns #dig #query

- `nslookup <domain>`
  - ***Usage:*** `nslookup allypowerinc.com`
  - ***Definition:*** Query DNS to obtain domain name or IP address mapping.
  - ***Tags:*** #dns #nslookup #query

- `ls <path>`
  - ***Usage:*** `ls /home/nginx`
  - ***Definition:*** List directory contents.
  - ***Tags:*** #linux #ls #list

- `cat <file>`
  - ***Usage:*** `cat docker-compose.yml`
  - ***Definition:*** Concatenate and display file content.
  - ***Tags:*** #linux #cat #display

- `nano <file>`
  - ***Usage:*** `nano /etc/default/grub`
  - ***Definition:*** Edit a file using the nano text editor.
  - ***Tags:*** #linux #nano #edit

- `ps -ef | grep <process>`
  - ***Usage:*** `ps -ef | grep mysql`
  - ***Definition:*** Search for a process by name.
  - ***Tags:*** #linux #ps #grep #process

