# nginx

## 编译指令

```shell
cd /usr/local/src
wget https://nginx.org/download/nginx-1.25.4.tar.gz
tar -zxvf nginx-1.25.4.tar.gz
mv nginx-1.25.4 nginx
cd nginx
./configure --prefix=/usr/local/nginx --pid-path=/var/run/nginx/nginx.pid \
    --lock-path=/var/lock/nginx.lock \
    --error-log-path=/var/log/nginx/error.log \
    --http-log-path=/var/log/nginx/access.log \
    --with-http_gzip_static_module \
    --http-client-body-temp-path=/var/temp/nginx/client \
    --http-proxy-temp-path=/var/temp/nginx/proxy \
    --http-fastcgi-temp-path=/var/temp/nginx/fastcgi \
    --http-uwsgi-temp-path=/var/temp/nginx/uwsgi \
    --http-scgi-temp-path=/var/temp/nginx/scgi \
    --with-http_stub_status_module \
    --with-http_ssl_module \
    --with-openssl=/usr/local/src/openssl # 不加就会用系统自带的openssl

make && make install
ln -s /usr/local/nginx/sbin/nginx /usr/bin/nginx
nginx -V
```

## 需要阅读的文档

[nginx](https://nginx.org/en/docs/)

## nginx.service

```shell
[Unit]
Description=nginx
After=network.target remote-fs.target nss-lookup.target

[Service]
Type=forking
PIDFile=/var/run/nginx/nginx.pid
ExecStartPre=/usr/local/nginx/sbin/nginx -t
ExecStart=/usr/local/nginx/sbin/nginx
ExecReload=/usr/local/nginx/sbin/nginx -s reload
ExecStop=/usr/local/nginx/sbin/nginx -s quit
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

## 主要编译参数

```shell
# 默认安装位置
--prefix=/usr/local/nginx
```

## nginx.conf完整配置

```shell
user       www www;  ## Default: nobody
worker_processes  8;  ## cat /proc/cpuinfo|grep "cpu cores"|uniq
error_log  logs/error.log;
pid        /var/run/nginx/nginx.pid;
worker_rlimit_nofile 8192;

events {
  worker_connections  4096;  ## Default: 1024
}

http {
  include    conf/mime.types;
  include    /etc/nginx/proxy.conf;
  include    /etc/nginx/fastcgi.conf;
  index    index.html index.htm index.php;

  default_type application/octet-stream;
  log_format   main '$remote_addr - $remote_user [$time_local]  $status '
    '"$request" $body_bytes_sent "$http_referer" '
    '"$http_user_agent" "$http_x_forwarded_for"';
  access_log   logs/access.log  main;
  sendfile     on;
  tcp_nopush   on;
  server_names_hash_bucket_size 128; # this seems to be required for some vhosts

  server { # php/fastcgi
    listen       80;
    server_name  domain1.com www.domain1.com;
    access_log   logs/domain1.access.log  main;
    root         html;

    location ~ \.php$ {
      fastcgi_pass   127.0.0.1:1025;
    }
  }

  server { # simple reverse-proxy
    listen       80;
    server_name  domain2.com www.domain2.com;
    access_log   logs/domain2.access.log  main;

    # serve static files
    location ~ ^/(images|javascript|js|css|flash|media|static)/  {
      root    /var/www/virtual/big.server.com/htdocs;
      expires 30d;
    }

    # pass requests for dynamic content to rails/turbogears/zope, et al
    location / {
      proxy_pass      http://127.0.0.1:8080;
    }
  }

  upstream big_server_com {
    server 127.0.0.3:8000 weight=5;
    server 127.0.0.3:8001 weight=5;
    server 192.168.0.1:8000;
    server 192.168.0.1:8001;
  }

  server { # simple load balancing
    listen          80;
    server_name     big.server.com;
    access_log      logs/big.server.access.log main;

    location / {
      proxy_pass      http://big_server_com;
    }
  }
}
```

## location 匹配分析

### 匹配符号

`location [=|~|~*|^~|@] /uri/ { … }`  

| 符号      | 类型 | 规则     | 作用                             |
| :-------- | :--- | :------- | :------------------------------- |
| ~         | 正则 | 正则     | 大小写敏感                       |
| ~*        | 正则 | 正则     | 大小写不敏感                     |
| =         | 普通 | 严格匹配 | 匹配到就直接结束                 |
| /a/b      | 普通 | 最大匹配 | 匹配到以后，还要跟正则battle     |
| /a/b.html | 普通 | 严格匹配 | 匹配到以后就直接结束             |
| ^~        | 普通 | 最大匹配 | 普通匹配直接battle获胜，直接结束 |

引用文档 [Nginx之location匹配规则详解]([https://](https://www.cnblogs.com/lidabo/p/4169396.html))  

* 首先匹配普通location
* 当location指定了`^~`，则不继续匹配正则
* 当location`=`严格匹配上，则不继续匹配正则
* 当location`/a/b/c.html`正好匹配上，则不继续匹配正则
* 正则location顺序匹配，且只要匹配到第一个就停止后面的匹配

总结: 正则location匹配让步普通location的严格精确匹配结果；但覆盖普通location的最大前缀匹配结果  

示例：

```shell
root    /data/www;
location / {
  index  index.html index.htm;
  return 200 "location /";
}

# 先考虑 1,2,3,4,5 
# 匹配到2
# 如果匹配上1,4,则继续匹配正则6,7 
# 如果6,7满足则停止，如果不满足则按1,4的顺序来，先满足先匹配

# 1
location /abc/ {
  return 200 "location /acc/";
}

# 2
location = /accd {
  return 200 "location = /accd";
}

# 3
location ^~ /accd/ {
  return 200 "location ^~ /accd/";
}

# 4
location /abcd/ {
  return 200 "location /ab/";
}

# 5
location = /a {
  return 200 "location = /a";
}

# 6
location ~ ab {
  return 200 "location ~ ab";
}

# 7
location ~ a {
  return 200 "location ~ a";
}
