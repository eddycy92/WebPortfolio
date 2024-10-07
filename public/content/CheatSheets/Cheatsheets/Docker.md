
- `docker exec -it <container name> <command>`
  - ***Usage:*** `docker exec -it nginx-db-1 mysql -u root`
  - ***Definition:*** Run a command in a running Docker container.
  - ***Tags:*** #docker #container #exec

- `docker stop <container name>`
  - ***Usage:*** `docker stop nginx-db-1`
  - ***Definition:*** Stop a running Docker container.
  - ***Tags:*** #docker #container #stop

- `docker run --name <container name> --detach <image> <command>`
  - ***Usage:*** `docker run --name nginx-db-1-reset -v /home/nginx/mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root --detach mysql:latest --skip-grant-tables`
  - ***Definition:*** Run a new Docker container with the specified name, image, and command.
  - ***Tags:*** #docker #container #run
    
- `docker run --name <container name> --detach mysql:latest --skip-grant-tables`
  - ***Usage:*** `docker run --name nginx-db-1-reset --detach mysql:latest --skip-grant-tables`
  - ***Definition:*** Run a new Docker container with MySQL image, bypassing grant tables for troubleshooting.
  - ***Tags:*** #docker #container #mysql #skip_grant_tables

- `docker exec -it <container name> bash`
  - ***Usage:*** `docker exec -it nginx-db-1 bash`
  - ***Definition:*** Execute bash shell inside a running Docker container.
  - ***Tags:*** #docker #exec #bash

- `docker remove <container name>`
  - ***Usage:*** `docker remove nginx-db-1`
  - ***Definition:*** Remove a Docker container by name.
  - ***Tags:*** #docker #remove #container


- `docker-compose logs <service>`
  - ***Usage:*** `docker-compose logs db`
  - ***Definition:*** Display logs for a specific service managed by Docker Compose.
  - ***Tags:*** #docker #docker-compose #logs

- `docker-compose down`
  - ***Usage:*** `docker-compose down`
  - ***Definition:*** Stop and remove Docker Compose containers, networks, volumes, and images created by `docker-compose up`.
  - ***Tags:*** #docker #docker-compose #down

- `docker-compose up -d`
  - ***Usage:*** `docker-compose up -d`
  - ***Definition:*** Build, (re)create, start, and attach to containers for a service in detached mode.
  - ***Tags:*** #docker #docker-compose #up #detached

- `docker network ls`
  - ***Usage:*** `docker network ls`
  - ***Definition:*** List all Docker networks.
  - ***Tags:*** #docker #network #list

- `docker-compose exec <service> <command>`
  - ***Usage:*** `docker-compose exec db mysql -u root -p`
  - ***Definition:*** Execute a command in a running service container.
  - ***Tags:*** #docker #docker-compose #exec

- `docker ps`
  - ***Usage:*** `docker ps`
  - ***Definition:*** List all running Docker containers.
  - ***Tags:*** #docker #ps #list

- `docker exec -it <container name> <command>`
  - ***Usage:*** `docker exec -it nginx-db-1-reset mysql -u root`
  - ***Definition:*** Run a command in a running Docker container.
  - ***Tags:*** #docker #exec #container

- `docker rm <container name>`
  - ***Usage:*** `docker rm nginx-db-1-reset`
  - ***Definition:*** Remove a stopped Docker container.
  - ***Tags:*** #docker #remove #container

- `docker ps`
  - ***Usage:*** `docker ps`
  - ***Definition:*** List running Docker containers.
  - ***Tags:*** #docker #ps #list

- `docker-compose up -d`
  - ***Usage:*** `docker-compose up -d`
  - ***Definition:*** Start Docker Compose services in detached mode.
  - ***Tags:*** #docker #compose #up #detached

