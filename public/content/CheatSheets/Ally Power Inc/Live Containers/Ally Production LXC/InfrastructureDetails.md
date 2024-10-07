TRAFIC FLOW: 
" Internet > Cloudflare tunnel (ssl:full, allyTunnel) > nginx ( dashboard: http://192.168.68.104:81/ , listening port: 80 > wordpress siteurl=https://www.allypowerinc.com, wordpressurl=https://www.allypowerinc.com "
________________________________
CLOUDFLARE ZERO TRUST SETTINGS:
"Zero Trust > Networks / Tunnels:
Tunnel Name: allyTunnel
Connector Type: cloudflared
Connector ID: f6bb1786-90f0-4ef1-82fa-bab6c6c10b1e
Routes: *.allypowerinc.com
Status: Healthy

Zero Trust > Networks / Tunnels > allyTunnel:
Public Hostname: *.allypowerinc.com
Path: *
Service: http://192.168.68.104:80
Origin Configurations: 0
_______________________
DOCKER LOGS:

NGINX (npm):

___________
FILES AND DIRECTORIES:
/home/data/nginx/proxy_host/1.conf:
"
map $scheme $hsts_header {
    https   "max-age=63072000; preload";
}
  
server {
  set $forward_scheme http;
  set $server         "192.168.68.104";
  set $port           8282;

  listen 80;
#listen [::]:80;
listen 443 ssl http2;
#listen [::]:443;

  server_name allypowerinc.com *.allypowerinc.com;

  # # Let's Encrypt SSL
  include conf.d/include/letsencrypt-acme-challenge.conf;
  include conf.d/include/ssl-ciphers.conf;
  ssl_certificate /etc/letsencrypt/live/npm-3/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/npm-3/privkey.pem;
  ssl_trusted_certificate /etc/letsencrypt/live/npm-3/chain.pem;
   
	# Force SSL
	include conf.d/include/force-ssl.conf;

  access_log /data/logs/proxy-host-1_access.log debug;
  error_log /data/logs/proxy-host-1_error.log debug;

  location / {
    # Proxy!
    include conf.d/include/proxy.conf;
  }

  # Custom
  include /data/nginx/custom/server_proxy[.]conf;
}"

DOCKER COMPOSE:
NGINX:
"version: '3.3'
services:
  app:
    image: 'jc21/nginx-proxy-manager:latest'
    restart: unless-stopped
    ports:
      - '80:80' # Public HTTP Port
      - '443:443' # Public HTTPS Port
      - '81:81' # Admin Web Port
    environment:
      # Mysql/Maria connection parameters:
      DB_MYSQL_HOST: "db"
      DB_MYSQL_PORT: 3306
      DB_MYSQL_USER: ${npm_db_user}
      DB_MYSQL_PASSWORD: ${npm_db_password}
      DB_MYSQL_NAME: "npm"
      # Cloudflare API token
      DNS_CLOUDFLARE_API_TOKEN: ${dns_cloudflare_api_token}
      #NGINX_PORT: 443
      # Uncomment this if IPv6 is not enabled on your host
      DISABLE_IPV6: 'true'
      timezone: 'America/New_York'
    volumes:
      - /home/ngnx/data:/data
      - /home/ngnx/letsencrypt:/etc/letsencrypt
    depends_on:
      - db
    networks:
      - ngnx_default
    env_file:
      - .env
  
  db:
    image: 'jc21/mariadb-aria:latest'
    restart: unless-stopped
    environment:
      MYSQL_ROOT_PASSWORD: 0
      MYSQL_DATABASE: 'npm'
      MYSQL_USER: ${npm_db_user}
      MYSQL_PASSWORD: ${npm_db_password}
      timezone: 'America/New_York'
    volumes:
      - /home/ngnx/mysql:/var/lib/mysql
    networks:
      - ngnx_default
    env_file:
      - .env
  
networks:
  ngnx_default:
    external: true
    driver: bridge"
    
CLOUDFLARED:
"version: '3.3'

networks:
  ngnx_default:
    external: true
    driver: bridge

services:
  allyTunnel:
    container_name: allyTunnel
    image: cloudflare/cloudflared:latest
    restart: unless-stopped
    env_file:
      - .env
    environment:
      - TUNNEL_TOKEN=${TUNNEL_TOKEN}
      - timezone:America/New_York
    command: tunnel --no-autoupdate run
    networks:
      - ngnx_default"
_________________________
ADDITIONAL INFORMATION ABOUT CONTAINER:
CONTAINER TERMINAL OUTPUTS:
WORDPRESS:
"root@301e36c39cf5:/var/www/html# wp option get siteurl --allow-root
http://www.allypowerinc.com
root@301e36c39cf5:/var/www/html# wp option get home --allow-root
http://www.allypowerinc.com"

