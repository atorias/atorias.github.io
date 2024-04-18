# firewalld

## 查看状态

```sh
systemctl status firewalld
```

## 开启防火墙

```sh
systemctl start firewalld
```

## 关闭防火墙

```sh
systemctl stop firewalld
```

## 查看端口号

```sh
netstat -ntulp | grep port
```

## 查看端口是否开启

```sh
firewall-cmd --query-port=666/tcp
```

## 添加端口

```sh
firewall-cmd --add-port=123/tcp --permanent
```

## 添加后必须重载

```sh
firewall-cmd --reload
```

## 关闭端口

```sh
firewall-cmd --permanent --remove-port=123/tcp
```

## 关闭后必须重载

```sh
firewall-cmd --reload
```

## 若遇到无法开启

```sh
systemctl unmask firewalld.service
systemctl start firewalld.service
```
