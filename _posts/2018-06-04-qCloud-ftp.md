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
useradd qibuer -g ftp -d /data/wwwroot
passwd qibuer
```

## Tips:
1. Check all users on Linux: `cat /etc/passwd`
2. Check which group your user belongs to: `group username`
3. 550 Permission denied: `chown user:group -R [directory]`

### Cheatsheet
* Archived pureftpd on aliyun (/usr/local/pureftpd/bin)
* List all users `./pure-pw list`
* Create a user `pure-pw mkdb`
