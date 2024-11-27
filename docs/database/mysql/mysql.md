# MYSQL

## 下载地址

[mysql](https://dev.mysql.com/downloads/mysql/)

## 创建数据库并授权用户

```shell

    01.  CREATE DATABASE dinghai CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
    02.  create user user02@'localhost' IDENTIFIED BY 'password!2#4';
    03.  grant all privileges on test.* to user01@'localhost';
    04.  报错 grant process on *.* to atlas001_user@'%';
```

## 创建备份用户

```mysql
CREATE USER 'backup'@'localhost' IDENTIFIED by '9¬6QÙcãËCyOcÓaf«UÕæ6r×îìåð·çDBÔ3';
grant select, show view ,trigger ,event ,lock tables, process, reload, replication client, super ON *.* TO 'backup'@'localhost';
flush privileges; 
```

## 备份脚本

```shell
#!/bin/bash
date=$(date +%Y%m%d%H%M%S)
backuppath=/data/mysql-backup
dbhost=localhost
dbuser=backup
dbpasswd=9¬6QÙcãËCyOcÓaf«UÕæ6r×îìåð·çDBÔ3
time=30
if [ ! -d "$backuppath" ]; then
    mkdir -p "$backuppath" && echo "备份目录创建成功!" || { echo "目录创建失败！"; exit 1; }
fi
mysqldump -h$dbhost -u$dbuser -p$dbpasswd --all-databases | gzip > "$backuppath/$date.sql.gz" || { echo "备份失败！"; exit 1; }
find $backuppath -type f -name "*.sql.gz" -mtime +$time -exec rm -f {} \;
```

## mysql忘记密码

```shell
    01. my.cnf 添加skip-grant-tables 
    02. 重启mysql
    03. mysql -uroot -p 免密登录
    04. select host, user, authentication_string, plugin from user;
    5.flush privileges;
    6.alter user 'root'@'localhost' IDENTIFIED BY 'newpassword'
    7.去掉skip-grant-tables
```

## yum安装mysql8.0

```shell
    01.  wget https://dev.mysql.com/get/mysql80-community-release-el7-1.noarch.rpm
    02.  yum localinstall mysql80-community-release-el7-1.noarch.rpm
    03.  yum clean all
    04.  yum makecache
    05.  groupadd mysql
    06.  useradd -g mysql mysql
    07.  yum install mysql-community-server
    09.  systemctl start mysqld
    10.  cat /var/log/mysqld.log | grep password
    11.  mysql -uroot -p
    12.  alter user 'root'@'localhost' identified by '&?Á9:Ò])Û¡;ôØîÁõi´©|uï£±ö¡Yxrìyz'
    13.  flush privileges;
```

## 安装mysql

### 可执行文件安装

```shell
ldd version # 确定用的是2.28还是其他版本
https://dev.mysql.com/downloads/mysql/ # 下载地址 linux-Generic 可直接安装, source code 编译安装
tar -xvf filename.tar.xz # 解压
mv mysql  /usr/local/mysql
cd /usr/local/mysql/
mkdir data
chown -R mysql.mysql /usr/local/mysql/
bin/mysqld --initialize --user=mysql --basedir=/usr/local/mysql --datadir=/usr/local/mysql/data
https://blog.csdn.net/huaz_md/article/details/138427557
```

### ubuntu 编译

```shell
cd /usr/local/src
wget https://dev.mysql.com/get/Downloads/MySQL-8.0/mysql-boost-8.0.18.tar.gz
apt install build-essential cmake bison libncurses5-dev libssl-dev pkg-config
cmake -DCMAKE_INSTALL_PREFIX=/usr/local/mysql -DMYSQL_DATADIR=/usr/local/mysql/data -DWITH_BOOST=boost -DFORCE_INSOURCE_BUILD=ON &
make && make install

groupadd mysql
useradd -g mysql mysql
mkdir -p /usr/local/mysql/data
chown -R mysql:mysql /usr/local/mysql

vim /etc/my.cnf
[client]
socket = /tmp/mysql.sock
 
[mysqld]
socket = /tmp/mysql.sock
basedir = /usr/local/mysql
datadir = /usr/local/mysql/data

cp /usr/local/mysql/support-files/mysql.server /etc/init.d/mysqld
chmod +x /etc/init.d/mysqld
update-rc.d mysqld defaults
service mysqld start
echo -e '# MySQL PATH\nexport PATH=/usr/local/mysql/bin:$PATH\n' >> /etc/profile
source /etc/profile

alter user 'root'@'%' identified by '123456'

systemctl start mysqld #
systemctl stop mysqld
systemctl restart mysqld
```

## deb安装

```shell
cd /usr/local/src
mkdir mysql-deb
cd mysql-deb
wget -c https://downloads.mysql.com/archives/get/p/23/file/mysql-server_8.0.25-1ubuntu16.04_amd64.deb-bundle.tar
tar -xvf mysql-server_8.0.25-1ubuntu16.04_amd64.deb-bundle.tar
dpkg -i mysql-common_8.0.25-1ubuntu16.04_amd64.deb
dpkg -i mysql-community-client-core_8.0.25-1ubuntu16.04_amd64.deb
dpkg -i mysql-community-client-plugins_8.0.25-1ubuntu16.04_amd64.deb
dpkg -i mysql-community-client_8.0.25-1ubuntu16.04_amd64.deb
dpkg -i mysql-client_8.0.25-1ubuntu16.04_amd64.deb
dpkg -i libmysqlclient21_8.0.25-1ubuntu16.04_amd64.deb
dpkg -i libmysqlclient-dev_8.0.25-1ubuntu16.04_amd64.deb
wget http://security.ubuntu.com/ubuntu/pool/universe/m/mecab/libmecab2_0.996-1.2ubuntu1_amd64.deb
dpkg -i libmecab2_0.996-1.2ubuntu1_amd64.deb
dpkg -i mysql-community-server-core_8.0.25-1ubuntu16.04_amd64.deb
dpkg -i mysql-community-server-debug_8.0.25-1ubuntu16.04_amd64.deb
dpkg -i mysql-server_8.0.25-1ubuntu16.04_amd64.deb
ln -s /usr/bin/mysql  /usr/local/mysql

```

## my.cnf

```shell
log_error = /tmp/mysql.log
    # Slow Query Log
    slow-query-log = 1
    slow-query-log-file = /tmp/mysql-slow.log
    long_query_time = 1 #设置满请求时间, 设置查多少秒的查询算是慢查询
```