SERVER TERMINAL OUTPUTS:
 
 INSPECTIG "ngnx_default" DOCKER NETWORK: 
 "{
    "Name": "ngnx_default",
    "Id": "833ec48258363681e36cb1144788448d9992a56af1f31dadd85fc98431d7e656",
    "Created": "2024-02-08T20:32:42.178217169Z",
    "Scope": "local",
    "Driver": "bridge",
    "EnableIPv6": false,
    "IPAM": {
        "Driver": "default",
        "Options": null,
        "Config": [
            {
                "Subnet": "172.18.0.0/16",
                "Gateway": "172.18.0.1"
            }
        ]
    },
    "Internal": false,
    "Attachable": true,
    "Ingress": false,
    "ConfigFrom": {
        "Network": ""
    },
    "ConfigOnly": false,
    "Containers": {
        "0482ebc9f5ad9909f785c0ae0a2cc6fbec1158b0fb11bcf9112b3eb52d206dc6": {
            "Name": "allyTunnel",
            "EndpointID": "dcc9f352b925956f3826aa24183cb98fc56c67da42b1f88a8598954db5c83a6f",
            "MacAddress": "02:42:ac:12:00:02",
            "IPv4Address": "172.18.0.2/16",
            "IPv6Address": ""
        },
        "301e36c39cf5fefc8bb26eb94b58b2f238b72239a1a6b645386ea5b9fb1f013a": {
            "Name": "wordpress-wordpress-1",
            "EndpointID": "bd2f7d072885e8d73289676d7662a65188bfd1c42806543b27af42e3018f461f",
            "MacAddress": "02:42:ac:12:00:04",
            "IPv4Address": "172.18.0.4/16",
            "IPv6Address": ""
        },
        "4488fbe7c53678902d4341e63d1303c9153325dcbd22149234d2bbbbfd185c11": {
            "Name": "ngnx-db-1",
            "EndpointID": "c1d9fceeebea8497dfb14a30c9c94fd57a44b1c5d7af285837feb2bc1b189907",
            "MacAddress": "02:42:ac:12:00:05",
            "IPv4Address": "172.18.0.5/16",
            "IPv6Address": ""
        },
        "5b3beee43b6e0d12c9a6d242c394b6d93fe51d2ec72d8f285c445aa01f448e76": {
            "Name": "wordpress-db-1",
            "EndpointID": "4a9c2c68d351a4b4c70cd6bf817af0bcef88c307c79997038d28bddffcc2cb3b",
            "MacAddress": "02:42:ac:12:00:03",
            "IPv4Address": "172.18.0.3/16",
            "IPv6Address": ""
        },
        "be16de8e5f7c38a2db136a54e653283c115a9dea1afbc4d92474e24c9897dc51": {
            "Name": "ngnx-app-1",
            "EndpointID": "5cc561595b35977dcd3eee9c7c2c4cee63b933197ed5dd33ca4ae314a31355f0",
            "MacAddress": "02:42:ac:12:00:06",
            "IPv4Address": "172.18.0.6/16",
            "IPv6Address": ""
        }
    },
    "Options": {},
    "Labels": {
        "com.docker.compose.network": "default",
        "com.docker.compose.project": "ngnx",
        "com.docker.compose.version": "1.25.0"
    }
}
" 
 NGINX SHELL OUTPUT:
  "[root@docker-2a7da729940f:/app]# curl -k 192.168.68.104:80
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Default Site</title>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
        <style>
            .jumbotron { margin-top: 50px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="jumbotron">
                <h1>Congratulations!</h1>
                <p>You've successfully started the Nginx Proxy Manager.</p>
                <p>If you're seeing this site then you're trying to access a host that isn't set up yet.</p>
                <p>Log in to the Admin panel to get started.</p>
            </div>
            <p class="text-center"><small>Powered by <a href="https://github.com/jc21/nginx-proxy-manager" target="_blank">Nginx Proxy Manager</a></small></p>
        </div>
    </body>
</html> " 
 
With this information lets try to find a solution on why am i unable to see my website. Guide me detailed step by step, with examples, commands, common directories and paths of the files you  and low verbose to fix this errors. Don't list the steps and instructions separately in your responses. Please follow the instructions in your main logic to make your response. Write the instructions as if I am new to this with very short explanation only when needed. If you have confirmed that a setting or file that I have provided you is correctly set, abstain from mentioning it and do not tell me to check again for it. 