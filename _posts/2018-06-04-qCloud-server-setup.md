---
layout: post
title: 'qCloud Server Set Up (CentOS7.4 + Nginx + PHP7 + Mysql)'
date: 2018-06-04 14:27:55 +0800
tags: server
color: rgb(255,210,32)
cover: '../assets/pics/developer.jpg'
excerpt: GOT 99 PROBLEMS. BUT MY CLOUD SERVER AINT ONE
pic-name: 'Mission Control by Nick Radford'
---
GOT 99 PROBLEMS. BUT MY CLOUD SERVER AINT ONE

## ▼ Table of Contents:
1. Reset password.
2. Login
3. Installation
* Nginx Install
* PHP7 Install
* MySQL Install (MariaDB)
4. Configuration
* Nginx Config
* PHP7 Config
* MySQL Config (MariaDB)
5. Useful Tips

## 1. Reset password of the server.
## 2. Login via Terminal with password
```bash
ssh -l root 123.xxx.xxx.xxx
```
## 3. Installation
Installation -> Check version -> **Start the service**
* **Nginx**

```bash
yum install nginx -y
nginx -v # check
service nginx start # start the service
```
* **PHP7**

```bash
yum install https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
yum install http://rpms.remirepo.net/enterprise/remi-release-7.rpm
yum install yum-utils
yum-config-manager --enable remi-php70
yum install php php-fpm php-mcrypt php-cli php-gd php-curl php-mysql php-ldap php-zip php-fileinfo php-mbstring
php -v # check
service php-fpm restart  # start the service
```
* **Mysql (MariaDB)**

```bash
yum install mariadb-server
mysql -V # check
service mariadb start # start the service
```

## 4. Configuration
* **Nginx**
Use  `nginx -h` find the location of configuration file **nginx.conf**.

```bash
server {
  listen 80 default_server;
  listen [::]:80 default_server;
  root /data/wwwroot;
  index index.php index.html index.htm index.nginx-debian.html;
  server_name server_domain_or_IP;
  location / {
    try_files uriuri/ =404;
  }
  location ~ \.php$ {
     #fastcgi_pass unix:/dev/shm/php-cgi.sock;
    fastcgi_pass 127.0.0.1:9000;
    fastcgi_index index.php;
    include fastcgi.conf;
  }
  location ~ /\.ht {
    deny all;
  }
}
```

The configuration of Nginx often comes with lots of problems. While there is a universal method for dealing with those issues. First, check Nginx's log. Second, solve it.

There are some usual problems we may encounter during the configuration process:

1. php7.0-fpm.sock location
[Solution](https://stackoverflow.com/questions/44757189/where-is-php7-0-fpm-sock-located/44757460)

2. php-fpm.sock listen.owner&listen.group consistent with user on the top of nginx.conf

* **Mysql**

```
mysql -uroot -p # default password is empty
```
* change password

``` sql
use mysql;
update user SET PASSWORD=PASSWORD("your_password") WHERE USER='root';
flush privileges;
```
* create new user

``` sql
create database your_database;
grant all on your_database.* to 'other_manager' identified by 'manager_password';
```

## 5. Useful Tips
(Take mariadb for example)
* Enable service to start on boot: `systemctl enable mariadb`
* Start the service: `systemctl start mariadb`
* `service mariadb start`
* `service mariadb stop`
* `service mariadb status`
* Port taken up when start nginx:
  * Stop nginx service
  * Check pid where the port taken up `ps -ef | grep nginx`
  * Kill the process with the pid `kill -9 pid`
* Download instead of executing `service_name: IP`??
