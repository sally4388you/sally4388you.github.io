---
layout: post
title: 'qCloud + FTP'
date: 2018.06.04 21:19:03 +0800
tags: Server FTP
color: rgb(106, 173, 114)
cover: '../assets/pics/genetic-testing.jpg'
excerpt: NO MEMES FOR FTP AVAILABLE
pic-name: "Genetic Testing by Michael Parkin"
---

Reference: 
* [Reference 1 unixmen](http://www.unixmen.com/install-configure-ftp-server-centos-7/)
* [Reference 2 nezha](https://nezha.github.io/web%E5%BC%80%E5%8F%91/2016-04-12-%E8%85%BE%E8%AE%AF%E4%BA%91FTP%E7%9A%84%E9%85%8D%E7%BD%AE/)
* [Reference 3 csdn](https://blog.csdn.net/weixin_36171533/article/details/84974478)

## Installation:
```bash
yum -y install vsftpd
yum -y install ftp
```
## After installation:
```bash
useradd your_user_name -g ftp -d /data/wwwroot
passwd your_password
```

## Tips:
1. Check all users on Linux: `cat /etc/passwd`
2. Check which group your user belongs to: `group username`
3. 550 Permission denied / 553 Can't open that file (need to change owner the same with ftp user): `chown user:group -R [directory]`

### [Pure-FTPd](https://wiki.archlinux.org/index.php/Pure-FTPd) on aliyun Cloud
* pureftpd path on aliyun: /usr/local/pureftpd/bin
* List all users `./pure-pw list`
* Modify user's home directory `./pure-pw usermod [username] -d [/home/directory]`
* Commit changes `./pure-pw mkdb`
