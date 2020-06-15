---
layout: post
title: "Webhook Setup (CentOS + PHP)"
date: 2020-05-19 10:56:21 +0800
tags: Server GIT
color: rgb(255,90,90)
cover: '../assets/pics/lion.jpg'
pic-name: 'Lion by Weitong Mai'
---

BACK IN MY DAY IT WAS CALLED CALLBACK-URL, NOT WEBHOOK

(Steps are not ordered but all of them are equally essential)

## 1. Enable exec() or shell_exec() in php.ini


(This took me 5 hours to figure out. Technically it's not the first step but I wanted it to be as outstanding as possible 🙂)

exec() and shell_exec() are disabled in PHP by default. From my experience, you still can use them when you run commands on Terminal and everything is functional but when you send an HTTP request, exec() or shell exec() will return NULL.

Best way to test this is to put `var_dump(exec("date"))` in the PHP file where you send your webhook. if it returns NULL, exec() is disabled in your server and you need to enable it.

Steps:
* Find `diabled_functions` in `php.ini` and remove exec() or shell_exec()
* Restart php-fpm and nginx/apache
`service php-fpm restart`
`service nginx start`

## 2. Change files user and group
If you want the production server to be auto deployed by itself, you make sure that it has enough permissions to do it.
* Pick a group:user who is going to run `git pull` later on. It will be easier if you use apache/nginx user itself. I will be using **www:www** for the entire setup
* Change your project folder's owner to **www:www**: `chown -R www:www hsp`

## 3. Production ssh key setup
* See [github help documentation](https://help.github.com/en/enterprise/2.17/user/github/authenticating-to-github/connecting-to-github-with-ssh)
* Make sure ssh key's user is **www**: `sudo -u www ssh-keygen -t rsa -C "xxxxx@xxxxx.com"`

## 4. Add webhook
* See [https://gitee.com/help/articles/4184#article-header0](https://gitee.com/help/articles/4184#article-header0)

## 5. Test webhook
* Put the script below to the url where your webhook
* Make sure when you run commands, the user is **www**
* The script I'm using is filtering all pushes except for branch master so that it only pulls when someone pushes changes to master
* (Don't remember where I get the script but I get it somewhere 🤔 and modified a bit)

```php
$params = require('.env');
$savePath = "/data/wwwroot/directory/";

$requestBody = file_get_contents("php://input");
if (empty($requestBody)) {
    die('send fail');
}

$content = json_decode($requestBody, true);

if ($content['password']!=$params['webhook']) {
    die('malicious');
}

if ($content['ref']=='refs/heads/master' && $content['total_commits_count']>0) {

    $res = PHP_EOL."pull start --------".PHP_EOL;
    $res .= shell_exec("cd {$savePath} && /usr/bin/sudo -u www git pull origin master");

    $res_log = '-------------------------'.PHP_EOL;
    $res_log .= date('Y-m-d H:i:s').": {$content['user_name']} pushed {$content['total_commits_count']} commit(s) to {$content['repository']['name']} {$content['ref']}:";
    $res_log .= $res.PHP_EOL;
    $res_log .= "pull end --------".PHP_EOL;

    file_put_contents("./git-webhook.log", $res_log, FILE_APPEND);

    return "{$content['user_name']} pushed {$content['total_commits_count']} commit(s) to {$content['repository']['name']} {$content['ref']}";
}

echo 'webhook test successful';
return ;
```

The log looks like this:
```log
-------------------------
2020-05-19 13:10:07: xxx pushed 1 commit(s) to hospital refs/heads/master:
pull start --------
 create mode 100644 test.php
pull end --------
-------------------------
2020-05-19 13:10:48: xxx pushed 1 commit(s) to hospital refs/heads/master:
pull start --------
 delete mode 100644 test.php
pull end --------
```