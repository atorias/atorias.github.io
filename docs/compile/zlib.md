# zlib

```shell
cd cd /usr/local/src/
wget https://www.zlib.net/zlib-1.3.1.tar.gz
mv zlib-1.3.1 zlib
cd zlib
./configure --prefix=/usr/local/zlib
rm -y /etc/ld.so.conf.d/zlib.conf
touch /etc/ld.so.conf.d/zlib.conf
echo "/usr/local/zlib/lib" >> /etc/ld.so.conf.d/zlib.conf
ldconfig -v
```
