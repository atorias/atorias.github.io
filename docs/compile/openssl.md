# openssl

```shell
yum install gcc -y
yum group install 'Development Tools' -y
yum install perl-core zlib-devel -y

rm -rf /etc/ssl

cd /usr/local/src
wget https://www.openssl.org/source/openssl-1.1.1q.tar.gz
tar -zxvf openssl-1.1.1q.tar.gz

if [ -d "openssl" ]; then
    rf -rf openssl-old
    mv openssl openssl-old
fi
mv openssl-1.1.1q openssl
cd openssl
make clean
./config  --prefix=/usr/local/openssl --openssldir=/usr/local/openssl/ssl shared zlib
make && make install

rm -rf /usr/bin/openssl
ln -s /usr/local/openssl/bin/openssl /usr/bin/openssl
rm -rf /usr/include/openssl
ln -s /usr/local/openssl/include/openssl /usr/include/openssl

rm -f /etc/ld.so.conf.d/openssl.conf
touch /etc/ld.so.conf.d/openssl.conf
echo '/usr/local/openssl/lib' > /etc/ld.so.conf.d/openssl.conf
ldconfig -v
```
