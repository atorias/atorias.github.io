# firewalld

## 常用命令

```sh
# 查看状态
systemctl status firewalld
## 开启防火墙
systemctl start firewalld
## 关闭防火墙
systemctl stop firewalld
## 查看端口号
netstat -ntulp | grep port
## 查看端口是否开启
firewall-cmd --query-port=666/tcp
## 添加端口
firewall-cmd --add-port=123/tcp --permanent
## 添加后必须重载
firewall-cmd --reload
## 关闭端口
firewall-cmd --permanent --remove-port=123/tcp
## 关闭后必须重载
firewall-cmd --reload
## 查看所有端口
firewall-cmd --list-all
## 若遇到无法开启
systemctl unmask firewalld.service
systemctl start firewalld.service
```
