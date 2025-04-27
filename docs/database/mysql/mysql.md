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
    rpm --import https://repo.mysql.com/RPM-GPG-KEY-mysql-2023
    07.  yum install mysql-community-server
    09.  systemctl start mysqld
    10.  cat /var/log/mysqld.log | grep password
    11.  mysql -uroot -p
    12.  alter user 'root'@'localhost' identified by '&?Á9:Ò])Û¡;ôØîÁõi´©|uï£±ö¡Yxrìyz'
    13.  flush privileges;
```

## 安装mysql

### dpkg安装

```shell
https://dev.mysql.com/downloads/mysql/
选择对应版本，ubuntu linux， 对应OS version
下载 (mysql-server_8.4.4-1ubuntu22.04_amd64.deb-bundle.tar)
tar -xvf (mysql-server_8.4.4-1ubuntu22.04_amd64.deb-bundle.tar) 
dpkg -i *.deb

如果有问题 
sudo apt --fix-broken install -y
sudo apt clean
sudo apt autoclean
sudo apt autoremove -y

然后继续
修改密码
ALTER USER 'root'@'localhost' IDENTIFIED WITH caching_sha2_password BY '你的密码';

```

### 可执行文件安装

```shell
ldd version # 确定用的是2.28还是其他版本
https://dev.mysql.com/downloads/mysql/ # 下载地址 linux-Generic 可直接安装, source code 编译安装
groupadd mysql
useradd -g mysql mysql
tar -xvf filename.tar.xz # 解压
mv mysql  /usr/local/mysql
cd /usr/local/mysql/
mkdir data
mkdir temp
mkdir log
touch log/error.log
chown -R mysql.mysql /usr/local/mysql/
chmod -R 0750 /usr/local/mysql/

./bin/mysqld --initialize --console --user=mysql --basedir=/usr/local/mysql --datadir=/usr/local/mysql/data --log-error=/usr/local/mysql/log/error.log

touch /usr/local/mysql/my.cnf
ln -s /usr/local/mysql/my.cnf /etc/my.cnf
```

my.cnf配置

```shell
[mysql]
#设置mysql客户端默认字符集
default-character-set=utf8mb4

[mysqld]
# sql_mode=NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO
user=mysql
skip-name-resolve

#设置3306端口
port = 3306

#缓存配置
tmp_table_size=1024M
max_heap_table_size=1024M

#设置mysql的安装目录
basedir=/usr/local/mysql
#设置mysql数据库的数据的存放目录 错误日志
datadir=/usr/local/mysql/data
tmpdir=/usr/local/mysql/temp
pid-file=/usr/local/mysql/mysql.pid
log-error=/usr/local/mysql/log/error.log
socket=/usr/local/mysql/temp/mysql.sock

#允许最大连接数
max_connections=200


#创建新表时将使用的默认存储引擎
default-storage-engine=INNODB

#此处是区分大写的，但是mysql8只有在初始化时设置lower_case_table_names=1才有效
#lower_case_table_names=1
max_allowed_packet=500M

#取消binlog
skip-log-bin

#开启load file
local-infile=1
secure_file_priv=

[client]
socket=/usr/local/mysql/temp/mysql.sock
```

mysql.service

```shell
[Unit]
Description=mysql service
After=network.target

[Service]
User=mysql
Group=mysql
WorkingDirectory=/usr/local/mysql
PrivateTmp=true
Type=simple
ExecStart=/usr/local/mysql/bin/mysqld --defaults-file=/etc/my.cnf
ExecStop=/usr/bin/kill -15 $MAINPID
Restart=always
RestartSec=60
StartLimitInterval=0

[Install]
WantedBy=multi-user.target

```

ln -s /usr/local/mysql/bin/mysql /usr/bin/mysql

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
