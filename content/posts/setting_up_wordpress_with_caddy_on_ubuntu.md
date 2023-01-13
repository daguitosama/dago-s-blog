---
draft: false
title: Setting up WordPress with  Caddy on Ubuntu
description: How to set this things up nicely
is_feedable: true
uuid: d6e7ac98-9322-4edb-9bd8-c0d7c7bd4fab
date: Wed, 11 Jan 2023 08:37:54 GMT
head : 
    meta: 
        - property: 'og:title'
          content: "Setting up WordPress with  Caddy on Ubuntu"
        - property: 'og:description'
          content: 'How to set this things up nicely'
        - property: 'og:image'
          content: 'https://dago-s-blog.pages.dev/img/setting_up_wordpress_with_caddy_on_ubuntu.png'
        - property: 'og:site_name'
          content: "Dago's Blog"
        - property: 'twitter:card'
          content: 'summary_large_image'
        - property: 'twitter:title'
          content: "Setting up WordPress with  Caddy on Ubuntu"
        - property: 'twitter:image'
          content: 'https://dago-s-blog.pages.dev/img/setting_up_wordpress_with_caddy_on_ubuntu.png'

---

# Setting up WordPress with  Caddy on Ubuntu

::date_and_tags
---
date: "11 Jan 2023"
tags: ['wordpress', 'caddy', 'ubuntu']
---
::




