- `grep -A10 "menuentry 'Ubuntu'" /boot/grub/grub.cfg`
	- ***Definition:*** verify kernel on grub menu
	- ***Tags:*** #grub #boot #boot_configuration

- `cat /proc/cmdline`
	- ***Definition:*** check current grub configurations
	- ***Tags:*** #grub #boot #boot_configuration 

- `sudo nano /etc/default/grub`
	- ***Definition:*** edit GRUB configuration file
	- ***Tags:*** #grub #configuration

- `sudo update-grub`
	- ***Definition:*** update GRUB with new configuration
	- ***Tags:*** #grub #update

- `sudo reboot`
	- ***Definition:*** reboot system to apply new GRUB settings
	- ***Tags:*** #grub #reboot #apply_changes

### GRUB Options

- `pci=use_crs`
	- ***Definition:*** Use BIOS-configured resource allocation for PCI devices
	- ***Outcome:*** Attempted to resolve IRQ assignment issues
	- ***Tags:*** #grub #pci #irq

- `pci=nomsi`
	- ***Definition:*** Disable Message Signaled Interrupts (MSI) system-wide
	- ***Outcome:*** Could not be used due to the filesystem being on NVMe
	- ***Tags:*** #grub #pci #msi

- `acpi=off`
	- ***Definition:*** Disable Advanced Configuration and Power Interface (ACPI)
	- ***Potential Outcome:*** May resolve IRQ conflicts by disabling ACPI, but will disable power management features
	- ***Tags:*** #grub #acpi #irq

- `irqpoll`
	- ***Definition:*** Poll for IRQs instead of using the default handling mechanism
	- ***Potential Outcome:*** May fix IRQ assignment problems by forcing the kernel to poll for IRQs
	- ***Tags:*** #grub #irq

- `pci=biosirq`
	- ***Definition:*** Use PCI BIOS calls to get the interrupt routing table
	- ***Potential Outcome:*** Can help in scenarios where the BIOS provides correct IRQ settings
	- ***Tags:*** #grub #pci #irq

- `noacpi`
	- ***Definition:*** Completely disable ACPI
	- ***Potential Outcome:*** Similar to `acpi=off`, it may resolve IRQ conflicts but will disable power management
	- ***Tags:*** #grub #acpi #irq

- `pci=noacpi`
	- ***Definition:*** Do not use ACPI for PCI IRQ routing
	- ***Potential Outcome:*** Can fix IRQ issues by preventing ACPI from interfering with PCI IRQ routing
	- ***Tags:*** #grub #pci #irq

- `noirqdebug`
	- ***Definition:*** Disable the debugging of IRQs
	- ***Potential Outcome:*** Reduces noise in logs, making it easier to identify real issues
	- ***Tags:*** #grub #irq #debug
