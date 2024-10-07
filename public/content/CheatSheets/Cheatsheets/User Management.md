### General Commands

- `adduser <username>`
  - **Definition**: Add a new user to the system.
  - **Tags**: #user #add #admin
- `passwd <username>`
  - **Definition**: Update a user's password.
  - **Tags**: #user #password #update
- `groups <username>`
  - **Definition**: Show groups a user is a member of.
  - **Tags**: #user #group #info

### Administrative Commands

- `usermod -aG <group> <username>`
  - **Definition**: Add a user to a group.
  - **Tags**: #user #modify #group #admin
- `deluser <username>`
  - **Definition**: Remove a user from the system.
  - **Tags**: #user #delete #admin
- `sudo <command>`
  - **Definition**: Execute a command as another user, typically root.
  - **Tags**: #user #sudo #admin
- `sudo -i`
  - **Definition**: Start an interactive root shell.
  - **Tags**: #user #sudo #shell #admin
- `su - <username>`
  - **Definition**: Switch to another user account.
  - **Tags**: #user #switch #admin

### File and Permission Management

- `chown user:group <file>`
  - **Definition**: Change file owner and group.
  - **Tags**: #user #file #ownership #admin
- `chmod 755 <file>`
  - **Definition**: Change file permissions.
  - **Tags**: #user #file #permissions #admin

### Configuration

- `visudo`
  - **Definition**: Edit the sudoers file to manage sudo permissions.
  - **Tags**: #user #sudo #admin


