# openssh

```shell
openssh_version=openssh-9.6p1
date_time=$(date +%Y-%m-%d—%H:%M)

cd /usr/local/src
wget https://cdn.openbsd.org/pub/OpenBSD/OpenSSH/portable/$openssh_version.tar.gz
tar -zxvf openssh-9.6p1.tar.gz
mv openssh-9.6p1 openssh
cd openssh
./configure --prefix=/usr/local/openssh \
    --sysconfdir=/etc/ssh \
    --with-ssl-dir=/usr/local/openssl \
    --with-zlib=/usr/local/zlib

# init启动脚本备份
if [ -f "/etc/init.d/sshd" ]; then
    mv /etc/init.d/sshd /etc/init.d/sshd_$date_time.bak
else
    echo -e " /etc/init.d/sshd不存在 " "\033[31m Not backed up(可忽略)\033[0m"
fi
cp /usr/local/src/contrib/redhat/sshd.init /etc/init.d/sshd
chmod u+x /etc/init.d/sshd
chkconfig --add sshd ##自启动
chkconfig --list | grep sshd
chkconfig sshd on

# systemd启动脚本备份
if [ -f "/usr/lib/systemd/system/sshd.service" ]; then
    mv /usr/lib/systemd/system/sshd.service /usr/lib/systemd/system/sshd.service_bak
else
    echo -e " sshd.service不存在" "\033[31m Not backed up(可忽略)\033[0m"
fi

# 备份ssh
cp -ra /etc/ssh /etc/ssh_$date_time.bak

#备份sshd.pam文件
if [ -f "/etc/pam.d/sshd.pam" ]; then
    mv /etc/pam.d/sshd.pam /etc/pam.d/sshd.pam_$date_time.bak
else
    echo -e " sshd.pam不存在" "\033[31m Not backed up(可忽略)\033[0m"
fi
cp -rf /usr/local/src/openssh/contrib/redhat/sshd.pam /etc/pam.d/sshd.pam

# 迁移ssh_config
cp -rf /usr/local/src/openssh/sshd_config /etc/ssh/sshd_config
# 给所有Subsystem 加上注释#
sed -i 's/Subsystem/#Subsystem/g' /etc/ssh/sshd_config
echo "Subsystem sftp /usr/local/src/openssh/libexec/sftp-server" >>/etc/ssh/sshd_config
cp -rf /usr/local/openssh/sbin/sshd /usr/sbin/sshd
cp -rf /usr/local/openssh/bin/ssh /usr/bin/ssh
cp -rf /usr/local/openssh/bin/ssh-keygen /usr/bin/ssh-keygen
sed -i 's/#PasswordAuthentication\ yes/PasswordAuthentication\ yes/g' /etc/ssh/sshd_config
#grep -v "[[:space:]]*#" /etc/ssh/sshd_config  |grep "PubkeyAuthentication yes"
echo 'PermitRootLogin yes' >>/etc/ssh/sshd_config

#重启sshd
service sshd start > /dev/null 2>&1
systemctl start sshd
if [ $? -eq 0 ];then
echo -e "\033[33m--------------------------------------------------------------- \033[0m"
    echo -e " 启动OpenSSH服务成功" "\033[32m Success\033[0m"
echo -e "\033[33m--------------------------------------------------------------- \033[0m"
echo ""
sleep 2
```
