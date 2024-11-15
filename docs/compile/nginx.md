# nginx

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
    --with-openssl=/usr/local/src/openssl

make && make install
ln -s /usr/local/nginx/sbin/nginx /usr/bin/nginx
nginx -V
```