![Techs Graph](/img/setting_up_wordpress_with_caddy_on_ubuntu_graph.png)
This guide is a mix between an Ubuntu [tutorial](https://ubuntu.com/tutorials/install-and-configure-wordpress#1-overview) and [gist](https://gist.github.com/mage1k99/07ce2b09d47920bf5f94a69f51ddeb30) with some fine tune elements that worked for me. 

## Prerequisites
-  Have a ubuntu server up and running, maybe other OS go smooth, but I haven't tested them
-  Have a domain correctly mapped to that server
-  Have `caddy` (v2) working all ready, you cleaned your `apache` or you `nginx`, easy `apt install caddy`  after cleaning.

## Download 
Download WordPress from source and manage permissions on the install dir.
```bash
sudo mkdir -p /srv/www
sudo chown www-data: /srv/www
curl https://wordpress.org/latest.tar.gz | sudo -u www-data tar zx -C /srv/www
```

## Install deps
Notice Im not using specif versions, like `php-fmp@7.4`, not, im getting things off the `apt` shells, they know what they are doing, this way I get a more future resilient script (hopefully).
```bash
sudo apt install php-fpm \
    ghostscript \
    libapache2-mod-php \
    mysql-server \
    php \
    php-bcmath \
    php-curl \
    php-imagick \
    php-intl \
    php-json \
    php-mbstring \
    php-mysql \
    php-xml \
    php-zip
```

## DB time
Using MYSQL
Let's generate a strong password
```bash
openssl rand -base64 20
```
Now let's go sql
```bash
mysql -u root
```
```bash
mysql> CREATE DATABASE wordpress;
```

```bash
mysql> CREATE USER wordpress@localhost IDENTIFIED BY '<your-password>';
```

```bash
mysql> GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER ON wordpress.* TO wordpress@localhost;
```

```bash
mysql> FLUSH PRIVILEGES;
```

```bash
mysql> quit
```

Enable MySQL with 
```bash
sudo service mysql start
```


At this point you should have a note with credentials:
```bash
DB_NAME=wordpress
USER_NAME=wordpress
USER_PASSWORD=<your-password>
```

### Create the db user and stuff
```bash
CREATE USER wordpress@localhost IDENTIFIED BY '<your-password>';
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER ON wordpress.* TO wordpress@localhost;
```

### Configure WordPress with that user
```bash
sudo -u www-data sed -i 's/database_name_here/wordpress/' /srv/www/wordpress/wp-config.php
sudo -u www-data sed -i 's/username_here/wordpress/' /srv/www/wordpress/wp-config.php
sudo -u www-data sed -i 's/password_here/<your-password>/' /srv/www/wordpress/wp-config.php
```

### Replace weak lines with strong lines

In the `wp-config.php` replace the lines:
```bash
define( 'AUTH_KEY',         'put your unique phrase here' );
define( 'SECURE_AUTH_KEY',  'put your unique phrase here' );
define( 'LOGGED_IN_KEY',    'put your unique phrase here' );
define( 'NONCE_KEY',        'put your unique phrase here' );
define( 'AUTH_SALT',        'put your unique phrase here' );
define( 'SECURE_AUTH_SALT', 'put your unique phrase here' );
define( 'LOGGED_IN_SALT',   'put your unique phrase here' );
define( 'NONCE_SALT',       'put your unique phrase here' );
```
with:
```bash
define('AUTH_KEY',         'g>=dH56`]uQW<v pY8B|0bMcS8P;<^UV-yZ^dT;X-E|(t1034MoL:#@T*[ .B&R<');
define('SECURE_AUTH_KEY',  'G}Z-g|-wvE&D]DJ/-;:J]YV`}0(Nf!(-Z|d`c$Gegss[.27%_~PK{YGF}@L}7+-O');
define('LOGGED_IN_KEY',    'rNgY~A.-2,$5E/uj&v8+.jlwFOB@v^-;R]:Ar@f`ww(,{b<Rf>.O~<=?h0s6-`{_');
define('NONCE_KEY',        'b?GfKtAvrK?{,|9}RO~)aB~+~hyU.)jsBVg6A8*`t[!{E=j=XY} e)bmtTEWm8sR');
define('AUTH_SALT',        'BKfv0z-;JQt%!8C}Genci;SsRT{/(<yC`&tJg{FVPgppo#qeRa3G5qZ(MnbhEb^{');
define('SECURE_AUTH_SALT', '&8A@{5hn|g2`=+egU#}[f2ve<@5oiFHT+TeWLyb`1EVM9_THq3hk&pOQ<s5<LCs@');
define('LOGGED_IN_SALT',   '$~x(|;|Gj-Hqo{<g00<oj$P_@7x%`I|T[RCj<B/ Mw]%FSD@N?5Flwf]tJpwil4D');
define('NONCE_SALT',       'a-qlPZ5Nal-5c;&5fuV1f!PJ4qj!?$.BGv,V.bWZI@n*6/Me|KbQYT{M<^3[:_L3');
```

## Caddy Config
```bash
your.domain {
    # good practice to signal on behalf of who 
    # are the certs getting issue
	tls your@email.com

    # logs are optional
	log {
		output file /var/log/caddy/your.domain
		format console
	}

	root * /srv/www/wordpress
	encode gzip
	file_server
	php_fastcgi unix//run/php/php-fpm.sock

	@disallowed {
		path /xmlrpc.php
		path *.sql
		path /wp-content/uploads/*.php
	}

	rewrite @disallowed '/index.php'
}
```

Apply the latter with `systemctl restart caddy`, should go smooth, at least you have other bad things in your file.


## Finish it on the browser
Go to your domain, at this point you should have a working wordpress site, on SSL,
if fails to load, give it a couple of minutes, those SSL certs aren't going to issue
and process it selfs, leave Caddy do his thing. When things clear up, finish the setup
on your new WordPress portal. 

Hopefully not, but if things go wrong, check out the log, that's why I put it there:
```bash
tail -n 10 -f /var/log/caddy/your.domain
```
hit refresh and see what happens, good luck.


## Allow WordPress access file system for plugins and friends
Nice, you have WordPress up and running, now you need the next thing, wish might be
installing plugins, with no FTP please, this [stackoverflow-thread](https://stackoverflow.com/questions/17922644/wordpress-asking-for-my-ftp-credentials-to-install-plugins) talks about it.

You can do it by allowing access to `www-data` on the `wp-content` dir for now.

```bash
sudo chown -R www-data:www-data /srv/www/wordpress/wp-content/
```


## Good Job
**confeti.jpg** 

Take that coffee/tea/your-beverage-of-choice, you earned.